"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { statement } from "@/lib/data"
gsap.registerPlugin(ScrollTrigger)
export default function StatementSection() {
  const sec = useRef<HTMLElement>(null)
  const wordsRef = useRef<HTMLSpanElement[]>([])
  const tagRef = useRef<HTMLDivElement>(null)
  const words = statement.split(" ")
  useEffect(() => {
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      const wEls = wordsRef.current.filter(Boolean)
      gsap.set(wEls, { color: "rgba(10,22,40,0.08)" })
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: sec.current, start: "top top", end: `+=${words.length * 60}`, pin: true, pinSpacing: true, scrub: 1.5 } })
        tl.to(wEls, { color: "#0A1628", stagger: { each: 0.05 }, ease: "none" })
          .from(tagRef.current, { opacity: 0, y: 20, duration: 1 }, "-=0.5")
        return () => {}
      })
      mm.add("(max-width: 767px)", () => {
        gsap.to(wEls, { color: "#0A1628", stagger: { each: 0.07 }, scrollTrigger: { trigger: sec.current, start: "top 70%", end: "bottom 30%", scrub: 1 } })
        return () => {}
      })
    }, sec)
    return () => { ctx.revert(); mm.revert() }
  }, [words.length])
  return (
    <section ref={sec} id="statement" className="relative min-h-screen flex flex-col items-center justify-center bg-[#FAFBFF] overflow-hidden px-6">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #0A1628 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      <div className="relative z-10 max-w-4xl text-center">
        <p className="font-playfair italic leading-relaxed" style={{ fontSize: "clamp(22px,3.5vw,44px)" }}>
          {words.map((w, i) => <span key={i} ref={el => { if (el) wordsRef.current[i] = el }} className="inline-block mr-[0.28em]">{w}</span>)}
        </p>
        <div ref={tagRef} className="mt-10 flex flex-col items-center gap-3 opacity-0">
          <div className="w-20 h-px bg-[#C49A2E]" />
          <p className="label text-[#C49A2E]" style={{ letterSpacing: "3px" }}>Versa Global</p>
        </div>
      </div>
    </section>
  )
}
