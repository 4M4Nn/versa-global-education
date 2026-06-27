import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PROCESS_STEPS, SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: "Our Process — How We Help You Study Abroad",
  description: "Step-by-step guide to Versa Global's study abroad process — from free counselling to visa approval and pre-departure support.",
}

export default function ProcessPage() {
  return (
    <div>
      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Our Process</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">From Dream to Destination</h1>
          <p className="text-blue-200 text-lg">A proven 5-step process that has guided 1,000+ Kerala students to universities worldwide.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.number} className="flex gap-6">
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-full bg-[#1B2A4A] text-[#C9A84C] font-playfair text-lg font-bold flex items-center justify-center">
                  {step.number}
                </div>
                {i < PROCESS_STEPS.length - 1 && <div className="w-0.5 h-12 bg-[#C9A84C]/20 mx-auto mt-2" />}
              </div>
              <div className="pb-8">
                <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-2">{step.title}</h2>
                <p className="text-[#6B7280] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#C9A84C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold text-[#1B2A4A] mb-4">Ready to Begin?</h2>
          <p className="text-[#1B2A4A]/80 mb-8">Start with a free profile evaluation — no obligation, just expert guidance.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="bg-[#1B2A4A] text-white font-bold px-8 py-3.5 rounded-lg hover:bg-[#0F1A2E] transition-colors flex items-center gap-2">
              Book Free Evaluation <ArrowRight size={18} />
            </Link>
            <a href={`tel:${SITE.phone}`} className="border-2 border-[#1B2A4A] text-[#1B2A4A] font-bold px-8 py-3.5 rounded-lg hover:bg-[#1B2A4A] hover:text-white transition-colors">
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
