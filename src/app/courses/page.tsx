import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MessageCircle, Compass } from "lucide-react"
import { SITE } from "@/lib/data"
import { COURSE_CATEGORIES, getDestinationsForCategory } from "@/lib/courseMatching"

export const metadata: Metadata = {
  title: "Courses — Every Program, Every Country We Cover",
  description:
    "Explore every course category Versa Global places students into — Business, Engineering & Technology, Medicine & Healthcare, Arts & Hospitality, Data & Sciences, and Law — and which countries offer each.",
  alternates: { canonical: "/courses" },
}

export default function CoursesPage() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <div>
      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Courses</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">Every Course. Every Country. One Place.</h1>
          <p className="text-blue-200 text-lg">
            From Business and Engineering to Medicine, Arts, and Law — see which of our 10 destinations offer
            the course you&apos;re looking for, then talk to us directly on WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto space-y-8">
          {COURSE_CATEGORIES.map((category) => {
            const destinations = getDestinationsForCategory(category.id)
            const message = `Hi Versa Global, I'm interested in ${category.name} courses abroad. Can you guide me?`
            return (
              <div
                key={category.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                  <div>
                    <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-2">{category.name}</h2>
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

        <div className="max-w-6xl mx-auto mt-12 bg-[#1B2A4A] rounded-2xl p-8 md:p-10 text-center text-white">
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
      </section>
    </div>
  )
}
