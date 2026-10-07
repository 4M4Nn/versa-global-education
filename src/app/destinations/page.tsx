import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { DESTINATIONS } from "@/lib/data"
import { DESTINATION_GUIDES, studyPlace } from "@/lib/destinations-extra"
import type { DestinationGuide } from "@/types"

const BASE = "https://www.versaglobal.in"
const clean = (text: string) => text.replace(/&apos;/g, "'")

export const metadata: Metadata = {
  title: "Study Abroad Destinations for Indian Students — 20 Countries Compared",
  description:
    "Compare 20 study abroad destinations for Indian students — UK, USA, Canada, Australia, Germany, Ireland, France, Netherlands, Singapore, Dubai, Italy, Poland, Sweden, Japan, Malaysia, Spain and more: costs, intakes, visas and work rights.",
  alternates: { canonical: "/destinations" },
}

const REGIONS: { name: DestinationGuide["region"]; blurb: string }[] = [
  { name: "Most Popular", blurb: "The destinations Indian students choose most often." },
  { name: "Europe", blurb: "Low-cost and English-taught options across the EU and Schengen area." },
  { name: "Asia-Pacific", blurb: "World-class universities closer to home, from Singapore and Japan to Dubai and New Zealand." },
  { name: "MBBS Destinations", blurb: "Affordable, English-medium MBBS for NEET-qualified students." },
]

export default function DestinationsPage() {
  const groups = REGIONS.map((region) => ({
    ...region,
    destinations: DESTINATIONS.filter((d) => DESTINATION_GUIDES[d.id]?.region === region.name),
  }))

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Study abroad destinations for Indian students",
      itemListElement: DESTINATIONS.map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `Study in ${studyPlace(d)}`,
        url: `${BASE}/destinations/${d.id}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Destinations", item: `${BASE}/destinations` },
      ],
    },
  ]

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Destinations</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">Study Abroad Destinations for Indian Students</h1>
          <p className="speakable-summary text-blue-200 text-lg">
            Compare {DESTINATIONS.length} countries on cost, intakes, visas and work rights — from tuition-free Germany and
            PR-pathway Canada to affordable France, Italy and Poland, Asia&apos;s hubs in Singapore, Japan and Dubai, and
            low-cost MBBS in Georgia and Vietnam.
          </p>
          <nav aria-label="Destination regions" className="flex flex-wrap justify-center gap-2 mt-8">
            {groups.map((g) => (
              <a
                key={g.name}
                href={`#${g.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#C9A84C]/10 transition-colors"
              >
                {g.name} ({g.destinations.length})
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="bg-[#F8F9FA] py-16 px-4 space-y-16">
        {groups.map((group) => (
          <section key={group.name} id={group.name.toLowerCase().replace(/[^a-z]+/g, "-")} className="max-w-7xl mx-auto scroll-mt-28">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-2">{group.name}</h2>
            <p className="text-sm text-[#6B7280] mb-7">{group.blurb}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {group.destinations.map((dest) => (
                <Link
                  key={dest.id}
                  href={`/destinations/${dest.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#C9A84C]/30 transition-all"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image src={dest.image} alt={`Study in ${studyPlace(dest)}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute bottom-3 left-4 text-3xl">{dest.flag}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-playfair text-lg font-bold text-[#1B2A4A] mb-1">Study in {studyPlace(dest)}</h3>
                    <p className="text-[#C9A84C] text-xs font-semibold mb-2">{dest.tagline}</p>
                    <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2 mb-3">{clean(dest.description)}</p>
                    <p className="text-[11px] text-[#374151] mb-3">
                      <span className="font-semibold">Intakes:</span> {dest.intake}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B2A4A] group-hover:text-[#C9A84C] transition-colors">
                      Costs, visa & universities <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
