import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { DESTINATIONS } from "@/lib/data"

export const metadata: Metadata = {
  title: "Study Destinations — UK, Canada, Australia, Germany & More",
  description: "Explore 60+ study abroad destinations from Kerala. Compare universities, visa requirements, scholarships and costs.",
}

export default function DestinationsPage() {
  return (
    <div>
      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Destinations</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">60+ Countries. 8 Expert-Curated Picks.</h1>
          <p className="text-blue-200 text-lg">From zero-tuition Germany to PR-pathway Canada — we help you find the perfect fit.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#C9A84C]/30 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={dest.image} alt={dest.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-4 text-3xl">{dest.flag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-lg font-bold text-[#1B2A4A] mb-1">{dest.name}</h3>
                <p className="text-[#C9A84C] text-xs font-semibold mb-2">{dest.tagline}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {dest.programs.slice(0, 2).map((p) => (
                    <span key={p} className="bg-[#EEF2FF] text-[#1B2A4A] text-[10px] font-medium px-2 py-0.5 rounded-full">{p}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B2A4A] group-hover:text-[#C9A84C] transition-colors">
                  Explore <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
