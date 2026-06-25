"use client"
import { useEffect, useState } from "react"

export default function LoadingScreen({ onDone }: { onDone?: () => void }) {
  const [visible, setVisible] = useState(true)
  const [phase, setPhase] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("global-intro-done")) {
      if (onDone) onDone(); setDone(true); return
    }
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 1000)
    const t3 = setTimeout(() => setPhase(3), 1800)
    const t4 = setTimeout(() => {
      setVisible(false)
      setTimeout(() => {
        sessionStorage.setItem("global-intro-done", "1")
        if (onDone) onDone()
        setDone(true)
      }, 500)
    }, 3500)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [onDone])

  if (done) return null

  const pins = [
    { top: "38%", left: "52%", label: "Delhi" },
    { top: "42%", left: "55%", label: "Kochi" },
    { top: "30%", left: "72%", label: "Beijing" },
    { top: "35%", left: "25%", label: "London" },
    { top: "38%", left: "18%", label: "New York" },
  ]

  const letters = "VERSA GLOBAL".split("")

  return (
    <div
      style={{
        position: "fixed", inset: 0, background: "#0A1628", zIndex: 9999,
        overflow: "hidden", transition: "opacity 0.5s", opacity: visible ? 1 : 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      }}
    >
      {/* World map SVG outline */}
      <div
        style={{
          position: "absolute", inset: 0, display: "flex",
          alignItems: "center", justifyContent: "center",
          opacity: phase >= 1 ? 1 : 0, transition: "opacity 0.6s",
        }}
      >
        <svg viewBox="0 0 800 400" style={{ width: "80%", maxWidth: 700, opacity: 0.3 }}>
          <path
            d="M80,120 Q120,100 160,110 Q200,90 240,100 Q280,80 320,90 Q360,70 400,80 Q440,70 480,85 Q520,75 560,90 Q600,80 640,95 Q680,85 720,100 L720,180 Q680,200 640,190 Q600,200 560,185 Q520,195 480,180 Q440,190 400,175 Q360,185 320,170 Q280,180 240,165 Q200,175 160,160 Q120,170 80,155 Z"
            fill="none" stroke="#10B981" strokeWidth="1.5"
            style={{ strokeDasharray: 2000, strokeDashoffset: phase >= 1 ? 0 : 2000, transition: "stroke-dashoffset 2s ease" }}
          />
          <path
            d="M180,180 Q200,170 220,175 Q240,165 260,172 L260,220 Q240,230 220,225 Q200,232 180,225 Z"
            fill="none" stroke="#10B981" strokeWidth="1"
            style={{ strokeDasharray: 500, strokeDashoffset: phase >= 1 ? 0 : 500, transition: "stroke-dashoffset 2s ease 0.3s" }}
          />
          <path
            d="M400,200 Q420,185 450,190 Q480,180 510,195 Q540,185 560,200 L560,250 Q540,260 510,255 Q480,265 450,255 Q420,262 400,255 Z"
            fill="none" stroke="#10B981" strokeWidth="1"
            style={{ strokeDasharray: 600, strokeDashoffset: phase >= 1 ? 0 : 600, transition: "stroke-dashoffset 2s ease 0.5s" }}
          />
        </svg>
        {/* Location pins */}
        {pins.map((pin, i) => (
          <div
            key={i}
            style={{
              position: "absolute", top: pin.top, left: pin.left,
              transform: "translate(-50%,-50%)",
              opacity: phase >= 2 ? 1 : 0, transition: `opacity 0.4s ${i * 0.15}s`,
            }}
          >
            <div
              style={{
                width: 10, height: 10, borderRadius: "50%",
                background: "#10B981", boxShadow: "0 0 15px #10B981",
                animation: "mapPulse 2s ease-in-out infinite",
              }}
            />
          </div>
        ))}
      </div>

      {/* Airplane */}
      <div
        style={{
          position: "absolute", top: "42%",
          left: phase >= 2 ? "60%" : "10%",
          transition: "left 2.5s cubic-bezier(0.25,0,0.75,1)",
          fontSize: 24, filter: "drop-shadow(0 0 8px #10B981)",
          animation: "flyPlane 3s ease-in-out infinite",
        }}
      >
        ✈
      </div>

      {/* Text */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        <div style={{ display: "flex", gap: 4, justifyContent: "center", marginBottom: 16 }}>
          {letters.map((l, i) => (
            <span
              key={i}
              style={{
                fontSize: "clamp(28px,5vw,52px)", fontWeight: 900,
                color: l === " " ? "transparent" : "#10B981",
                textShadow: "0 0 20px #10B981", letterSpacing: "0.08em",
                transition: "opacity 0.4s, transform 0.5s",
                opacity: phase >= 3 ? 1 : 0,
                transform: phase >= 3 ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 0.05}s`,
              }}
            >
              {l === " " ? " " : l}
            </span>
          ))}
        </div>
        <p
          style={{
            fontSize: 11, letterSpacing: "0.25em",
            color: "rgba(16,185,129,0.7)",
            opacity: phase >= 3 ? 1 : 0, transition: "opacity 0.5s 0.6s",
          }}
        >
          CONNECTING INDIA TO THE WORLD
        </p>
      </div>
    </div>
  )
}
