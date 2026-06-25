"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
export default function LoadingScreen() {
  const topRef = useRef<HTMLDivElement>(null)
  const botRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [gone, setGone] = useState(false)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => setGone(true) })
      gsap.set(textRef.current, { opacity: 0, y: 20 })
      tl.to(textRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
        .to(topRef.current, { y: "-100%", duration: 0.7, ease: "power4.inOut" }, "+=0.5")
        .to(botRef.current, { y: "100%", duration: 0.7, ease: "power4.inOut" }, "<")
    })
    return () => ctx.revert()
  }, [])
  if (gone) return null
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div ref={topRef} className="absolute inset-x-0 top-0 h-1/2 bg-[#0A1628] flex items-end justify-center pb-8">
        <div ref={textRef} className="text-center">
          <div className="font-playfair font-bold text-3xl text-white">VERSA <span className="text-[#C49A2E] italic">Global</span></div>
          <p className="font-inter text-xs text-white/40 mt-2 tracking-widest">International Trade Partners</p>
        </div>
      </div>
      <div ref={botRef} className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0A1628]" />
    </div>
  )
}
