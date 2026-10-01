import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FAQS, SITE } from "@/lib/data"
import { FAQ_CATEGORIES } from "@/lib/faqs-october-2026"
import FaqList, { faqPageJsonLd } from "@/components/ui/FaqList"

export const metadata: Metadata = {
  title: "FAQ — Study Abroad, MBBS Abroad & Dubai IT Program Questions Answered",
  description:
    "Straight answers from Versa Global on studying abroad, MBBS in Vietnam and Georgia, NEET and FMGE, the 100% job-assured Dubai IT program, visas, English tests, education loans and scholarships.",
  alternates: { canonical: "/faq" },
}

const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".speakable-answer"],
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.versaglobal.in/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.versaglobal.in/faq" },
  ],
}

const anchor = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

const TOPIC_LINKS: Record<string, { href: string; label: string }> = {
  "MBBS Abroad": { href: "/mbbs-abroad", label: "Full MBBS Abroad guide" },
  "Dubai IT Program": {
    href: "/career-academy/it-infrastructure-engineer-program-dubai",
    label: "Full Dubai IT program details",
  },
  "Costs, Loans & Scholarships": { href: "/schemes", label: "Education loan support" },
}

export default function FAQPage() {
  const groups = FAQ_CATEGORIES.map((category) => ({
    ...category,
    id: anchor(category.name),
    faqs: FAQS.filter((faq) => faq.category === category.name),
  }))

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">Your Questions, Answered</h1>
          <p className="text-blue-200 text-lg">
            {FAQS.length} answers on studying abroad, MBBS abroad, our Dubai IT program, visas, tests and funding.
          </p>
        </div>
      </section>

      <nav aria-label="FAQ topics" className="bg-[#F8F9FA] border-b border-gray-100 px-4 py-5">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2">
          {groups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="bg-white border border-gray-200 text-[#1B2A4A] text-xs font-semibold px-4 py-2 rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
            >
              {group.name} ({group.faqs.length})
            </a>
          ))}
        </div>
      </nav>

      <section className="py-14 md:py-20 px-5 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto space-y-14">
          {groups.map((group) => {
            const topicLink = TOPIC_LINKS[group.name]
            return (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-2">{group.name}</h2>
                <p className="text-sm text-[#6B7280] mb-6">{group.blurb}</p>
                <FaqList faqs={group.faqs} />
                {topicLink && (
                  <Link
                    href={topicLink.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] hover:text-[#C9A84C] transition-colors mt-5"
                  >
                    {topicLink.label} <ArrowRight size={15} />
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </section>

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
