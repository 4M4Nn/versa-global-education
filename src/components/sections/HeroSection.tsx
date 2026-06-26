"use client"
import Link from "next/link"
import { WA_URL, DESTINATIONS } from "@/lib/data"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F8F6F0] flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #1B2A4A 0%, transparent 60%), radial-gradient(circle at 80% 30%, #C9A84C 0%, transparent 60%)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background:"rgba(27,42,74,0.08)", border:"1px solid rgba(201,168,76,0.3)" }}>
            <span className="text-[#C9A84C] text-xs tracking-widest uppercase">Kerala&apos;s Trusted Study Abroad Partner</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold text-[#1B2A4A] leading-tight mb-6">
            Your Dream University<br/>is <span className="text-[#C9A84C]">Closer</span><br/>Than You Think.
          </h1>
          <p className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-lg">
            1,000+ Kerala students have studied in 60+ countries through Versa Global. Our counselors know every university, every scholarship, and every visa requirement — so you don&apos;t have to.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#C9A84C] text-white font-bold text-sm tracking-widest uppercase hover:bg-[#E8C96A] transition-colors">Free Consultation</a>
            <Link href="/destinations" className="px-8 py-4 border border-[#1B2A4A] text-[#1B2A4A] text-sm tracking-widest uppercase hover:bg-[#1B2A4A]/5 transition-colors">Explore Destinations</Link>
          </div>
          <div className="flex gap-6">
            {[["1,000+","Students Placed"],["60+","Countries"],["95%","Visa Success"],["8+","Destinations"]].map(([v,l]) => (
              <div key={l}><p className="font-cormorant text-2xl font-bold text-[#1B2A4A]">{v}</p><p className="text-[#6B7280] text-xs">{l}</p></div>
            ))}
          </div>
        </div>
        {/* Country grid */}
        <div className="grid grid-cols-4 gap-3">
          {DESTINATIONS.map(d => (
            <Link key={d.id} href={`/destinations/${d.id}`} className="glass-card rounded-xl p-3 text-center hover:scale-105 transition-transform">
              <p className="text-3xl mb-1">{d.flag}</p>
              <p className="text-[#1B2A4A] text-xs font-medium leading-tight">{d.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
