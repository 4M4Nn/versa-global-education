import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { DESTINATIONS, WA_URL } from "@/lib/data"

type Props = { params: Promise<{ country: string }> }

export async function generateStaticParams() {
  return DESTINATIONS.map(d => ({ country: d.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params
  const dest = DESTINATIONS.find(d => d.id === country)
  if (!dest) return {}
  return {
    title: `Study in ${dest.name} from Kerala | Versa Global`,
    description: `${dest.desc.slice(0, 150)}...`,
  }
}

export default async function DestinationPage({ params }: Props) {
  const { country } = await params
  const dest = DESTINATIONS.find(d => d.id === country)
  if (!dest) notFound()

  return (
    <main className="pt-24 pb-20 bg-[#F8F6F0]">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/destinations" className="text-[#C9A84C] text-xs tracking-widest uppercase mb-6 inline-block hover:underline">← All Destinations</Link>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-6xl">{dest.flag}</span>
          <div>
            <h1 className="font-cormorant text-5xl font-bold text-[#1B2A4A]">Study in {dest.name}</h1>
            <p className="text-[#C9A84C] tracking-widest text-sm">{dest.tagline}</p>
          </div>
        </div>
        <p className="text-[#6B7280] text-lg leading-relaxed mb-10">{dest.desc}</p>
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {[["Scholarships", dest.scholarships],["Intake", dest.intake],["Visa Type", dest.visa]].map(([k,v]) => (
            <div key={k} className="glass-card rounded-xl p-5">
              <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">{k}</p>
              <p className="text-[#1B2A4A] text-sm font-medium">{v}</p>
            </div>
          ))}
        </div>
        <div className="glass-card rounded-2xl p-7 mb-8">
          <h2 className="font-cormorant text-2xl font-bold text-[#1B2A4A] mb-4">Popular Programs</h2>
          <div className="flex flex-wrap gap-2">
            {dest.programs.map(p => (
              <span key={p} className="px-3 py-2 rounded-lg text-sm" style={{ background:"#1B2A4A10", color:"#1B2A4A" }}>{p}</span>
            ))}
          </div>
        </div>
        <div className="text-center">
          <a href={`${WA_URL}?text=${encodeURIComponent(`I want to study in ${dest.name}`)}`} target="_blank" rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#C9A84C] text-white font-bold text-sm tracking-widest hover:bg-[#E8C96A] transition-colors">
            GET FREE {dest.name.toUpperCase()} COUNSELLING
          </a>
        </div>
      </div>
    </main>
  )
}
