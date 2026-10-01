import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FAQS } from "@/lib/data"
import { FAQ_CATEGORIES } from "@/lib/faqs-october-2026"
import FaqList, { faqPageJsonLd } from "@/components/ui/FaqList"

/** Two questions from each topic, so the homepage covers every category without listing all of them. */
const HOME_FAQS = FAQ_CATEGORIES.flatMap((category) => FAQS.filter((faq) => faq.category === category.name).slice(0, 2))

export default function FAQSection() {
  return (
    <section className="py-14 md:py-20 px-5 bg-[#F8F9FA]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(HOME_FAQS)) }} />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A]">Frequently Asked Questions</h2>
        </div>

        <FaqList faqs={HOME_FAQS} />

        <div className="text-center mt-10">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] hover:text-[#C9A84C] transition-colors"
          >
            See all {FAQS.length} questions and answers <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
