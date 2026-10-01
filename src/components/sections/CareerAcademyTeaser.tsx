import Link from "next/link"
import { ArrowRight, BriefcaseBusiness } from "lucide-react"
import { CAREER_PROGRAMS } from "@/lib/data"

export default function CareerAcademyTeaser() {
  const program = CAREER_PROGRAMS[0]

  return (
    <section className="py-16 px-4 bg-[#F8F9FA]">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1B2A4A] to-[#0F1A2E] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <span className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              <BriefcaseBusiness size={13} /> Career & Skills Academy — Dubai
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Train in Dubai, Get Placed in the GCC — 100% Job Assurance
            </h2>
            <p className="text-blue-200 max-w-xl mb-6">
              Our {program.shortName} trains you in Windows Server, Azure, Office 365 and CCNA — online, hybrid,
              or in a live Dubai classroom — with visa support and dedicated placement assistance until you&apos;re
              hired. {program.studentsPlaced} students placed in GCC countries so far.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href={`/career-academy/${program.slug}`}
                className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B2A4A] font-bold px-7 py-3.5 rounded-lg hover:bg-[#E8C96A] transition-colors"
              >
                Explore the Dubai Program <ArrowRight size={16} />
              </Link>
              <Link
                href="/blog/it-jobs-in-dubai-for-freshers-from-india"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A84C] hover:text-[#E8C96A] transition-colors"
              >
                How freshers get IT jobs in Dubai <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-2">Program Fee</p>
            <p className="font-playfair text-3xl font-bold">AED {program.fee.amount.toLocaleString()}</p>
            <p className="text-blue-200 text-xs mt-1 mb-1">{program.durationMonths} • {program.durationHours}</p>
            <p className="text-blue-200 text-xs mb-4">All 3 certification exams included</p>
            <div className="flex flex-wrap justify-center gap-2">
              {program.modes.map((mode) => (
                <span key={mode} className="bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-semibold px-3 py-1 rounded-full">
                  {mode}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
