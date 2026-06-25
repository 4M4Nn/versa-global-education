"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { services } from "@/lib/data"
gsap.registerPlugin(ScrollTrigger)

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  const sec = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sec.current?.querySelectorAll(".word")
      const extras = sec.current?.querySelectorAll(".s-extra")
      if (!words) return
      gsap.set([words, extras ?? []], { y: 50, opacity: 0 })
      ScrollTrigger.create({ trigger: sec.current, start: "top 75%",
        onEnter: () => {
          gsap.to(words, { y: 0, opacity: 1, stagger: 0.07, duration: 0.9, ease: "power4.out" })
          gsap.to(extras ?? [], { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out", delay: 0.3 })
        }
      })
    }, sec)
    return () => ctx.revert()
  }, [])
  const isEven = i % 2 === 0
  const bg = isEven ? "#FAFBFF" : "#F0F2F8"
  return (
    <section ref={sec} className="min-h-screen flex items-center border-b border-gray-100 px-6 md:px-12 py-24" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className={isEven ? "" : "md:order-2"}>
          <div className="word-wrap mb-4"><span className="word label text-[#C49A2E]" style={{ letterSpacing: "3px" }}>{s.num} / {s.short}</span></div>
          <h2 className="font-playfair font-bold text-[#0A1628] mb-4" style={{ fontSize: "clamp(28px,4vw,56px)", lineHeight: 1.1 }}>
            {s.name.split(" ").map((w, j) => <span key={j} className="word-wrap"><span className="word">{w} </span></span>)}
          </h2>
          <p className="s-extra font-inter text-[#4A5568] mb-8" style={{ fontSize: 17, lineHeight: 1.7 }}>{s.desc}</p>
          <a href="#contact" className="s-extra inline-flex items-center gap-2 text-[#0A1628] font-inter font-medium text-sm hover:gap-3 transition-all underline underline-offset-4">Enquire About This Service →</a>
        </div>
        <div className={`${isEven ? "" : "md:order-1"} s-extra flex items-center justify-center min-h-[220px] rounded-2xl border border-[#C49A2E]/15`} style={{ background: "linear-gradient(135deg, rgba(196,154,46,0.05) 0%, rgba(10,22,40,0.03) 100%)" }}>
          <div className="text-center p-10">
            <div className="font-playfair font-bold text-[#C49A2E]" style={{ fontSize: "clamp(40px,6vw,72px)" }}>{s.stat}</div>
            <p className="label text-[#4A5568] mt-2" style={{ letterSpacing: "2px" }}>{s.statLabel}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesSection() {
  return <div id="services">{services.map((s, i) => <ServiceCard key={s.id} s={s} i={i} />)}</div>
}
