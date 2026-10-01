import { ChevronDown } from "lucide-react"

const clean = (text: string) => text.replace(/&apos;/g, "'")

/** Accordion built on <details>, so every answer stays in the HTML for search and answer engines. */
export default function FaqList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details key={faq.question} className="group bg-white border border-gray-100 rounded-xl shadow-sm p-5">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-[#1B2A4A] text-sm [&::-webkit-details-marker]:hidden">
            {clean(faq.question)}
            <ChevronDown size={18} className="text-[#C9A84C] shrink-0 transition-transform group-open:rotate-180" />
          </summary>
          <p className="speakable-answer text-sm text-[#6B7280] leading-relaxed mt-4 pt-4 border-t border-gray-100">
            {clean(faq.answer)}
          </p>
        </details>
      ))}
    </div>
  )
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: clean(faq.question),
      acceptedAnswer: { "@type": "Answer", text: clean(faq.answer) },
    })),
  }
}
