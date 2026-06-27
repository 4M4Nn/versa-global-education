import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, GraduationCap, Plane, Award } from "lucide-react"
import { DESTINATIONS, SITE } from "@/lib/data"

export async function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ country: d.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params
  const dest = DESTINATIONS.find((d) => d.id === country)
  if (!dest) return { title: "Destination Not Found" }
  return {
    title: `Study in ${dest.name} — Versa Global Kerala`,
    description: `Complete guide to studying in ${dest.name} for Kerala students. Universities, visa, scholarships and costs.`,
  }
}

export default async function DestinationPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params
  const dest = DESTINATIONS.find((d) => d.id === country)
  if (!dest) notFound()

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96">
        <Image src={dest.image} alt={dest.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/50 to-transparent" />
        <div className="absolute bottom-8 left-4 right-4 max-w-4xl mx-auto">
          <span className="text-5xl">{dest.flag}</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-2">{dest.name}</h1>
          <p className="text-[#C9A84C] font-semibold mt-1">{dest.tagline}</p>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-4">Why Study in {dest.name}?</h2>
            <p className="text-[#6B7280] leading-relaxed mb-8">{dest.description.replace(/&apos;/g, "'")}</p>

            <h3 className="font-semibold text-[#1B2A4A] mb-3">Popular Programs</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {dest.programs.map((p) => (
                <span key={p} className="bg-[#EEF2FF] text-[#1B2A4A] text-sm font-medium px-4 py-1.5 rounded-full">
                  <GraduationCap size={13} className="inline mr-1.5" />{p}
                </span>
              ))}
            </div>

            <h3 className="font-semibold text-[#1B2A4A] mb-3">Key Facts</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { Icon: Award, label: "Scholarships", value: dest.scholarships },
                { Icon: Plane, label: "Intake", value: dest.intake },
                { Icon: CheckCircle2, label: "Visa Type", value: dest.visa },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="bg-[#F8F9FA] rounded-xl p-4">
                  <Icon size={18} className="text-[#C9A84C] mb-2" />
                  <p className="text-xs text-[#6B7280] mb-1">{label}</p>
                  <p className="text-sm font-semibold text-[#1B2A4A]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1B2A4A] text-white rounded-2xl p-7">
            <h3 className="font-playfair text-lg font-bold mb-4">Start Your {dest.name} Journey</h3>
            <p className="text-blue-200 text-sm mb-6">Get a free consultation with our {dest.name} specialist counsellor.</p>
            <Link
              href="/#contact"
              className="block text-center bg-[#C9A84C] text-[#1B2A4A] font-bold px-6 py-3 rounded-lg hover:bg-[#E8C96A] transition-colors mb-3"
            >
              Book Free Evaluation
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="block text-center border border-[#C9A84C]/40 text-[#C9A84C] font-semibold px-6 py-3 rounded-lg hover:bg-[#C9A84C]/10 transition-colors text-sm"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-12">
        <Link href="/destinations" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] hover:text-[#C9A84C] transition-colors">
          ← All Destinations
        </Link>
      </div>
    </div>
  )
}
