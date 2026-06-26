import type { Metadata } from "next"
import Link from "next/link"
import { WA_URL } from "@/lib/data"

export const metadata: Metadata = {
  title: "Popular Courses to Study Abroad | Versa Global",
  description: "Explore popular courses for studying abroad — Engineering, Medicine, MBA, Computer Science, Law, and more. Versa Global helps Kerala students get admitted to top programs.",
}

const COURSE_CATEGORIES = [
  { name: "Engineering & Technology", emoji: "⚙️", desc: "Mechanical, Civil, Computer, Electrical, Chemical, and Aerospace Engineering programs at top universities worldwide.", intake: "September / February", destinations: ["Germany", "Canada", "Australia", "UK"], scholarships: "DAAD, Ontario Trillium Foundation" },
  { name: "Business & MBA", emoji: "💼", desc: "MBA, BBA, Finance, Accounting, and International Business programs from globally ranked business schools.", intake: "September / January", destinations: ["UK", "USA", "Canada", "Ireland"], scholarships: "Chevening, Rotary Foundation" },
  { name: "Computer Science & AI", emoji: "💻", desc: "Bachelor's and Master's programs in Computer Science, Data Science, AI, Machine Learning, and Cybersecurity.", intake: "September / January", destinations: ["Canada", "Germany", "USA", "Ireland"], scholarships: "Vanier CGS, DAAD" },
  { name: "Healthcare & Medicine", emoji: "🏥", desc: "MBBS, Nursing, Pharmacy, Public Health, and Biomedical Science programs with global clinical exposure.", intake: "September / February", destinations: ["UK", "Australia", "New Zealand", "Ireland"], scholarships: "Commonwealth, NZ Excellence Awards" },
  { name: "Arts, Design & Media", emoji: "🎨", desc: "Fine Arts, Graphic Design, Film & Media, Fashion Design, and Creative Technologies from world-renowned institutions.", intake: "September / February", destinations: ["UK", "USA", "Dubai", "Australia"], scholarships: "University merit scholarships" },
  { name: "Law & Social Sciences", emoji: "⚖️", desc: "LLB, LLM, Political Science, International Relations, and Social Work programs with global recognition.", intake: "September", destinations: ["UK", "Ireland", "Canada", "Australia"], scholarships: "Chevening, Commonwealth" },
  { name: "Hospitality & Tourism", emoji: "🏨", desc: "Hotel Management, Culinary Arts, Tourism Management, and Event Management at globally respected hospitality schools.", intake: "September / January", destinations: ["Australia", "New Zealand", "Dubai", "UK"], scholarships: "University merit aid" },
  { name: "Agriculture & Environment", emoji: "🌱", desc: "Agriculture Science, Environmental Engineering, Food Technology, and Sustainability programs.", intake: "September / February", destinations: ["New Zealand", "Australia", "Canada", "Germany"], scholarships: "DAAD, NZ Aid Programme" },
]

export default function CoursesPage() {
  return (
    <main className="pt-24 pb-20 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">WHAT TO STUDY</p>
          <h1 className="font-cormorant text-5xl font-bold text-[#1B2A4A] mb-4">Popular Study Abroad Courses</h1>
          <p className="text-[#6B7280] max-w-xl mx-auto">Choosing the right program in the right country makes all the difference. Our counselors match your academic background to the best-fit universities globally.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {COURSE_CATEGORIES.map(c => (
            <div key={c.name} className="glass-card rounded-2xl p-6 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{c.emoji}</span>
                <div className="flex-1">
                  <h2 className="font-cormorant text-xl font-bold text-[#1B2A4A] mb-1">{c.name}</h2>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-3">{c.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {c.destinations.map(d => (
                      <span key={d} className="text-xs px-2 py-1 rounded" style={{ background:"#1B2A4A10", color:"#1B2A4A" }}>{d}</span>
                    ))}
                  </div>
                  <p className="text-[#C9A84C] text-xs"><strong>Scholarships:</strong> {c.scholarships}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="navy-card rounded-2xl p-10 text-center">
          <h2 className="font-cormorant text-3xl font-bold text-white mb-3">Not Sure Which Course Is Right for You?</h2>
          <p className="text-[#A8B89A] mb-6">Our free profile evaluation maps your grades, interests, and budget to the perfect program and destination.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-[#C9A84C] text-white text-sm font-bold tracking-widest hover:bg-[#E8C96A] transition-colors">WhatsApp Us for Free Counselling</a>
            <Link href="/contact" className="px-8 py-3 border border-[#C9A84C]/40 text-[#C9A84C] text-sm tracking-widest hover:bg-[#C9A84C]/10 transition-colors">Book Appointment</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
