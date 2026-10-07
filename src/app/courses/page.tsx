import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageCircle, Compass, Stethoscope } from "lucide-react"
import { SITE } from "@/lib/data"
import { COURSE_CATEGORIES, getDestinationsForCategory } from "@/lib/courseMatching"
import { STUDY_COURSES } from "@/lib/study-courses"

const BASE = "https://www.versaglobal.in"

export const metadata: Metadata = {
  title: "Courses to Study Abroad — MS, MBA, Data Science, Nursing & More",
  description:
    "The most popular courses for Indian students abroad — MS in Computer Science, MBA, Data Science & AI, Business Analytics, Engineering, Nursing, Public Health, Hospitality, Cybersecurity, Finance and MBBS — with the best countries for each.",
  alternates: { canonical: "/courses" },
}

export default function CoursesPage() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Popular study abroad courses for Indian students",
      itemListElement: [
        ...STUDY_COURSES.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, url: `${BASE}/courses/${c.slug}` })),
        { "@type": "ListItem", position: STUDY_COURSES.length + 1, name: "MBBS Abroad", url: `${BASE}/mbbs-abroad` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Courses", item: `${BASE}/courses` },
      ],
    },
  ]

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Courses</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">Courses to Study Abroad for Indian Students</h1>
          <p className="speakable-summary text-blue-200 text-lg">
            The courses Indian students search for most — with eligibility, entrance tests, best countries and career
            outcomes for each — plus every course category across our destinations.
          </p>
        </div>
      </section>

      {/* Popular courses */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-2">Most Popular Courses Abroad</h2>
          <p className="text-[#6B7280] mb-8">Detailed guides for the programs we counsel students on most often.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/mbbs-abroad"
              className="group bg-[#1B2A4A] text-white rounded-2xl p-6 flex flex-col justify-between hover:bg-[#0F1A2E] transition-colors"
            >
              <div>
                <Stethoscope size={26} className="text-[#C9A84C] mb-4" />
                <h3 className="font-playfair text-xl font-bold mb-2">MBBS Abroad</h3>
                <p className="text-blue-200 text-sm">Vietnam from ₹31 lakhs and Georgia — for NEET-qualified students.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#C9A84C] mt-5">
                Fees & eligibility <ArrowRight size={14} />
              </span>
            </Link>
            {STUDY_COURSES.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#C9A84C]/30 transition-all"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image src={course.image} alt={course.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-playfair text-lg font-bold text-[#1B2A4A] mb-1">{course.name}</h3>
                  <p className="text-xs text-[#6B7280] mb-3">{course.duration}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B2A4A] group-hover:text-[#C9A84C] transition-colors">
                    Countries, eligibility & careers <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-2">Course Categories by Country</h2>
          <p className="text-[#6B7280] mb-8">See which destinations offer each field, then ask us directly on WhatsApp.</p>
          <div className="space-y-6">
            {COURSE_CATEGORIES.map((category) => {
              const destinations = getDestinationsForCategory(category.id)
              const message = `Hi Versa Global, I'm interested in ${category.name} courses abroad. Can you guide me?`
              return (
                <div key={category.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-2">{category.name}</h3>
                      <p className="text-[#6B7280] text-sm mb-4 max-w-2xl">{category.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {destinations.map((dest) => (
                          <Link
                            key={dest.id}
                            href={`/destinations/${dest.id}`}
                            className="inline-flex items-center gap-1.5 bg-[#EEF2FF] hover:bg-[#C9A84C]/15 text-[#1B2A4A] text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
                          >
                            <span>{dest.flag}</span> {dest.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <a
                      href={`${waUrl}?text=${encodeURIComponent(message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#1B2A4A] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#0F1A2E] transition-colors text-sm whitespace-nowrap"
                    >
                      <MessageCircle size={16} /> Ask on WhatsApp
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 bg-[#1B2A4A] rounded-2xl p-8 md:p-10 text-center text-white">
            <Compass className="mx-auto mb-4 text-[#C9A84C]" size={32} />
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-3">Not Sure Which Course or Country Fits You?</h2>
            <p className="text-blue-200 mb-6 max-w-xl mx-auto">
              Answer a few quick questions in our Digital Office and get matched to the right course and country
              based on your budget, interests, and qualifications.
            </p>
            <Link
              href="/digital-office"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B2A4A] font-bold px-7 py-3.5 rounded-lg hover:bg-[#E8C96A] transition-colors"
            >
              Visit Our Digital Office <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
