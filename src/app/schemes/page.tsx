import type { Metadata } from "next"
import SchemesSection from "@/components/sections/SchemesSection"
import { WA_URL } from "@/lib/data"

export const metadata: Metadata = {
  title: "Consultation Packages & Schemes | Versa Global",
  description: "Versa Global consultation packages — Free Profile Evaluation, Scholarship Hunt, and Visa Guarantee. Find the right package for your study abroad journey.",
}

export default function SchemesPage() {
  return (
    <main className="pt-24">
      <div className="text-center px-6 mb-6 bg-[#F8F6F0] pb-4">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">OUR PACKAGES</p>
        <h1 className="font-cormorant text-5xl font-bold text-[#1B2A4A]">Consultation Schemes</h1>
        <p className="text-[#6B7280] mt-3 max-w-lg mx-auto">Choose the level of support that fits your journey. The first step is always free.</p>
      </div>
      <SchemesSection />
      <div className="bg-[#1B2A4A] py-14 text-center px-6">
        <h2 className="font-cormorant text-3xl font-bold text-white mb-3">Not Sure Which Package You Need?</h2>
        <p className="text-[#A8B89A] mb-6">WhatsApp us and we&apos;ll recommend the right package based on your profile and goals.</p>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-[#C9A84C] text-white text-sm font-bold tracking-widest hover:bg-[#E8C96A] transition-colors">Chat on WhatsApp</a>
      </div>
    </main>
  )
}
