import Link from "next/link"
import { DESTINATIONS } from "@/lib/data"
export default function DestinationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">WHERE WE SEND YOU</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-[#1B2A4A]">60+ Destination Countries</h2>
          <p className="text-[#6B7280] max-w-xl mx-auto mt-3">Our counselors have first-hand knowledge of each destination. Not research — lived experience.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {DESTINATIONS.map(d => (
            <Link key={d.id} href={`/destinations/${d.id}`} className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform text-center group">
              <p className="text-5xl mb-3">{d.flag}</p>
              <h3 className="font-cormorant text-xl font-bold text-[#1B2A4A] group-hover:text-[#C9A84C] transition-colors">{d.name}</h3>
              <p className="text-[#6B7280] text-xs mt-1">{d.tagline}</p>
              <p className="text-[#C9A84C] text-xs mt-2 tracking-widest">EXPLORE →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
