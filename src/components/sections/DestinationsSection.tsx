import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { DESTINATIONS } from "@/lib/data"

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 bg-[#F8F9FA] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">Study Destinations</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A]">60+ Countries. 8 Top Picks.</h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto">From free German universities to Canadian PR pathways — we guide you to the right destination.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#C9A84C]/30 transition-all"
            >
              <div className="relative h-44 overflow-hidden">
                <Image src={dest.image} alt={dest.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-3xl">{dest.flag}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-lg font-bold text-[#1B2A4A] mb-1">{dest.name}</h3>
                <p className="text-[#C9A84C] text-xs font-semibold mb-2">{dest.tagline}</p>
                <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2">{dest.description.replace(/&apos;/g, "'")}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B2A4A] mt-3 group-hover:text-[#C9A84C] transition-colors">
                  Learn More <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
