"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export default function HeroSection() {
  const sec = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sec.current?.querySelectorAll(".word")
      const extras = sec.current?.querySelectorAll(".h-extra")
      gsap.set([words ?? [], extras ?? []], { y: "100%", opacity: 0 })
      const tl = gsap.timeline({ delay: 1.4 })
      tl.to(words ?? [], { y: 0, opacity: 1, stagger: 0.08, duration: 0.9, ease: "power4.out" })
        .to(extras ?? [], { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: "power3.out" }, "-=0.4")
    }, sec)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={sec} id="hero" className="relative min-h-screen flex items-center bg-[#FAFBFF] overflow-hidden px-6 md:px-12 pt-24 pb-32">
      {/* World grid BG */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(10,22,40,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none" style={{ background: "linear-gradient(to left, rgba(196,154,46,0.04) 0%, transparent 100%)" }} />

      <div className="relative z-10 max-w-5xl">
        <div className="h-extra overflow-hidden mb-6">
          <div className="word inline-flex items-center gap-2 px-4 py-1.5 border border-[#C49A2E]/40 text-[#C49A2E] text-xs font-inter rounded-full">
            Kochi · India · 60+ Countries
          </div>
        </div>
        <h1 className="font-playfair leading-none mb-6" style={{ fontSize: "clamp(48px,8vw,100px)" }}>
          {[{ w: "Trade", cls: "font-bold text-[#0A1628]" }, { w: "Without", cls: "font-light text-[#0A1628]" }, { w: "Borders.", cls: "font-bold text-[#C49A2E] italic" }].map((item, i) => (
            <div key={i} className="overflow-hidden"><span className={`word ${item.cls}`}>{item.w}</span></div>
          ))}
        </h1>
        <div className="h-extra overflow-hidden mb-8">
          <p className="word font-inter text-[#4A5568]" style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 520 }}>
            Complete import-export consultancy. We connect Kerala businesses to the world — and the world to Kerala.
          </p>
        </div>
        <div className="h-extra overflow-hidden mb-8">
          <div className="word flex flex-wrap gap-4">
            {["60+ Countries","₹50Cr+ Facilitated","800+ Consignments","IEC Certified"].map(b => (
              <span key={b} className="flex items-center gap-1.5 text-sm text-[#4A5568] font-inter">
                <span className="w-4 h-4 rounded-full border border-[#C49A2E]/40 text-[#C49A2E] flex items-center justify-center text-[10px]">✓</span>{b}
              </span>
            ))}
          </div>
        </div>
        <div className="h-extra overflow-hidden">
          <div className="word flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#0A1628] hover:bg-[#1E3A5F] text-white font-inter font-medium text-sm transition-all rounded-sm">Get Consultation</a>
            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border border-[#0A1628]/20 text-[#0A1628] hover:bg-[#0A1628]/5 font-inter text-sm transition-all rounded-sm">Our Services →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
