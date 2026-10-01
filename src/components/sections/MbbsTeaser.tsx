import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Stethoscope } from "lucide-react"
import { MBBS_HUB, MBBS_COUNTRIES } from "@/lib/mbbs"

export default function MbbsTeaser() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#1B2A4A] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              <Stethoscope size={13} className="text-[#C9A84C]" /> MBBS Abroad
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
              Qualified NEET? Study MBBS Abroad From ₹31 Lakhs
            </h2>
            <p className="speakable-summary text-[#6B7280] leading-relaxed mb-6">{MBBS_HUB.summary}</p>
            <Link
              href="/mbbs-abroad"
              className="inline-flex items-center gap-2 bg-[#1B2A4A] text-white font-bold px-7 py-3.5 rounded-lg hover:bg-[#0F1A2E] transition-colors"
            >
              Explore MBBS Abroad <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {MBBS_COUNTRIES.map((country) => (
              <Link
                key={country.slug}
                href={`/mbbs-abroad/${country.slug}`}
                className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#C9A84C]/30 transition-all"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={country.heroImage}
                    alt={`MBBS in ${country.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-[#6B7280] mb-1">
                    {country.flag} MBBS in {country.name}
                  </p>
                  <p className="font-playfair text-2xl font-bold text-[#1B2A4A]">{country.cost}</p>
                  <p className="text-xs text-[#6B7280] mb-3">{country.costNote}</p>
                  <p className="text-xs text-[#374151]">Intakes: {country.intake}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#C9A84C] mt-3">
                    Fees, eligibility and FAQs <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
