import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Info, MessageCircle, Stethoscope } from "lucide-react"
import { SITE } from "@/lib/data"
import { MBBS_HUB, MBBS_HUB_FAQS, MBBS_COUNTRIES } from "@/lib/mbbs"
import { getAllBlogPosts } from "@/lib/content"
import FaqList, { faqPageJsonLd } from "@/components/ui/FaqList"

const BASE = "https://www.versaglobal.in"

export const metadata: Metadata = {
  title: "MBBS Abroad for Indian Students 2026 — Vietnam From ₹31 Lakhs & Georgia",
  description:
    "Study MBBS abroad after NEET with Versa Global. MBBS in Vietnam from ₹31 lakhs for the full 6-year program including hostel; MBBS in Georgia for $40,000–50,000. Eligibility, costs, FMGE pathway and admission support.",
  alternates: { canonical: "/mbbs-abroad" },
  keywords: MBBS_HUB.keywords,
  openGraph: {
    type: "website",
    title: "MBBS Abroad for Indian Students — Vietnam From ₹31 Lakhs & Georgia",
    description:
      "English-medium MBBS in Vietnam and Georgia for NEET-qualified Indian students, with eligibility, costs and the FMGE pathway explained.",
    url: "/mbbs-abroad",
    images: [{ url: MBBS_HUB.heroImage, alt: "Medical students training in a hospital" }],
  },
}

export default function MbbsAbroadPage() {
  const waMessage = "Hi Versa Global, I'm NEET-qualified and interested in MBBS abroad. Can you share the details?"
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}?text=${encodeURIComponent(waMessage)}`
  const guides = getAllBlogPosts().filter((post) => post.category === "MBBS Abroad" || /mbbs/i.test(post.slug))

  const jsonLd = [
    faqPageJsonLd(MBBS_HUB_FAQS),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "MBBS Abroad", item: `${BASE}/mbbs-abroad` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "MBBS Abroad Admission Support for Indian Students",
      serviceType: "MBBS abroad admission counselling",
      description: MBBS_HUB.summary,
      url: `${BASE}/mbbs-abroad`,
      areaServed: "IN",
      provider: { "@type": "EducationalOrganization", name: SITE.name, url: BASE, telephone: SITE.phone },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "MBBS destinations",
        itemListElement: MBBS_COUNTRIES.map((country) => ({
          "@type": "Offer",
          name: `MBBS in ${country.name}`,
          description: country.summary,
          url: `${BASE}/mbbs-abroad/${country.slug}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to get MBBS admission abroad through Versa Global",
      step: MBBS_HUB.steps.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.title,
        text: step.description,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".speakable-summary", ".speakable-answer"] },
    },
  ]

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <Image src={MBBS_HUB.heroImage} alt="Medical students training in a hospital" fill priority className="object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(15,26,46,0.95) 0%, rgba(27,42,74,0.92) 60%, rgba(27,42,74,0.96) 100%)" }}
        />
        <div className="relative max-w-5xl mx-auto text-white">
          <nav aria-label="Breadcrumb" className="text-xs text-blue-200 mb-6 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">MBBS Abroad</span>
          </nav>

          <span className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B2A4A] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <Stethoscope size={14} /> {MBBS_HUB.eyebrow}
          </span>

          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-5 max-w-3xl">{MBBS_HUB.title}</h1>
          <p className="speakable-summary text-blue-100 text-base md:text-lg max-w-3xl mb-9 leading-relaxed">{MBBS_HUB.summary}</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-9">
            {MBBS_HUB.stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 border border-white/10 rounded-xl p-4">
                <p className="font-playfair text-xl md:text-2xl font-bold text-[#C9A84C]">{stat.value}</p>
                <p className="text-xs text-blue-200 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B2A4A] font-bold px-7 py-3.5 rounded-lg hover:bg-[#E8C96A] transition-colors"
            >
              <MessageCircle size={16} /> Ask on WhatsApp
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              Free NEET Profile Check <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-3">Choose Your MBBS Destination</h2>
          <p className="text-[#6B7280] mb-9 max-w-2xl">
            We work with two destinations so the comparison you get is a real one — matched to your NEET result,
            budget and timeline.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {MBBS_COUNTRIES.map((country) => (
              <div key={country.slug} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image src={country.heroImage} alt={`MBBS in ${country.name}`} fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(15,26,46,0.75) 0%, rgba(15,26,46,0) 60%)" }} />
                  <p className="absolute bottom-4 left-5 font-playfair text-2xl font-bold text-white">
                    {country.flag} MBBS in {country.name}
                  </p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="font-playfair text-2xl font-bold text-[#C9A84C]">{country.cost}</p>
                  <p className="text-xs text-[#6B7280] mb-5">{country.costNote}</p>
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm mb-6">
                    {[
                      { label: "Duration", value: country.duration },
                      { label: "Intakes", value: country.intake },
                      { label: "Medium", value: country.medium },
                      { label: "Visa", value: country.visa },
                    ].map((row) => (
                      <div key={row.label}>
                        <dt className="text-xs text-[#6B7280]">{row.label}</dt>
                        <dd className="font-semibold text-[#1B2A4A]">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <ul className="space-y-2 mb-6">
                    {country.highlights.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#374151]">
                        <CheckCircle2 size={16} className="text-[#C9A84C] mt-0.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/mbbs-abroad/${country.slug}`}
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-[#1B2A4A] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#0F1A2E] transition-colors text-sm"
                  >
                    MBBS in {country.name} — full details <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8">Why Indian Students Choose MBBS Abroad</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {MBBS_HUB.whyAbroad.map((item) => (
              <div key={item.title} className="bg-[#EEF2FF] rounded-xl p-6">
                <h3 className="font-semibold text-[#1B2A4A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + cost */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-6">Who Is Eligible?</h2>
            <ul className="space-y-3">
              {MBBS_HUB.eligibility.map((item) => (
                <li key={item} className="speakable-answer flex items-start gap-3 text-sm text-[#374151] bg-white rounded-xl border border-gray-100 p-4">
                  <CheckCircle2 size={17} className="text-[#C9A84C] mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-6">What Does It Cost?</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <caption className="sr-only">Cost of MBBS in Vietnam and Georgia compared with private MBBS in India</caption>
                <thead>
                  <tr className="bg-[#1B2A4A] text-white text-left">
                    <th scope="col" className="px-4 py-3 font-semibold">Option</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Total cost</th>
                  </tr>
                </thead>
                <tbody>
                  {MBBS_HUB.costComparison.map((row) => (
                    <tr key={row.option} className="border-t border-gray-100 align-top">
                      <th scope="row" className="px-4 py-4 text-left font-semibold text-[#1B2A4A]">{row.option}</th>
                      <td className="px-4 py-4">
                        <p className="font-bold text-[#1B2A4A]">{row.cost}</p>
                        <p className="text-xs text-[#6B7280] mt-1">{row.notes}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-3">How Admission Works</h2>
          <p className="text-[#6B7280] mb-9 max-w-2xl">Six steps from your NEET scorecard to your first day on campus.</p>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MBBS_HUB.steps.map((step, i) => (
              <li key={step.title} className="bg-[#F8F9FA] rounded-xl p-6">
                <span className="w-9 h-9 rounded-full bg-[#C9A84C] text-[#1B2A4A] font-bold flex items-center justify-center text-sm mb-4">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-[#1B2A4A] mb-2">{step.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* After graduation */}
      <section className="py-16 px-4 bg-[#1B2A4A] text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">The Route Back to India</p>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-9">From Foreign Graduate to Practising Doctor</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MBBS_HUB.afterGraduation.map((step, i) => (
              <li key={step.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-[#C9A84C] font-playfair text-2xl font-bold mb-2">0{i + 1}</p>
                <h3 className="font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-blue-200 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Honest notes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-3">What We Tell Every Family Before They Pay Anything</h2>
          <p className="text-[#6B7280] mb-8 max-w-2xl">MBBS abroad is a six-year commitment. These are the points worth knowing at the start.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {MBBS_HUB.honestNotes.map((note) => (
              <div key={note} className="flex items-start gap-3 border border-[#C9A84C]/30 bg-[#C9A84C]/5 rounded-xl p-5">
                <Info size={18} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <p className="text-sm text-[#374151] leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8 text-center">MBBS Abroad — Frequently Asked Questions</h2>
          <FaqList faqs={MBBS_HUB_FAQS} />
        </div>
      </section>

      {/* Guides */}
      {guides.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8">MBBS Abroad Guides</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-md transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-playfair font-bold text-[#1B2A4A] text-sm group-hover:text-[#C9A84C] transition-colors">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1B2A4A] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <Stethoscope size={32} className="mx-auto mb-4 text-[#C9A84C]" />
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-3">NEET-Qualified? See Your MBBS Options in One Call</h2>
          <p className="text-blue-200 mb-7">
            Send us your NEET scorecard and 10+2 marks. We will come back with a written cost comparison for Vietnam and Georgia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B2A4A] font-bold px-7 py-3.5 rounded-lg hover:bg-[#E8C96A] transition-colors"
            >
              <MessageCircle size={16} /> Ask on WhatsApp
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
