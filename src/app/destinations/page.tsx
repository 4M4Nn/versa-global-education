import type { Metadata } from "next"
import Link from "next/link"
import { DESTINATIONS } from "@/lib/data"

export const metadata: Metadata = {
  title: "Study Abroad Destinations — UK, Canada, Australia, Germany, USA",
  description: "Explore 60+ study abroad destinations from Kerala. Expert counselling for UK, Canada, Australia, Germany, USA, Ireland, New Zealand, and Dubai.",
}

export default function DestinationsPage() {
  return (
    <main className="pt-24 pb-20 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">ALL DESTINATIONS</p>
          <h1 className="font-cormorant text-5xl font-bold text-[#1B2A4A] mb-4">Study Abroad Destinations</h1>
          <p className="text-[#6B7280] max-w-xl mx-auto">From the UK&apos;s ancient universities to Germany&apos;s free education — we help Kerala students access the world&apos;s best universities.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map(d => (
            <Link key={d.id} href={`/destinations/${d.id}`} className="glass-card rounded-2xl p-7 hover:shadow-lg transition-all hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{d.flag}</span>
                <div>
                  <h2 className="font-cormorant text-2xl font-bold text-[#1B2A4A] group-hover:text-[#C9A84C] transition-colors">{d.name}</h2>
                  <p className="text-[#C9A84C] text-xs tracking-widest">{d.tagline}</p>
                </div>
              </div>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-4 line-clamp-2">{d.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {d.programs.slice(0,3).map(p => (
                  <span key={p} className="text-xs px-2 py-1 rounded" style={{ background:"#1B2A4A10", color:"#1B2A4A" }}>{p}</span>
                ))}
              </div>
              <p className="text-[#C9A84C] text-xs tracking-widest">EXPLORE {d.name.toUpperCase()} →</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
