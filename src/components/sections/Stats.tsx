"use client"
import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { stats } from "@/lib/data"

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  useEffect(() => {
    if (!isInView || !ref.current) return
    const duration = 2000
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      if (ref.current) ref.current.textContent = Math.floor(eased * target) + suffix
      if (progress === 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target, suffix])
  return <span ref={ref}>0</span>
}

export default function Stats() {
  return (
    <section className="py-20 px-6 bg-[#1B2A4A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="font-playfair text-4xl md:text-5xl font-bold gold-gradient mb-2">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-blue-200 text-sm uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
