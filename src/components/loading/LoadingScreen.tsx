"use client"
import { useEffect, useState } from "react"

const COUNTRIES = ["🇬🇧","🇨🇦","🇦🇺","🇩🇪","🇺🇸","🇮🇪","🇳🇿","🇦🇪"]

export default function LoadingScreen({ onDone }: { onDone?: () => void }) {
  const [phase, setPhase] = useState(0)
  const [visible, setVisible] = useState(true)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("global-intro")) {
      onDone?.(); setDone(true); return
    }
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 1000)
    const t3 = setTimeout(() => setPhase(3), 1800)
    const t4 = setTimeout(() => setPhase(4), 2600)
    const t5 = setTimeout(() => {
      setVisible(false)
      setTimeout(() => { sessionStorage.setItem("global-intro","1"); onDone?.(); setDone(true) }, 700)
    }, 3400)
    return () => [t1,t2,t3,t4,t5].forEach(clearTimeout)
  }, [onDone])

  if (done) return null

  return (
    <div style={{
      position:"fixed",inset:0,background:"#F8F6F0",zIndex:9999,
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
      transition:"opacity 0.7s ease",opacity:visible?1:0
    }}>
      {/* SVG world arc */}
      <svg width="280" height="80" viewBox="0 0 280 80" style={{ opacity: phase>=1?1:0, transition:"opacity 0.5s" }}>
        <path d="M 20 60 Q 140 10 260 60" stroke="#C9A84C" strokeWidth="2" fill="none"
          strokeDasharray="320" strokeDashoffset={phase>=2?0:320}
          style={{ transition:"stroke-dashoffset 1s ease" }} />
        {/* Airplane emoji text */}
        {phase>=2 && <text x="130" y="20" textAnchor="middle" fontSize="18">✈️</text>}
      </svg>
      {/* Country flags orbiting */}
      <div style={{ display:"flex", gap:8, marginTop:8, flexWrap:"wrap", justifyContent:"center", maxWidth:220 }}>
        {COUNTRIES.map((flag, i) => (
          <span key={i} style={{
            fontSize:22,
            opacity: phase>=1 ? 1 : 0,
            transform: phase>=1 ? "scale(1)" : "scale(0)",
            transition:`opacity 0.3s ${i*0.1}s, transform 0.3s ${i*0.1}s`
          }}>{flag}</span>
        ))}
      </div>
      {/* Brand */}
      <div style={{
        marginTop:20,textAlign:"center",
        opacity:phase>=3?1:0, transform:phase>=3?"translateY(0)":"translateY(16px)",
        transition:"opacity 0.5s, transform 0.5s"
      }}>
        <p style={{ fontSize:42,fontWeight:900,color:"#1B2A4A",letterSpacing:"0.15em",fontFamily:"serif" }}>VERSA <span style={{ color:"#C9A84C" }}>GLOBAL</span></p>
        <p style={{ fontSize:11,color:"#6B7280",letterSpacing:"0.4em",textTransform:"uppercase",marginTop:4 }}>Study Abroad Consultancy</p>
      </div>
      <div style={{
        height:1,background:"linear-gradient(90deg,transparent,#C9A84C,transparent)",
        width:phase>=4?180:0,marginTop:12,transition:"width 0.8s ease"
      }} />
    </div>
  )
}
