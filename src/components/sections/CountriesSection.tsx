"use client"
import { countries } from "@/lib/data"
export default function CountriesSection() {
  return (
    <section id="countries" className="py-32 bg-[#0A1628] overflow-hidden px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="label text-[#C49A2E] mb-4" style={{ letterSpacing: "3px" }}>/ Our Reach</p>
        <h2 className="font-playfair font-bold text-white" style={{ fontSize: "clamp(32px,5vw,64px)", lineHeight: 1.1 }}>60+ countries and counting.</h2>
        <p className="font-inter text-white/50 mt-4 max-w-xl mx-auto" style={{ fontSize: 16 }}>We&apos;ve facilitated trade across every continent. Your market is out there — we&apos;ll get you there.</p>
      </div>
      <div className="flex flex-col gap-4 overflow-hidden">
        {[countries.slice(0, 8), countries.slice(7)].map((row, ri) => (
          <div key={ri} className="overflow-hidden">
            <div className="flex gap-3 whitespace-nowrap" style={{ animation: `ticker ${ri === 0 ? "22s" : "18s"} linear infinite ${ri === 1 ? "reverse" : ""}` }}>
              {[...row, ...row, ...row].map((c, i) => (
                <span key={i} className="inline-block px-6 py-3 border border-[#C49A2E]/20 text-[#C49A2E]/70 text-sm font-inter rounded-full flex-shrink-0 hover:border-[#C49A2E] hover:text-[#C49A2E] transition-colors">{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
