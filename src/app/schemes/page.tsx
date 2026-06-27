import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, GraduationCap } from "lucide-react"
import { SCHEMES, SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: "Scholarships & Loan Schemes — Study Abroad Financial Aid",
  description: "Government scholarships and education loan schemes for Kerala students planning to study abroad.",
}

export default function SchemesPage() {
  return (
    <div>
      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Financial Aid</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">Scholarships &amp; Loan Schemes</h1>
          <p className="text-blue-200 text-lg">Making study abroad accessible for every Kerala family.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto space-y-6">
          {SCHEMES.map((scheme) => (
            <div key={scheme.name} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-[#C9A84C]/30 hover:shadow-md transition-all flex gap-6">
              <div className="w-14 h-14 rounded-xl bg-[#EEF2FF] flex items-center justify-center shrink-0">
                <GraduationCap size={26} className="text-[#1B2A4A]" />
              </div>
              <div>
                <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-2">{scheme.name}</h2>
                <p className="text-[#6B7280] leading-relaxed">{scheme.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-3">Need Help Choosing the Right Scheme?</h2>
          <p className="text-[#6B7280] mb-7">Our counsellors will match you with the best financial aid options for your profile and destination.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="bg-[#C9A84C] text-[#1B2A4A] font-bold px-7 py-3.5 rounded-lg hover:bg-[#E8C96A] transition-colors flex items-center gap-2">
              Free Evaluation <ArrowRight size={18} />
            </Link>
            <a href={`tel:${SITE.phone}`} className="border border-[#1B2A4A] text-[#1B2A4A] font-semibold px-7 py-3.5 rounded-lg hover:bg-[#1B2A4A] hover:text-white transition-colors">
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
