"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { testimonials } from "@/lib/data"
gsap.registerPlugin(ScrollTrigger)
export default function TestimonialsSection() {
  const sec = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sec.current?.querySelectorAll(".t-card")
      if (!cards) return
      gsap.set(cards, { opacity: 0, y: 40 })
      ScrollTrigger.create({ trigger: sec.current, start: "top 70%", onEnter: () => gsap.to(cards, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" }) })
    }, sec)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={sec} id="testimonials" className="py-32 bg-[#F0F2F8] px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="label text-[#C49A2E] mb-4" style={{ letterSpacing: "3px" }}>/ Client Stories</p>
          <h2 className="font-playfair font-bold text-[#0A1628]" style={{ fontSize: "clamp(32px,5vw,60px)", lineHeight: 1.1 }}>Trade stories from across the world.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.initials} className="t-card p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-playfair italic text-[#0A1628] text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center font-playfair font-bold text-[#C49A2E] text-sm">{t.initials}</div>
                <div>
                  <p className="font-inter font-semibold text-[#0A1628] text-sm">{t.name}</p>
                  <p className="font-inter text-[#C49A2E] text-xs">{t.co}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
