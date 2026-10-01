import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, GraduationCap, Plane, Award, Stethoscope } from "lucide-react"
import { DESTINATIONS, SITE } from "@/lib/data"
import { DESTINATION_FAQS, DESTINATION_BLOG_CATEGORIES } from "@/lib/faqs-october-2026"
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
  const description = `Study in ${dest.name} from India: ${dest.programs.slice(0, 3).join(", ")} and more. Intakes: ${dest.intake}. Visa: ${dest.visa}. Scholarships: ${dest.scholarships}. Free profile evaluation from Versa Global.`
  return {
    title: `Study in ${dest.name} for Indian Students 2026 — Visa, Intakes & Scholarships`,
    description,
    alternates: { canonical: `/destinations/${dest.id}` },
    openGraph: {
      type: "website",
      title: `Study in ${dest.name} for Indian Students`,
      description,
      url: `/destinations/${dest.id}`,
      images: [{ url: dest.image, alt: `Study in ${dest.name}` }],
    },
  }
}

export default async function DestinationPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params
  const dest = DESTINATIONS.find((d) => d.id === country)
  if (!dest) notFound()

  const faqs = DESTINATION_FAQS[dest.id] ?? []
  const mbbs = MBBS_COUNTRIES.find((c) => c.destinationId === dest.id)
  const categories = DESTINATION_BLOG_CATEGORIES[dest.id] ?? []
  const guides = getAllBlogPosts()
    .filter((post) => categories.includes(post.category))
    .slice(0, 4)

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Destinations", item: `${BASE}/destinations` },
        { "@type": "ListItem", position: 3, name: dest.name, item: `${BASE}/destinations/${dest.id}` },
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
      <section className="relative h-72 md:h-96">
        <Image src={dest.image} alt={`Study in ${dest.name}`} fill priority className="object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(0deg, rgba(27,42,74,1) 0%, rgba(27,42,74,0.5) 55%, rgba(27,42,74,0) 100%)" }}
        />
        <div className="absolute bottom-8 left-4 right-4 max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-blue-100 mb-3 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link>
            <span>/</span>
            <span className="text-white">{dest.name}</span>
          </nav>
          <span className="text-5xl">{dest.flag}</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-2">Study in {dest.name}</h1>
          <p className="text-[#C9A84C] font-semibold mt-1">{dest.tagline}</p>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-4">Why Study in {dest.name}?</h2>
            <p className="speakable-summary text-[#6B7280] leading-relaxed mb-8">{clean(dest.description)}</p>

            <h3 className="font-semibold text-[#1B2A4A] mb-3">Popular Programs</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {dest.programs.map((p) => (
                <span key={p} className="bg-[#EEF2FF] text-[#1B2A4A] text-sm font-medium px-4 py-1.5 rounded-full">
                  <GraduationCap size={13} className="inline mr-1.5" />{p}
                </span>
              ))}
            </div>

            <h3 className="font-semibold text-[#1B2A4A] mb-3">Key Facts</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { Icon: Award, label: "Scholarships", value: dest.scholarships },
                { Icon: Plane, label: "Intake", value: dest.intake },
                { Icon: CheckCircle2, label: "Visa Type", value: dest.visa },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="bg-[#F8F9FA] rounded-xl p-4">
                  <Icon size={18} className="text-[#C9A84C] mb-2" />
                  <p className="text-xs text-[#6B7280] mb-1">{label}</p>
                  <p className="text-sm font-semibold text-[#1B2A4A]">{value}</p>
                </div>
              ))}
            </div>

            {mbbs && (
              <Link
                href={`/mbbs-abroad/${mbbs.slug}`}
                className="group mt-8 flex items-start gap-4 border border-[#C9A84C]/40 bg-[#C9A84C]/5 rounded-2xl p-6 hover:bg-[#C9A84C]/10 transition-colors"
              >
                <Stethoscope size={22} className="text-[#C9A84C] mt-1 shrink-0" />
                <div>
                  <p className="font-playfair text-lg font-bold text-[#1B2A4A]">
                    MBBS in {dest.name} — {mbbs.cost}
                  </p>
                  <p className="text-sm text-[#6B7280] mt-1">{mbbs.costNote}. Intakes: {mbbs.intake}.</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B2A4A] mt-3 group-hover:text-[#C9A84C] transition-colors">
                    Fees, eligibility and admission process <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            )}
          </div>

          <div className="bg-[#1B2A4A] text-white rounded-2xl p-7 self-start">
            <h3 className="font-playfair text-lg font-bold mb-4">Start Your {dest.name} Journey</h3>
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 px-4 bg-[#F8F9FA]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8 text-center">
              Studying in {dest.name} — Common Questions
            </h2>
            <FaqList faqs={faqs} />
          </div>
        </section>
      )}

      {/* Guides */}
      {guides.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8">{dest.name} Guides</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {guides.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-4 bg-[#F8F9FA] rounded-xl p-4 hover:bg-[#EEF2FF] transition-colors">
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

      <div className="max-w-5xl mx-auto px-4 py-12">
        <Link href="/destinations" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] hover:text-[#C9A84C] transition-colors">
          ← All Destinations
        </Link>
      </div>
    </div>
  )
}
