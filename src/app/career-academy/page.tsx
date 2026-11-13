import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, BriefcaseBusiness, CheckCircle2, ChevronDown, MapPin } from "lucide-react"
import { SITE, CAREER_PROGRAMS, FAQS } from "@/lib/data"
import { getAllBlogPosts } from "@/lib/content"

export const metadata: Metadata = {
  title: "Dubai IT Jobs & Job-Assured IT Courses — Career & Skills Academy",
  description:
    "Get an IT job in Dubai and the GCC: Versa Global's 100% job-assured IT Infrastructure Engineer Program (CCNA, Windows Server, Azure, Office 365) — online, hybrid or in Dubai, ₹20,000 off. Plus free guides on Dubai IT salaries, visas, CVs and interviews.",
  alternates: { canonical: "/career-academy" },
  keywords: [
    "career and skills academy",
    "assured job in GCC countries",
    "study in Dubai job assurance",
    "IT training Dubai visa support",
    "job assured courses in Dubai",
    "IT jobs in Dubai for freshers",
    "how to get a job in Dubai from India",
    "IT courses in Dubai with job placement",
    "Gulf IT jobs for Indians",
    "CCNA Azure Office 365 course Dubai",
  ],
}

const clean = (text: string) => text.replace(/&apos;/g, "'").replace(/&amp;/g, "&")

export default function CareerAcademyPage() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`
  const guides = getAllBlogPosts().filter((post) => post.category === "Career Academy")
  const faqs = FAQS.filter((faq) => faq.category === "Dubai IT Program")

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: clean(faq.question),
      acceptedAnswer: { "@type": "Answer", text: clean(faq.answer) },
    })),
  }

  const guidesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Dubai and GCC IT career guides",
    itemListElement: guides.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.versaglobal.in/blog/${post.slug}`,
      name: clean(post.title),
    })),
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesJsonLd) }} />
      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Career & Skills Academy</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">
            100% Job-Assured Career Programs in the GCC
          </h1>
          <p className="speakable-summary text-blue-200 text-lg">
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
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                    <BriefcaseBusiness size={12} /> 100% Job Assurance
                  </span>
                  {program.offer && (
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-black uppercase tracking-wide px-3 py-1 rounded-full">
                      {program.offer.discount}
                    </span>
                  )}
                </div>
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

        {guides.length > 0 && (
          <div className="max-w-6xl mx-auto mt-14">
            <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-2">Free Career Guides</p>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-2">
              Dubai &amp; GCC IT Career Guides
            </h2>
            <p className="text-[#6B7280] mb-8 max-w-3xl">
              Straight answers on IT jobs in Dubai and the Gulf — salaries, visas, CVs, interviews, certifications and
              which course leads to a job.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {guides.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex gap-3 bg-white rounded-xl border border-gray-100 p-4 hover:border-[#C9A84C]/60 hover:shadow-sm transition-all"
                >
                  <BookOpen size={18} className="text-[#C9A84C] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#1B2A4A] group-hover:text-[#C9A84C] transition-colors">
                    {clean(post.title)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {faqs.length > 0 && (
          <div className="max-w-4xl mx-auto mt-14">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-6 text-center">
              Dubai IT Jobs &amp; Program — Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group bg-white rounded-xl border border-gray-100 p-5">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-[#1B2A4A]">
                    {clean(faq.question)}
                    <ChevronDown size={18} className="shrink-0 text-[#C9A84C] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="speakable-answer text-[#4B5563] text-sm leading-relaxed mt-3">{clean(faq.answer)}</p>
                </details>
              ))}
            </div>
          </div>
        )}

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
