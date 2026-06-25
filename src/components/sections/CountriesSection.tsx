"use client"
import { countries } from "@/lib/data"

// CSS-only flag/icon illustrations for featured countries
function UKIllustration() {
  return (
    <div style={{ width: 60, height: 40, borderRadius: 4, overflow: "hidden", position: "relative", flexShrink: 0, border: "1px solid rgba(255,255,255,0.1)" }}>
      {/* Blue background */}
      <div style={{ position: "absolute", inset: 0, background: "#012169" }} />
      {/* White diagonal crosses */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom right, transparent calc(50% - 3px), white calc(50% - 3px), white calc(50% + 3px), transparent calc(50% + 3px))" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom left, transparent calc(50% - 3px), white calc(50% - 3px), white calc(50% + 3px), transparent calc(50% + 3px))" }} />
      {/* Red diagonal crosses */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom right, transparent calc(50% - 1.5px), #C8102E calc(50% - 1.5px), #C8102E calc(50% + 1.5px), transparent calc(50% + 1.5px))" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom left, transparent calc(50% - 1.5px), #C8102E calc(50% - 1.5px), #C8102E calc(50% + 1.5px), transparent calc(50% + 1.5px))" }} />
      {/* White cross */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", transform: "translateX(-50%)", width: 10, background: "white" }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: "50%", transform: "translateY(-50%)", height: 10, background: "white" }} />
      {/* Red cross */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", transform: "translateX(-50%)", width: 6, background: "#C8102E" }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: "50%", transform: "translateY(-50%)", height: 6, background: "#C8102E" }} />
    </div>
  )
}

function USAIllustration() {
  const stripes = Array.from({ length: 7 }, (_, i) => i)
  return (
    <div style={{ width: 60, height: 40, borderRadius: 4, overflow: "hidden", position: "relative", flexShrink: 0, border: "1px solid rgba(255,255,255,0.1)" }}>
      {stripes.map((i) => (
        <div key={i} style={{ position: "absolute", left: 0, right: 0, top: `${(i / 7) * 100}%`, height: `${100 / 7}%`, background: i % 2 === 0 ? "#B22234" : "#FFFFFF" }} />
      ))}
      {/* Blue canton */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "40%", height: "54%", background: "#3C3B6E" }} />
      {/* Stars (simplified dots) */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2].map((col) => (
          <div key={`${row}-${col}`} style={{ position: "absolute", top: `${6 + row * 8}%`, left: `${5 + col * 12}%`, width: 2, height: 2, borderRadius: "50%", background: "white" }} />
        ))
      )}
    </div>
  )
}

function CanadaIllustration() {
  return (
    <div style={{ width: 60, height: 40, borderRadius: 4, overflow: "hidden", position: "relative", flexShrink: 0, border: "1px solid rgba(255,255,255,0.1)", background: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "25%", background: "#FF0000" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "25%", background: "#FF0000" }} />
      <span style={{ fontSize: 20, filter: "drop-shadow(0 0 4px rgba(255,0,0,0.7))", position: "relative", zIndex: 1 }}>🍁</span>
    </div>
  )
}

function AustraliaIllustration() {
  const stars = [
    { top: "20%", left: "55%", size: 8 },
    { top: "55%", left: "65%", size: 6 },
    { top: "70%", left: "50%", size: 6 },
    { top: "55%", left: "38%", size: 6 },
    { top: "30%", left: "70%", size: 5 },
  ]
  return (
    <div style={{ width: 60, height: 40, borderRadius: 4, overflow: "hidden", position: "relative", flexShrink: 0, border: "1px solid rgba(255,255,255,0.1)", background: "#00008B" }}>
      {/* Union Jack mini top-left */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "50%", height: "50%", background: "#012169" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom right, transparent calc(50% - 1.5px), white calc(50% - 1.5px), white calc(50% + 1.5px), transparent calc(50% + 1.5px))" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom left, transparent calc(50% - 1.5px), white calc(50% - 1.5px), white calc(50% + 1.5px), transparent calc(50% + 1.5px))" }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", transform: "translateX(-50%)", width: 4, background: "white" }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: "50%", transform: "translateY(-50%)", height: 4, background: "white" }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", transform: "translateX(-50%)", width: 2, background: "#C8102E" }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: "50%", transform: "translateY(-50%)", height: 2, background: "#C8102E" }} />
      </div>
      {/* Southern Cross stars */}
      {stars.map((s, i) => (
        <div key={i} style={{ position: "absolute", top: s.top, left: s.left, width: s.size, height: s.size, background: "white", clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} />
      ))}
    </div>
  )
}

function GermanyIllustration() {
  return (
    <div style={{ width: 60, height: 40, borderRadius: 4, overflow: "hidden", position: "relative", flexShrink: 0, border: "1px solid rgba(255,255,255,0.1)" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "33.33%", background: "#000000" }} />
      <div style={{ position: "absolute", top: "33.33%", left: 0, right: 0, height: "33.33%", background: "#DD0000" }} />
      <div style={{ position: "absolute", top: "66.66%", left: 0, right: 0, height: "33.34%", background: "#FFCE00" }} />
    </div>
  )
}

function FranceIllustration() {
  return (
    <div style={{ width: 60, height: 40, borderRadius: 4, overflow: "hidden", position: "relative", flexShrink: 0, border: "1px solid rgba(255,255,255,0.1)", display: "flex" }}>
      <div style={{ flex: 1, background: "#002395" }} />
      <div style={{ flex: 1, background: "#FFFFFF" }} />
      <div style={{ flex: 1, background: "#ED2939" }} />
    </div>
  )
}

function UAEIllustration() {
  return (
    <div style={{ width: 60, height: 40, borderRadius: 4, overflow: "hidden", position: "relative", flexShrink: 0, border: "1px solid rgba(255,255,255,0.1)", background: "#fff", display: "flex", flexDirection: "column" }}>
      {/* UAE flag stripes */}
      <div style={{ flex: 1, background: "#00732F" }} />
      <div style={{ flex: 1, background: "#FFFFFF" }} />
      <div style={{ flex: 1, background: "#000000" }} />
      {/* Red vertical stripe on left */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "25%", background: "#FF0000" }} />
      {/* Palm tree emoji overlay */}
      <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, filter: "drop-shadow(0 0 4px rgba(255,180,0,0.9))", paddingLeft: 14 }}>🌴</span>
    </div>
  )
}

function SingaporeIllustration() {
  return (
    <div style={{ width: 60, height: 40, borderRadius: 4, overflow: "hidden", position: "relative", flexShrink: 0, border: "1px solid rgba(255,255,255,0.1)" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50%", background: "#EF3340" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "#FFFFFF" }} />
      <span style={{ position: "absolute", top: "10%", left: "5%", fontSize: 10, color: "white" }}>🌙</span>
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} style={{ position: "absolute", top: `${12 + (i < 3 ? 0 : 12)}%`, left: `${22 + (i % 3) * 8 + (i >= 3 ? 4 : 0)}%`, width: 3, height: 3, background: "white", clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} />
      ))}
    </div>
  )
}

function DefaultIllustration({ name }: { name: string }) {
  return (
    <div style={{ width: 60, height: 40, borderRadius: 4, overflow: "hidden", position: "relative", flexShrink: 0, border: "1px solid rgba(196,154,46,0.3)", background: "rgba(196,154,46,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontSize: 10, color: "rgba(196,154,46,0.7)", fontWeight: 700, textAlign: "center", padding: "0 4px", lineHeight: 1.2 }}>{name.slice(0, 3).toUpperCase()}</span>
    </div>
  )
}

function CountryIllustration({ name }: { name: string }) {
  const n = name.toLowerCase()
  if (n === "uk")        return <UKIllustration />
  if (n === "usa")       return <USAIllustration />
  if (n === "canada")    return <CanadaIllustration />
  if (n === "australia") return <AustraliaIllustration />
  if (n === "germany")   return <GermanyIllustration />
  if (n === "france")    return <FranceIllustration />
  if (n === "uae")       return <UAEIllustration />
  if (n === "singapore") return <SingaporeIllustration />
  return <DefaultIllustration name={name} />
}

// Featured cards to showcase with illustrations
const featuredCountries = ["UAE", "USA", "UK", "Germany", "Australia", "Canada", "France", "Singapore"]

export default function CountriesSection() {
  return (
    <section id="countries" className="py-32 bg-[#0A1628] overflow-hidden px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="label text-[#C49A2E] mb-4" style={{ letterSpacing: "3px" }}>/ Our Reach</p>
        <h2 className="font-playfair font-bold text-white" style={{ fontSize: "clamp(32px,5vw,64px)", lineHeight: 1.1 }}>
          60+ countries and counting.
        </h2>
        <p className="font-inter text-white/50 mt-4 max-w-xl mx-auto" style={{ fontSize: 16 }}>
          We&apos;ve facilitated trade across every continent. Your market is out there — we&apos;ll get you there.
        </p>
      </div>

      {/* Featured country cards with CSS illustrations */}
      <div className="max-w-5xl mx-auto mb-16 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {featuredCountries.map((country) => (
          <div
            key={country}
            className="group relative flex flex-col gap-3 p-4 rounded-lg border border-[#C49A2E]/15 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#C49A2E]/40 transition-all duration-300"
          >
            {/* Illustration in top-right corner */}
            <div className="flex items-start justify-between">
              <span className="font-inter font-semibold text-white/80 text-sm group-hover:text-white transition-colors">
                {country}
              </span>
              <CountryIllustration name={country} />
            </div>
            <div className="w-6 h-px bg-[#C49A2E]/30 group-hover:w-10 group-hover:bg-[#C49A2E]/60 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Scrolling ticker for all countries */}
      <div className="flex flex-col gap-4 overflow-hidden">
        {[countries.slice(0, 8), countries.slice(7)].map((row, ri) => (
          <div key={ri} className="overflow-hidden">
            <div
              className="flex gap-3 whitespace-nowrap"
              style={{ animation: `ticker ${ri === 0 ? "22s" : "18s"} linear infinite ${ri === 1 ? "reverse" : ""}` }}
            >
              {[...row, ...row, ...row].map((c, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#C49A2E]/20 text-[#C49A2E]/70 text-sm font-inter rounded-full flex-shrink-0 hover:border-[#C49A2E] hover:text-[#C49A2E] transition-colors"
                >
                  <CountryIllustration name={c} />
                  <span>{c}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
