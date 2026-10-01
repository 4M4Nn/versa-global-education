import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Info, MessageCircle, Stethoscope } from "lucide-react"
import { SITE } from "@/lib/data"
import { MBBS_HUB, MBBS_COUNTRIES } from "@/lib/mbbs"
import { getAllBlogPosts } from "@/lib/content"
import FaqList, { faqPageJsonLd } from "@/components/ui/FaqList"

const BASE = "https://www.versaglobal.in"

export async function generateStaticParams() {
  return MBBS_COUNTRIES.map((c) => ({ country: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: slug } = await params
  const country = MBBS_COUNTRIES.find((c) => c.slug === slug)
  if (!country) return { title: "Page Not Found" }
  return {
    title: country.metaTitle,
    description: country.metaDescription,
    alternates: { canonical: `/mbbs-abroad/${country.slug}` },
    keywords: country.keywords,
    openGraph: {
      type: "website",
      title: country.metaTitle,
      description: country.metaDescription,
      url: `/mbbs-abroad/${country.slug}`,
      images: [{ url: country.heroImage, alt: `MBBS in ${country.name}` }],
    },
  }
}

export default async function MbbsCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: slug } = await params
  const country = MBBS_COUNTRIES.find((c) => c.slug === slug)
  if (!country) notFound()

  const other = MBBS_COUNTRIES.filter((c) => c.slug !== country.slug)
  const allPosts = getAllBlogPosts()
  const guides = country.blogSlugs
    .map((blogSlug) => allPosts.find((post) => post.slug === blogSlug))
    .filter((post) => post !== undefined)

  const waMessage = `Hi Versa Global, I'm NEET-qualified and interested in MBBS in ${country.name}. Can you share the details?`
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}?text=${encodeURIComponent(waMessage)}`
  const pageUrl = `${BASE}/mbbs-abroad/${country.slug}`

  const jsonLd = [
    faqPageJsonLd(country.faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "MBBS Abroad", item: `${BASE}/mbbs-abroad` },
        { "@type": "ListItem", position: 3, name: `MBBS in ${country.name}`, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `MBBS in ${country.name} — Admission Support for Indian Students`,
      serviceType: "MBBS abroad admission counselling",
      description: country.summary,
      url: pageUrl,
      areaServed: "IN",
      provider: { "@type": "EducationalOrganization", name: SITE.name, url: BASE, telephone: SITE.phone },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".speakable-summary", ".speakable-answer"] },
    },
  ]

  const facts = [
    { label: "Total cost", value: country.cost },
    { label: "Duration", value: country.duration },
    { label: "Course structure", value: country.structure },
    { label: "Intakes", value: country.intake },
    { label: "Medium of instruction", value: country.medium },
    { label: "Entrance exam", value: country.entranceExam },
    { label: "Visa", value: country.visa },
    { label: "Admission timeline", value: country.timeline },
  ]

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <Image src={country.heroImage} alt={`MBBS in ${country.name}`} fill priority className="object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(15,26,46,0.94) 0%, rgba(27,42,74,0.9) 60%, rgba(27,42,74,0.95) 100%)" }}
        />
        <div className="relative max-w-5xl mx-auto text-white">
          <nav aria-label="Breadcrumb" className="text-xs text-blue-200 mb-6 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/mbbs-abroad" className="hover:text-white transition-colors">MBBS Abroad</Link>
            <span>/</span>
            <span className="text-white">{country.name}</span>
          </nav>

          <span className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B2A4A] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <Stethoscope size={14} /> {country.flag} MBBS in {country.name}
          </span>

          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-5 max-w-3xl">{country.headline}</h1>
          <p className="speakable-summary text-blue-100 text-base md:text-lg max-w-3xl mb-9 leading-relaxed">{country.summary}</p>

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

      {/* Key facts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8">MBBS in {country.name} at a Glance</h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-[#F8F9FA] rounded-xl p-5">
                <dt className="text-xs text-[#6B7280] mb-1.5">{fact.label}</dt>
                <dd className="text-sm font-semibold text-[#1B2A4A] leading-snug">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Highlights + cost */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-6">Why Study MBBS in {country.name}?</h2>
            <ul className="space-y-3">
              {country.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#374151]">
                  <CheckCircle2 size={17} className="text-[#C9A84C] mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-6">Fee Breakdown</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <caption className="sr-only">Cost breakdown for MBBS in {country.name}</caption>
                <tbody>
                  {country.costBreakdown.map((row) => (
                    <tr key={row.item} className="border-b border-gray-100 last:border-0 align-top">
                      <th scope="row" className="px-4 py-4 text-left font-semibold text-[#1B2A4A] w-2/5">{row.item}</th>
                      <td className="px-4 py-4 text-[#374151]">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#6B7280] mt-3">
              Exact figures depend on the university. We give you a written, university-wise cost sheet before you commit.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-6">Eligibility for MBBS in {country.name}</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {MBBS_HUB.eligibility.map((item) => (
              <li key={item} className="speakable-answer flex items-start gap-3 text-sm text-[#374151] bg-[#EEF2FF] rounded-xl p-4">
                <CheckCircle2 size={17} className="text-[#C9A84C] mt-0.5 shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Considerations */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-3">What to Know Before You Decide</h2>
          <p className="text-[#6B7280] mb-8 max-w-2xl">The points our counsellors raise with every family considering {country.name}.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {country.considerations.map((note) => (
              <div key={note} className="flex items-start gap-3 border border-[#C9A84C]/30 bg-white rounded-xl p-5">
                <Info size={18} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <p className="text-sm text-[#374151] leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After graduation */}
      <section className="py-16 px-4 bg-[#1B2A4A] text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">After You Graduate</p>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-9">Practising in India After MBBS in {country.name}</h2>
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

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8 text-center">
            MBBS in {country.name} — Frequently Asked Questions
          </h2>
          <FaqList faqs={country.faqs} />
        </div>
      </section>

      {/* Guides + compare */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          {guides.length > 0 && (
            <>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8">Read Next</h2>
              <div className="grid sm:grid-cols-2 gap-5 mb-12">
                {guides.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-4 bg-[#F8F9FA] rounded-xl p-4 hover:bg-[#EEF2FF] transition-colors">
                    <div className="relative w-24 h-20 shrink-0 rounded-lg overflow-hidden">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                    <h3 className="font-playfair font-bold text-[#1B2A4A] text-sm self-center group-hover:text-[#C9A84C] transition-colors">{post.title}</h3>
                  </Link>
                ))}
              </div>
            </>
          )}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/mbbs-abroad" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] hover:text-[#C9A84C] transition-colors">
              ← MBBS Abroad overview
            </Link>
            {other.map((c) => (
              <Link key={c.slug} href={`/mbbs-abroad/${c.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] hover:text-[#C9A84C] transition-colors">
                Compare with MBBS in {c.name} <ArrowRight size={15} />
              </Link>
            ))}
            <Link href={`/destinations/${country.destinationId}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] hover:text-[#C9A84C] transition-colors">
              Other courses in {country.name} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1B2A4A] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-3">Get a Written Cost Sheet for MBBS in {country.name}</h2>
          <p className="text-blue-200 mb-7">Share your NEET scorecard and 10+2 marks — the profile check is free.</p>
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
