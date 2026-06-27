import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { FOUNDERS, STATS, SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: "About Us — Kerala Study Abroad Experts",
  description: "Learn about Versa Global — Kerala's trusted study abroad consultancy founded by three passionate professionals.",
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">About Versa Global</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">We Help Kerala Students<br />Reach the World</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">Versa Global was founded with a simple mission: make world-class education accessible to every Kerala student, regardless of background.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-[#F8F9FA] rounded-2xl">
              <p className="font-playfair text-4xl font-bold text-[#C9A84C]">{stat.value.toLocaleString("en-IN")}{stat.suffix}</p>
              <p className="text-[#6B7280] text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-[#EEF2FF]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-[#1B2A4A] mb-5">Our Mission</h2>
            <p className="text-[#6B7280] leading-relaxed mb-5">
              Too many brilliant Kerala students miss life-changing opportunities abroad due to lack of guidance, misinformation, or financial barriers. Versa Global exists to change that.
            </p>
            <ul className="space-y-3">
              {[
                "Honest, research-backed university recommendations",
                "End-to-end visa support with 95% success rate",
                "Scholarship and financial aid guidance",
                "Post-arrival support in your destination country",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#374151]">
                  <CheckCircle2 size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-72 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&auto=format&fit=crop"
              alt="Students studying"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-3xl font-bold text-[#1B2A4A]">Meet the Founders</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {FOUNDERS.map((f) => (
              <div key={f.name} className="bg-[#F8F9FA] rounded-2xl p-8 text-center border border-gray-100">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-5" style={{ backgroundColor: f.color }}>
                  {f.monogram}
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#1B2A4A] mb-1">{f.name}</h3>
                <p className="text-[#C9A84C] text-xs font-semibold mb-3">{f.role}</p>
                <p className="text-[#6B7280] text-sm leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#C9A84C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold text-[#1B2A4A] mb-4">Ready to Study Abroad?</h2>
          <p className="text-[#1B2A4A]/80 mb-8">Book your free profile evaluation today. No obligation, no pressure — just expert guidance.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="bg-[#1B2A4A] text-white font-bold px-8 py-3.5 rounded-lg hover:bg-[#0F1A2E] transition-colors flex items-center gap-2">
              Free Evaluation <ArrowRight size={18} />
            </Link>
            <a href={`tel:${SITE.phone}`} className="border-2 border-[#1B2A4A] text-[#1B2A4A] font-bold px-8 py-3.5 rounded-lg hover:bg-[#1B2A4A] hover:text-white transition-colors">
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
