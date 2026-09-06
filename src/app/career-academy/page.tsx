import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BriefcaseBusiness, CheckCircle2, MapPin } from "lucide-react"
import { SITE, CAREER_PROGRAMS } from "@/lib/data"

export const metadata: Metadata = {
  title: "Career & Skills Academy — 100% Job-Assured Programs in the GCC",
  description:
    "Versa Global's Career & Skills Academy delivers 100% job-assured technical training for the GCC job market — online, hybrid or classroom in Dubai, with visa support and dedicated placement assistance.",
  alternates: { canonical: "/career-academy" },
  keywords: [
    "career and skills academy",
    "assured job in GCC countries",
    "study in Dubai job assurance",
    "IT training Dubai visa support",
    "job assured courses in Dubai",
  ],
}

export default function CareerAcademyPage() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <div>
      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Career & Skills Academy</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">
            100% Job-Assured Career Programs in the GCC
          </h1>
          <p className="text-blue-200 text-lg">
            Beyond study abroad — Versa Global&apos;s Career & Skills Academy trains you for real, in-demand roles
            and places you directly into GCC countries, with visa support for students who choose to train in Dubai.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto space-y-8">
          {CAREER_PROGRAMS.map((program) => (
            <div
              key={program.slug}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden md:flex"
            >
              <div className="relative h-56 md:h-auto md:w-80 shrink-0">
                <Image src={program.image} alt={program.title} fill className="object-cover" />
              </div>
              <div className="p-6 md:p-8 flex-1">
                <span className="inline-flex items-center gap-1.5 bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
                  <BriefcaseBusiness size={12} /> 100% Job Assurance
                </span>
                <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-2">{program.title}</h2>
                <p className="text-[#6B7280] text-sm mb-4 max-w-2xl">{program.focus}</p>

                <div className="flex flex-wrap gap-4 mb-5 text-sm text-[#1B2A4A]">
                  <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C9A84C]" />{program.durationMonths}</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C9A84C]" />AED {program.fee.amount.toLocaleString()}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={15} className="text-[#C9A84C]" />{program.modes.join(" / ")}</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C9A84C]" />{program.studentsPlaced} placed in GCC</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/career-academy/${program.slug}`}
                    className="inline-flex items-center gap-2 bg-[#1B2A4A] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0F1A2E] transition-colors text-sm"
                  >
                    View Full Program <ArrowRight size={15} />
                  </Link>
                  <a
                    href={`${waUrl}?text=${encodeURIComponent(`Hi Versa Global, I'm interested in the ${program.shortName}. Can you share more details?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#1B2A4A]/20 text-[#1B2A4A] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#EEF2FF] transition-colors text-sm"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-12 bg-[#1B2A4A] rounded-2xl p-8 md:p-10 text-center text-white">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-3">Not Sure This Is the Right Path for You?</h2>
          <p className="text-blue-200 mb-6 max-w-xl mx-auto">
            Talk to our Career Academy counsellors about your background, budget, and goals — we&apos;ll tell you
            honestly whether a job-assured GCC program or a study abroad degree fits you better.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B2A4A] font-bold px-7 py-3.5 rounded-lg hover:bg-[#E8C96A] transition-colors"
          >
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
