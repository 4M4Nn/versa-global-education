import { GraduationCap } from "lucide-react"
import { SCHEMES } from "@/lib/data"

export default function SchemesSection() {
  return (
    <section className="py-20 px-4 bg-[#F8F9FA]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">Financial Aid</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A]">Scholarships &amp; Loan Schemes</h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto">Making study abroad accessible for every Kerala family through government and institutional funding options.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {SCHEMES.map((scheme) => (
            <div key={scheme.name} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:border-[#C9A84C]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-5">
                <GraduationCap size={22} className="text-[#1B2A4A]" />
              </div>
              <h3 className="font-playfair font-bold text-[#1B2A4A] text-lg mb-3">{scheme.name}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{scheme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
