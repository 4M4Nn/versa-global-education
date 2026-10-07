import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, CheckCircle2, GraduationCap, MapPin, Stethoscope } from "lucide-react"
import { DESTINATIONS, SITE } from "@/lib/data"
import { DESTINATION_FAQS, DESTINATION_BLOG_CATEGORIES } from "@/lib/faqs-october-2026"
import { DESTINATION_GUIDES, studyPlace } from "@/lib/destinations-extra"
import { STUDY_COURSES } from "@/lib/study-courses"
import { MBBS_COUNTRIES } from "@/lib/mbbs"
import { getAllBlogPosts } from "@/lib/content"
import FaqList, { faqPageJsonLd } from "@/components/ui/FaqList"

const BASE = "https://www.versaglobal.in"
const clean = (text: string) => text.replace(/&apos;/g, "'")

export async function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ country: d.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params
  const dest = DESTINATIONS.find((d) => d.id === country)
  if (!dest) return { title: "Destination Not Found" }
  const place = studyPlace(dest)
  const guide = DESTINATION_GUIDES[dest.id]
  const description = guide
    ? guide.overview.slice(0, 155).replace(/\s\S*$/, "") + "…"
    : `Study in ${place} from India: intakes ${dest.intake}, visa ${dest.visa}.`
  return {
    title: { absolute: `Study in ${place} for Indian Students 2026 — Costs, Visa & Universities` },
    description,
    alternates: { canonical: `/destinations/${dest.id}` },
    keywords: [`study in ${place}`, `study in ${place} for Indian students`, `${dest.name} student visa`, `cost of studying in ${dest.name}`, `universities in ${dest.name}`],
    openGraph: {
      type: "website",
      title: `Study in ${place} for Indian Students`,
      description,
      url: `/destinations/${dest.id}`,
      images: [{ url: dest.image, alt: `Study in ${place}` }],
    },
  }
}

export default async function DestinationPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params
  const dest = DESTINATIONS.find((d) => d.id === country)
  if (!dest) notFound()
  const place = studyPlace(dest)

  const guide = DESTINATION_GUIDES[dest.id]
  const faqs = DESTINATION_FAQS[dest.id] ?? []
  const mbbs = MBBS_COUNTRIES.find((c) => c.destinationId === dest.id)
  const courses = STUDY_COURSES.filter((c) => c.bestCountries.some((bc) => bc.id === dest.id))
  const categories = DESTINATION_BLOG_CATEGORIES[dest.id] ?? []
  const guides = getAllBlogPosts()
    .filter((post) => categories.includes(post.category))
    .slice(0, 4)
  const related = guide
    ? DESTINATIONS.filter((d) => d.id !== dest.id && DESTINATION_GUIDES[d.id]?.region === guide.region).slice(0, 4)
    : []

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Destinations", item: `${BASE}/destinations` },
        { "@type": "ListItem", position: 3, name: `Study in ${place}`, item: `${BASE}/destinations/${dest.id}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".speakable-summary", ".speakable-answer"] },
    },
    ...(faqs.length > 0 ? [faqPageJsonLd(faqs)] : []),
  ]

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[22rem] md:min-h-[26rem] flex items-end">
        <Image src={dest.image} alt={`Study in ${place}`} fill priority className="object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(0deg, rgba(27,42,74,1) 0%, rgba(27,42,74,0.55) 55%, rgba(27,42,74,0.1) 100%)" }}
        />
        <div className="relative w-full max-w-5xl mx-auto px-4 pb-8 pt-24">
          <nav aria-label="Breadcrumb" className="text-xs text-blue-100 mb-3 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link>
            <span>/</span>
            <span className="text-white">{dest.name}</span>
          </nav>
          <span className="text-5xl">{dest.flag}</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-2">Study in {place} for Indian Students</h1>
          <p className="text-[#C9A84C] font-semibold mt-2">{dest.tagline}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-4">Why Study in {place}?</h2>
            <p className="speakable-summary text-[#374151] leading-relaxed mb-6">{guide?.overview ?? clean(dest.description)}</p>
            {guide && (
              <ul className="space-y-2.5 mb-8">
                {guide.whyStudy.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#374151]">
                    <CheckCircle2 size={17} className="text-[#C9A84C] mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            )}

            <h3 className="font-semibold text-[#1B2A4A] mb-3">Popular Programs in {dest.name}</h3>
            <div className="flex flex-wrap gap-2">
              {dest.programs.map((p) => (
                <span key={p} className="bg-[#EEF2FF] text-[#1B2A4A] text-sm font-medium px-4 py-1.5 rounded-full">
                  <GraduationCap size={13} className="inline mr-1.5" />{p}
                </span>
              ))}
            </div>

            {mbbs && (
              <Link
                href={`/mbbs-abroad/${mbbs.slug}`}
                className="group mt-8 flex items-start gap-4 border border-[#C9A84C]/40 bg-[#C9A84C]/5 rounded-2xl p-6 hover:bg-[#C9A84C]/10 transition-colors"
              >
                <Stethoscope size={22} className="text-[#C9A84C] mt-1 shrink-0" />
                <div>
                  <p className="font-playfair text-lg font-bold text-[#1B2A4A]">MBBS in {dest.name} — {mbbs.cost}</p>
                  <p className="text-sm text-[#6B7280] mt-1">{mbbs.costNote}. Intakes: {mbbs.intake}.</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B2A4A] mt-3 group-hover:text-[#C9A84C] transition-colors">
                    Fees, eligibility and admission process <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            )}
            {dest.id === "uae" && (
              <Link
                href="/career-academy/it-infrastructure-engineer-program-dubai"
                className="group mt-8 flex items-start gap-4 border border-[#C9A84C]/40 bg-[#C9A84C]/5 rounded-2xl p-6 hover:bg-[#C9A84C]/10 transition-colors"
              >
                <Building2 size={22} className="text-[#C9A84C] mt-1 shrink-0" />
                <div>
                  <p className="font-playfair text-lg font-bold text-[#1B2A4A]">Job-Assured IT Program in Dubai — AED 23,500</p>
                  <p className="text-sm text-[#6B7280] mt-1">Windows Server, CCNA, Azure and Office 365 with 100% job assurance in the GCC.</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B2A4A] mt-3 group-hover:text-[#C9A84C] transition-colors">
                    See the program <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            )}
          </div>

          <aside className="bg-[#1B2A4A] text-white rounded-2xl p-7 self-start">
            <h2 className="font-playfair text-lg font-bold mb-4">Start Your {dest.name} Journey</h2>
            <p className="text-blue-200 text-sm mb-6">Get a free consultation with our {dest.name} specialist counsellor.</p>
            <Link
              href="/#contact"
              className="block text-center bg-[#C9A84C] text-[#1B2A4A] font-bold px-6 py-3 rounded-lg hover:bg-[#E8C96A] transition-colors mb-3"
            >
              Book Free Evaluation
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="block text-center border border-[#C9A84C]/40 text-[#C9A84C] font-semibold px-6 py-3 rounded-lg hover:bg-[#C9A84C]/10 transition-colors text-sm"
            >
              {SITE.phone}
            </a>
          </aside>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8">
            {dest.name} at a Glance: Costs, Visa & Work Rights
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <caption className="sr-only">Key facts about studying in {dest.name}</caption>
              <tbody>
                {[
                  ...(guide?.quickFacts ?? []),
                  { label: "Student visa", value: dest.visa },
                  { label: "Scholarships", value: dest.scholarships },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-gray-100 last:border-0 align-top">
                    <th scope="row" className="px-5 py-4 text-left font-semibold text-[#1B2A4A] w-1/3 sm:w-1/4">{row.label}</th>
                    <td className="speakable-answer px-5 py-4 text-[#374151]">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6B7280] mt-3">
            Fees and immigration rules change. We confirm current figures for your exact course before you apply.
          </p>
        </div>
      </section>

      {/* Universities, cities, requirements */}
      {guide && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-4">Well-Known Universities in {dest.name}</h2>
              <ul className="space-y-2">
                {guide.topUniversities.map((u) => (
                  <li key={u} className="flex items-start gap-2.5 text-sm text-[#374151]">
                    <GraduationCap size={15} className="text-[#C9A84C] mt-0.5 shrink-0" /> {u}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-4">Popular Student Cities</h2>
              <ul className="space-y-2">
                {guide.popularCities.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-[#374151]">
                    <MapPin size={15} className="text-[#C9A84C] mt-0.5 shrink-0" /> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-4">What You Need to Apply</h2>
              <ul className="space-y-2">
                {guide.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-[#374151]">
                    <CheckCircle2 size={15} className="text-[#C9A84C] mt-0.5 shrink-0" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Courses */}
      {courses.length > 0 && (
        <section className="py-16 px-4 bg-[#F8F9FA]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-6">Popular Courses to Study in {place}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((c) => (
                <Link
                  key={c.slug}
                  href={`/courses/${c.slug}`}
                  className="group bg-white rounded-xl border border-gray-100 p-5 hover:border-[#C9A84C]/40 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-[#1B2A4A] mb-1 group-hover:text-[#C9A84C] transition-colors">{c.name}</h3>
                  <p className="text-xs text-[#6B7280]">{c.bestCountries.find((bc) => bc.id === dest.id)?.why}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8 text-center">
              Studying in {dest.name} — Frequently Asked Questions
            </h2>
            <FaqList faqs={faqs} />
          </div>
        </section>
      )}

      {/* Guides */}
      {guides.length > 0 && (
        <section className="py-16 px-4 bg-[#F8F9FA]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8">{dest.name} Guides</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {guides.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-4 bg-white rounded-xl p-4 hover:bg-[#EEF2FF] transition-colors">
                  <div className="relative w-24 h-20 shrink-0 rounded-lg overflow-hidden">
                    <Image src={post.image} alt={clean(post.title)} fill className="object-cover" />
                  </div>
                  <h3 className="font-playfair font-bold text-[#1B2A4A] text-sm self-center group-hover:text-[#C9A84C] transition-colors">
                    {clean(post.title)}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related destinations */}
      {related.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-6">Compare With Similar Destinations</h2>
            <div className="flex flex-wrap gap-3">
              {related.map((d) => (
                <Link
                  key={d.id}
                  href={`/destinations/${d.id}`}
                  className="inline-flex items-center gap-2 border border-gray-200 text-[#1B2A4A] text-sm font-semibold px-4 py-2 rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                >
                  {d.flag} Study in {d.name}
                </Link>
              ))}
              <Link
                href="/destinations"
                className="inline-flex items-center gap-1.5 bg-[#1B2A4A] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#0F1A2E] transition-colors"
              >
                All destinations <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
