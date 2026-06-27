import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FAQS, SITE } from "@/lib/data"
import FAQSection from "@/components/sections/FAQSection"

export const metadata: Metadata = {
  title: "FAQ — Study Abroad Questions Answered",
  description: "Answers to the most common questions from Kerala students about studying abroad — visa, costs, timelines, and more.",
}

export default function FAQPage() {
  return (
    <div>
      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">Your Questions, Answered</h1>
          <p className="text-blue-200 text-lg">Everything Kerala students ask us about studying abroad.</p>
        </div>
      </section>

      <FAQSection />

      <section className="py-16 px-4 bg-[#EEF2FF]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-3">Still Have Questions?</h2>
          <p className="text-[#6B7280] mb-7">Our counsellors are happy to answer every question — free of charge.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="bg-[#1B2A4A] text-white font-bold px-7 py-3 rounded-lg hover:bg-[#0F1A2E] transition-colors flex items-center gap-2">
              Book Free Call <ArrowRight size={16} />
            </Link>
            <a href={`tel:${SITE.phone}`} className="border border-[#1B2A4A] text-[#1B2A4A] font-semibold px-7 py-3 rounded-lg hover:bg-[#1B2A4A] hover:text-white transition-colors">
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
