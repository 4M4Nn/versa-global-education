"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const GRID = 8
const TILE_COUNT = GRID * GRID
const LOGO_SRC = "/versa-global-logo.jpg"

export default function LogoMotionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const tilesRef = useRef<HTMLDivElement[]>([])
  const headlineRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tiles = tilesRef.current
        const scatterIn = tiles.map(() => {
          const angle = Math.random() * Math.PI * 2
          const dist = gsap.utils.random(160, 480)
          return {
            x: Math.cos(angle) * dist,
            y: Math.sin(angle) * dist,
            rotation: gsap.utils.random(-150, 150),
          }
        })
        const scatterOut = tiles.map(() => {
          const angle = Math.random() * Math.PI * 2
          const dist = gsap.utils.random(220, 620)
          return {
            x: Math.cos(angle) * dist,
            y: Math.sin(angle) * dist,
            rotation: gsap.utils.random(-220, 220),
          }
        })

        gsap.set(tiles, {
          x: (i) => scatterIn[i].x,
          y: (i) => scatterIn[i].y,
          rotation: (i) => scatterIn[i].rotation,
          scale: 0.4,
          opacity: 0,
        })
        gsap.set(headlineRef.current, { opacity: 0, y: 24 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=240%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })

        tl.to(
          tiles,
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: { each: 0.012, from: "random" },
          },
          0
        )
          .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, 0.85)
          .to(headlineRef.current, { opacity: 0, y: -16, duration: 0.3, ease: "power2.in" }, 1.65)
          .to(
            tiles,
            {
              x: (i) => scatterOut[i].x,
              y: (i) => scatterOut[i].y,
              rotation: (i) => scatterOut[i].rotation,
              scale: 0.4,
              opacity: 0,
              duration: 1,
              ease: "power2.in",
              stagger: { each: 0.01, from: "random" },
            },
            1.6
          )
      })

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(tilesRef.current, { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 })
        gsap.set(headlineRef.current, { opacity: 1, y: 0 })
      })

      return () => mm.revert()
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      <div className="relative h-screen flex flex-col items-center justify-center px-5 py-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] max-w-[90vw] max-h-[90vw] bg-[#C9A84C]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] max-w-[95vw] max-h-[95vw] rounded-full border border-[#1B2A4A]/5 pointer-events-none" />

        <p className="relative text-[#C9A84C] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-6">
          The Versa Global Promise
        </p>

        <div className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] mb-8 shrink-0">
          {Array.from({ length: TILE_COUNT }).map((_, i) => {
            const col = i % GRID
            const row = Math.floor(i / GRID)
            return (
              <div
                key={i}
                ref={(el) => {
                  if (el) tilesRef.current[i] = el
                }}
                className="absolute"
                style={{
                  width: `${100 / GRID}%`,
                  height: `${100 / GRID}%`,
                  left: `${(col / GRID) * 100}%`,
                  top: `${(row / GRID) * 100}%`,
                  backgroundImage: `url(${LOGO_SRC})`,
                  backgroundSize: `${GRID * 100}% ${GRID * 100}%`,
                  backgroundPosition: `${(col / (GRID - 1)) * 100}% ${(row / (GRID - 1)) * 100}%`,
                }}
              />
            )
          })}
        </div>

        <div ref={headlineRef} className="relative text-center max-w-2xl">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#1B2A4A] mb-3 leading-tight">
            Every Great Journey Begins With One Bold Step Abroad
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
            1,000+ students placed across 60+ countries — guided from the first consultation to the visa stamp, by counsellors who&apos;ve walked the path themselves.
          </p>
        </div>
      </div>
    </section>
  )
}
