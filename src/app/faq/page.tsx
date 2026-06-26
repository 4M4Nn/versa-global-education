import type { Metadata } from "next"
import FAQSection from "@/components/sections/FAQSection"
import { WA_URL } from "@/lib/data"

export const metadata: Metadata = {
  title: "Study Abroad FAQ | Versa Global",
  description: "Answers to the most common study abroad questions — IELTS scores, scholarships, visas, costs, and more from Versa Global counselors.",
}

export default function FAQPage() {
  return (
    <main className="pt-24">
      <div className="text-center px-6 mb-6">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">FREQUENTLY ASKED QUESTIONS</p>
        <h1 className="font-cormorant text-5xl font-bold text-[#1B2A4A]">Study Abroad FAQ</h1>
        <p className="text-[#6B7280] mt-3 max-w-lg mx-auto">Everything you need to know before booking your first consultation.</p>
      </div>
      <FAQSection />
      <div className="bg-[#1B2A4A] py-14 text-center px-6">
        <h2 className="font-cormorant text-3xl font-bold text-white mb-3">Still Have Questions?</h2>
        <p className="text-[#A8B89A] mb-6">Our counselors are available via WhatsApp 7 days a week.</p>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-[#C9A84C] text-white text-sm font-bold tracking-widest hover:bg-[#E8C96A] transition-colors">Ask on WhatsApp</a>
      </div>
    </main>
  )
}
