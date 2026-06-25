"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

// Arc data: [x1,y1, cx,cy, x2,y2, label]
const arcs = [
  { x1: 210, y1: 195, cx: 180, cy: 100, x2: 100, y2: 140, label: "UK", delay: 0 },
  { x1: 210, y1: 195, cx: 130, cy: 220, x2: 40,  y2: 155, label: "USA", delay: 0.4 },
  { x1: 210, y1: 195, cx: 230, cy: 110, x2: 295, y2: 105, label: "Canada", delay: 0.8 },
  { x1: 210, y1: 195, cx: 275, cy: 260, x2: 320, y2: 230, label: "Australia", delay: 1.2 },
]

const pins = [
  { cx: 210, cy: 195, label: "India",     color: "#C49A2E", r: 7 },
  { cx: 100, cy: 140, label: "UK",        color: "#10B981", r: 5 },
  { cx: 40,  cy: 155, label: "USA",       color: "#10B981", r: 5 },
  { cx: 295, cy: 105, label: "Canada",    color: "#10B981", r: 5 },
  { cx: 320, cy: 230, label: "Australia", color: "#10B981", r: 5 },
]

function GlobeVisual() {
  const [mounted, setMounted] = useState(false)
  const [planePos, setPlanePos] = useState(0)

  useEffect(() => {
    setMounted(true)
    let frame: number
    let start: number | null = null
    const duration = 4000
    const animate = (ts: number) => {
      if (!start) start = ts
      const t = ((ts - start) % duration) / duration
      setPlanePos(t)
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  // Evaluate point on quadratic bezier at t
  const bezier = (x1: number, y1: number, cx: number, cy: number, x2: number, y2: number, t: number) => {
    const mt = 1 - t
    return {
      x: mt * mt * x1 + 2 * mt * t * cx + t * t * x2,
      y: mt * mt * y1 + 2 * mt * t * cy + t * t * y2,
    }
  }

  // Plane follows arc index 0 (India -> UK)
  const arc = arcs[0]
  const plane = bezier(arc.x1, arc.y1, arc.cx, arc.cy, arc.x2, arc.y2, planePos)

  // Latitude lines (horizontal ellipses)
  const latLines = [-60, -40, -20, 0, 20, 40, 60]
  // Longitude lines (vertical ellipses)
  const lonLines = [-60, -30, 0, 30, 60]

  const cx = 190
  const cy = 190
  const rx = 155
  const ry = 155

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 420,
        aspectRatio: "1 / 1",
        margin: "0 auto",
      }}
    >
      {/* Outer glow ring */}
      <div
        style={{
          position: "absolute", inset: 0,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(10,22,40,0.95) 55%, rgba(10,22,40,0.4) 100%)",
          boxShadow: "0 0 60px rgba(16,185,129,0.15), 0 0 120px rgba(16,185,129,0.08)",
          border: "1.5px solid rgba(16,185,129,0.15)",
          animation: "floatSlow 6s ease-in-out infinite",
        }}
      />

      <svg
        viewBox="0 0 380 380"
        style={{ position: "relative", zIndex: 2, width: "100%", height: "100%" }}
      >
        {/* Globe circle clip */}
        <defs>
          <clipPath id="globeClip">
            <circle cx={cx} cy={cy} r={rx} />
          </clipPath>
          <radialGradient id="globeBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0D2040" />
            <stop offset="100%" stopColor="#0A1628" />
          </radialGradient>
        </defs>

        {/* Globe background */}
        <circle cx={cx} cy={cy} r={rx} fill="url(#globeBg)" />

        {/* Grid lines */}
        <g clipPath="url(#globeClip)" opacity={0.2}>
          {/* Latitude lines */}
          {latLines.map((lat) => {
            const angle = (lat * Math.PI) / 180
            const ryScaled = Math.abs(Math.cos(angle)) * ry
            const yOff = Math.sin(angle) * ry
            return (
              <ellipse
                key={`lat-${lat}`}
                cx={cx} cy={cy + yOff}
                rx={rx} ry={ryScaled * 0.38}
                fill="none" stroke="#10B981" strokeWidth="0.8"
              />
            )
          })}
          {/* Longitude lines */}
          {lonLines.map((lon) => {
            const angle = (lon * Math.PI) / 180
            const rxScaled = Math.abs(Math.cos(angle)) * rx * 0.4
            const xOff = Math.sin(angle) * rx
            return (
              <ellipse
                key={`lon-${lon}`}
                cx={cx + xOff} cy={cy}
                rx={rxScaled} ry={ry}
                fill="none" stroke="#10B981" strokeWidth="0.8"
              />
            )
          })}
        </g>

        {/* Globe border */}
        <circle cx={cx} cy={cy} r={rx} fill="none" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5" />

        {/* Arc connections */}
        {arcs.map((a, i) => (
          <path
            key={i}
            d={`M ${a.x1} ${a.y1} Q ${a.cx} ${a.cy} ${a.x2} ${a.y2}`}
            fill="none"
            stroke="#10B981"
            strokeWidth="1.2"
            strokeDasharray="300"
            style={{
              strokeDashoffset: mounted ? 0 : 300,
              opacity: 0.6,
              transition: `stroke-dashoffset 1.5s ease ${a.delay}s, opacity 0.5s ${a.delay}s`,
            }}
          />
        ))}

        {/* Location pins */}
        {pins.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.cx} cy={p.cy} r={p.r}
              fill={p.color}
              style={{
                filter: `drop-shadow(0 0 ${p.r + 4}px ${p.color})`,
                animation: `mapPulse 2s ease-in-out ${i * 0.3}s infinite`,
              }}
            />
            {/* Ripple ring */}
            <circle
              cx={p.cx} cy={p.cy} r={p.r}
              fill="none" stroke={p.color} strokeWidth="1"
              style={{ animation: `ripple 2s ease-out ${i * 0.3}s infinite` }}
            />
          </g>
        ))}

        {/* Animated airplane along arc 0 */}
        {mounted && (
          <text
            x={plane.x - 8}
            y={plane.y + 6}
            fontSize={14}
            style={{ animation: "flyPlane 3s ease-in-out infinite", userSelect: "none" }}
          >
            ✈
          </text>
        )}
      </svg>
    </div>
  )
}

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
    <section
      ref={sec}
      id="hero"
      className="relative min-h-screen flex items-center bg-[#FAFBFF] overflow-hidden px-6 md:px-12 pt-24 pb-32"
    >
      {/* World grid BG */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(10,22,40,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none"
        style={{ background: "linear-gradient(to left, rgba(196,154,46,0.04) 0%, transparent 100%)" }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: text column */}
        <div className="flex-1 min-w-0">
          <div className="h-extra overflow-hidden mb-6">
            <div className="word inline-flex items-center gap-2 px-4 py-1.5 border border-[#C49A2E]/40 text-[#C49A2E] text-xs font-inter rounded-full">
              Kochi · India · 60+ Countries
            </div>
          </div>
          <h1 className="font-playfair leading-none mb-6" style={{ fontSize: "clamp(48px,8vw,100px)" }}>
            {[
              { w: "Trade",   cls: "font-bold text-[#0A1628]" },
              { w: "Without", cls: "font-light text-[#0A1628]" },
              { w: "Borders.", cls: "font-bold text-[#C49A2E] italic" },
            ].map((item, i) => (
              <div key={i} className="overflow-hidden">
                <span className={`word ${item.cls}`}>{item.w}</span>
              </div>
            ))}
          </h1>
          <div className="h-extra overflow-hidden mb-8">
            <p className="word font-inter text-[#4A5568]" style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 520 }}>
              Complete import-export consultancy. We connect Kerala businesses to the world — and the world to Kerala.
            </p>
          </div>
          <div className="h-extra overflow-hidden mb-8">
            <div className="word flex flex-wrap gap-4">
              {["60+ Countries", "₹50Cr+ Facilitated", "800+ Consignments", "IEC Certified"].map((b) => (
                <span key={b} className="flex items-center gap-1.5 text-sm text-[#4A5568] font-inter">
                  <span className="w-4 h-4 rounded-full border border-[#C49A2E]/40 text-[#C49A2E] flex items-center justify-center text-[10px]">✓</span>
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="h-extra overflow-hidden">
            <div className="word flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#0A1628] hover:bg-[#1E3A5F] text-white font-inter font-medium text-sm transition-all rounded-sm">
                Get Consultation
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border border-[#0A1628]/20 text-[#0A1628] hover:bg-[#0A1628]/5 font-inter text-sm transition-all rounded-sm">
                Our Services →
              </a>
            </div>
          </div>
        </div>

        {/* Right: globe visual */}
        <div className="flex-shrink-0 w-full lg:w-[420px] xl:w-[460px] hidden md:block">
          <GlobeVisual />
        </div>
      </div>
    </section>
  )
}
