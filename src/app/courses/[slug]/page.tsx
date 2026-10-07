import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, CheckCircle2, Clock, GraduationCap, MessageCircle, PenLine } from "lucide-react"
import { DESTINATIONS, SITE } from "@/lib/data"
import { STUDY_COURSES } from "@/lib/study-courses"
import FaqList, { faqPageJsonLd } from "@/components/ui/FaqList"

const BASE = "https://www.versaglobal.in"

export async function generateStaticParams() {
  return STUDY_COURSES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const course = STUDY_COURSES.find((c) => c.slug === slug)
  if (!course) return { title: "Course Not Found" }
  return {
    title: { absolute: course.metaTitle },
    description: course.metaDescription,
    alternates: { canonical: `/courses/${course.slug}` },
    keywords: course.keywords,
    openGraph: {
      type: "website",
      title: course.metaTitle,
      description: course.metaDescription,
      url: `/courses/${course.slug}`,
      images: [{ url: course.image, alt: course.name }],
    },
  }
}

export default async function StudyCoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = STUDY_COURSES.find((c) => c.slug === slug)
  if (!course) notFound()

  const countries = course.bestCountries
    .map((bc) => ({ ...bc, dest: DESTINATIONS.find((d) => d.id === bc.id) }))
    .filter((bc) => bc.dest !== undefined)
  const others = STUDY_COURSES.filter((c) => c.slug !== course.slug).slice(0, 6)

  const waMessage = `Hi Versa Global, I'm interested in ${course.name}. Can you guide me?`
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}?text=${encodeURIComponent(waMessage)}`
  const pageUrl = `${BASE}/courses/${course.slug}`

  const jsonLd = [
    faqPageJsonLd(course.faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Courses", item: `${BASE}/courses` },
        { "@type": "ListItem", position: 3, name: course.name, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${course.name} — Admission Counselling for Indian Students`,
      serviceType: "Study abroad admission counselling",
      description: course.summary,
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

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative py-20 md:py-24 px-4 overflow-hidden">
        <Image src={course.image} alt={course.name} fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,26,46,0.94) 0%, rgba(27,42,74,0.92) 100%)" }} />
        <div className="relative max-w-5xl mx-auto text-white">
          <nav aria-label="Breadcrumb" className="text-xs text-blue-200 mb-6 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-white">{course.shortName}</span>
          </nav>
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Study Abroad Course Guide</p>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-5 max-w-3xl">{course.name} for Indian Students</h1>
          <p className="speakable-summary text-blue-100 text-base md:text-lg max-w-3xl mb-8 leading-relaxed">{course.summary}</p>
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
              Free Profile Evaluation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8">{course.shortName} Abroad at a Glance</h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { Icon: Clock, label: "Duration", value: course.duration },
              { Icon: GraduationCap, label: "Degrees", value: course.degrees.join(", ") },
              { Icon: PenLine, label: "Tests", value: course.tests.join("; ") },
              { Icon: Briefcase, label: "Cost", value: course.costNote },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="bg-[#F8F9FA] rounded-xl p-5">
                <Icon size={18} className="text-[#C9A84C] mb-2" />
                <dt className="text-xs text-[#6B7280] mb-1">{label}</dt>
                <dd className="text-sm font-semibold text-[#1B2A4A] leading-snug">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Best countries */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-3">Best Countries for {course.shortName}</h2>
          <p className="text-[#6B7280] mb-8 max-w-2xl">Where Indian students most often study {course.shortName.toLowerCase()}, and why.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {countries.map(({ id, why, dest }) => (
              <Link
                key={id}
                href={`/destinations/${id}`}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:border-[#C9A84C]/40 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-[#1B2A4A] mb-1.5">
                  <span className="mr-1.5">{dest?.flag}</span>
                  {dest?.name}
                </h3>
                <p className="speakable-answer text-sm text-[#6B7280] mb-3">{why}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B2A4A] group-hover:text-[#C9A84C] transition-colors">
                  Study in {dest?.name} <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + specialisations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-6">Eligibility for {course.shortName} Abroad</h2>
            <ul className="space-y-3">
              {course.eligibility.map((item) => (
                <li key={item} className="speakable-answer flex items-start gap-3 text-sm text-[#374151]">
                  <CheckCircle2 size={17} className="text-[#C9A84C] mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-[#1B2A4A] mt-8 mb-3">Entrance and English Tests</h3>
            <ul className="space-y-2">
              {course.tests.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-[#374151]">
                  <PenLine size={15} className="text-[#C9A84C] mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-6">Popular Specialisations</h2>
            <div className="flex flex-wrap gap-2 mb-10">
              {course.specialisations.map((s) => (
                <span key={s} className="bg-[#EEF2FF] text-[#1B2A4A] text-sm font-medium px-4 py-1.5 rounded-full">{s}</span>
              ))}
            </div>
            <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-6">Career Options After {course.shortName}</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {course.careers.map((c) => (
                <li key={c} className="flex items-center gap-2.5 bg-[#F8F9FA] rounded-lg px-4 py-3 text-sm font-semibold text-[#1B2A4A]">
                  <Briefcase size={15} className="text-[#C9A84C] shrink-0" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8 text-center">
            {course.shortName} Abroad — Frequently Asked Questions
          </h2>
          <FaqList faqs={course.faqs} />
        </div>
      </section>

      {/* Other courses */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-6">Explore Other Courses</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
                className="inline-flex items-center gap-1.5 border border-gray-200 text-[#1B2A4A] text-sm font-semibold px-4 py-2 rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                {c.name} <ArrowRight size={13} />
              </Link>
            ))}
            <Link
              href="/mbbs-abroad"
              className="inline-flex items-center gap-1.5 border border-gray-200 text-[#1B2A4A] text-sm font-semibold px-4 py-2 rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
            >
              MBBS Abroad <ArrowRight size={13} />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 bg-[#1B2A4A] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#0F1A2E] transition-colors"
            >
              All courses <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1B2A4A] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-3">Find the Right {course.shortName} Program for Your Profile</h2>
          <p className="text-blue-200 mb-7">A free profile evaluation covers universities, budget, tests, loans and visa — in one call.</p>
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
