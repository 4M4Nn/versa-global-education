"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Globe, CheckCircle2 } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { STATS, SITE } from "@/lib/data"
import { HERO_FRAMES, HERO_FRAME_COUNT } from "@/lib/heroFrames"
import { useFramePreloader } from "@/hooks/useFramePreloader"
import { renderFrame } from "@/lib/frameCanvas"

gsap.registerPlugin(ScrollTrigger)

const CHECKLIST = ["60+ destination countries", "95% visa success rate", "1,000+ students placed", "Free profile evaluation"]
const SCROLL_PX_PER_FRAME = 14

export default function HeroSection() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const { images, progress, isLoaded } = useFramePreloader(HERO_FRAMES)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (!isLoaded) return
    const timeout = setTimeout(() => setShowLoader(false), 700)
    return () => clearTimeout(timeout)
  }, [isLoaded])

  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current
      const img = images[index]
      if (!canvas || !img) return
      renderFrame(canvas, img)
    },
    [images]
  )

  useGSAP(
    () => {
      if (!isLoaded) return
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        drawFrame(0)
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 24, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power2.out", delay: 0.1 }
        )

        const state = { frame: 0 }
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${HERO_FRAME_COUNT * SCROLL_PX_PER_FRAME}`,
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        tl.to(
          state,
          {
            frame: HERO_FRAME_COUNT - 1,
            duration: 1,
            ease: "none",
            onUpdate: () => drawFrame(Math.round(state.frame)),
          },
          0
        ).to(
          contentRef.current,
          { opacity: 0, y: -36, filter: "blur(12px)", duration: 0.22, ease: "none" },
          0.02
        )

        const onResize = () => drawFrame(Math.round(state.frame))
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
      })

      mm.add("(prefers-reduced-motion: reduce)", () => {
        drawFrame(0)
        gsap.set(contentRef.current, { opacity: 1, y: 0, filter: "blur(0px)" })
      })

      return () => mm.revert()
    },
    { scope: sectionRef, dependencies: [isLoaded, drawFrame] }
  )

  return (
    <section ref={sectionRef} className="relative bg-[#1B2A4A] text-white">
      <div className="relative h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B2A4A]/75 via-[#1B2A4A]/45 to-[#1B2A4A]/85 pointer-events-none" />
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A84C] rounded-full blur-3xl" />
        </div>

        <div
          ref={contentRef}
          className="relative h-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-5 opacity-0"
        >
          <div>
            <span className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              <Globe size={13} />India&apos;s Most Trusted Study Abroad Agency
            </span>
            <h1 className="font-playfair text-[clamp(2rem,5.5vw,3.75rem)] font-bold leading-tight mb-4">
              Versa Global — The Most Trusted<br />
              <span className="text-[#C9A84C]">Study Abroad Agency</span> for Your Journey
            </h1>
            <h2 className="text-blue-200 text-base md:text-lg font-semibold leading-relaxed mb-5">
              Expert guidance to 60+ countries — UK, Canada, Australia, Germany, Georgia, Vietnam, South Korea and more, with a 95% visa success rate.
            </h2>
            <p className="text-blue-200 text-base md:text-lg leading-relaxed mb-5">
              From university selection to visa approval, Versa Global guides students to the world&apos;s top universities with personalized, transparent counselling — wherever you&apos;re applying from.
            </p>
            <ul className="space-y-2 mb-7">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-blue-100">
                  <CheckCircle2 size={16} className="text-[#C9A84C] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#contact" className="flex items-center justify-center gap-2 bg-[#C9A84C] text-[#1B2A4A] font-bold px-7 py-4 rounded-lg hover:bg-[#E8C96A] transition-colors min-h-[52px]">
                Free Profile Evaluation <ArrowRight size={18} />
              </Link>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] font-semibold px-7 py-4 rounded-lg hover:bg-[#C9A84C]/10 transition-colors min-h-[52px]">
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2 lg:mt-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 text-center hover:border-[#C9A84C]/30 transition-all backdrop-blur-sm">
                <p className="font-playfair text-3xl md:text-4xl font-bold text-[#C9A84C] mb-1">{stat.value.toLocaleString("en-IN")}{stat.suffix}</p>
                <p className="text-blue-200 text-xs tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {showLoader && (
          <div
            className={`absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#1B2A4A] transition-opacity duration-700 ${
              isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <p className="text-white/80 font-playfair text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
              Loading Versa Global
            </p>
            <p className="text-[#C9A84C] text-4xl md:text-5xl font-bold tabular-nums">{progress}%</p>
            <div className="mt-6 h-[2px] w-40 bg-white/10 overflow-hidden rounded-full">
              <div className="h-full bg-[#C9A84C]" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
