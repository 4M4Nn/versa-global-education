import { CAREER_PROGRAMS, DESTINATIONS, FAQS, SITE } from "@/lib/data"
import { getAllBlogPosts } from "@/lib/content"
import { MBBS_HUB, MBBS_HUB_FAQS, MBBS_COUNTRIES } from "@/lib/mbbs"
import { PLACEMENTS, PLACED_STUDENTS } from "@/lib/placements"
import { DESTINATION_FAQS, FAQ_CATEGORIES } from "@/lib/faqs-october-2026"

const BASE = "https://www.versaglobal.in"

export const dynamic = "force-static"

const clean = (text: string) => text.replace(/&apos;/g, "'")

export function GET() {
  const lines = [
    `# ${SITE.name}`,
    "",
    "> Study abroad consultancy in Kochi, Kerala, India, part of Versa Growth Ventures. End-to-end support for Indian students: university selection, applications and SOPs, education loans through 20+ bank and NBFC partners, visa assistance, and pre-departure and arrival support. Also places NEET-qualified students in MBBS programs in Vietnam (from ₹31 lakhs for the full 6-year program) and Georgia, and runs a Career & Skills Academy with a 100% job-assured IT Infrastructure Engineer Program in Dubai for GCC careers.",
    "",
    `- Address: ${SITE.address}`,
    `- Phone: ${SITE.phone}`,
    `- Email: ${SITE.email}, ${SITE.businessEmail}`,
    "",
    "## MBBS abroad",
    `- [MBBS Abroad overview](${BASE}/mbbs-abroad): ${MBBS_HUB.summary}`,
    ...MBBS_COUNTRIES.map(
      (c) =>
        `- [MBBS in ${c.name}](${BASE}/mbbs-abroad/${c.slug}): ${c.summary} Cost: ${c.cost} (${c.costNote}). Duration: ${c.duration}. Intakes: ${c.intake}. Visa: ${c.visa}.`
    ),
    `- Eligibility: ${MBBS_HUB.eligibility.join("; ")}.`,
    ...MBBS_HUB_FAQS.flatMap((f) => [`### ${f.question}`, f.answer, ""]),
    "## Study destinations",
    ...DESTINATIONS.map(
      (d) =>
        `- [${d.name}](${BASE}/destinations/${d.id}): ${clean(d.description)} Intakes: ${d.intake}. Visa: ${d.visa}. Scholarships: ${d.scholarships}.`
    ),
    "",
    "## Career & Skills Academy",
    ...CAREER_PROGRAMS.flatMap((p) => [
      `- [${p.title}](${BASE}/career-academy/${p.slug}): ${clean(p.tagline)}. Delivered in association with ${p.associationPartner}. ${p.durationHours} over ${p.durationMonths}. Modes: ${p.modes.join(", ")}. Fee: ${p.fee.currency} ${p.fee.amount.toLocaleString("en-US")} (${p.fee.paymentMode}), certification exams included. ${p.studentsPlaced} students placed in GCC countries. Roles: ${p.careerOutcomes.join(", ")}.`,
      "",
      ...p.faqs.flatMap((f) => [`### ${clean(f.question)}`, clean(f.answer), ""]),
    ]),
    "",
    "## Recent placements",
    PLACEMENTS.intro,
    `Placed students and roles: ${PLACED_STUDENTS.map((s) => `${s.name} (${s.role})`).join(", ")}.`,
    "",
    "## Key pages",
    `- [Courses](${BASE}/courses)`,
    `- [Education loan schemes](${BASE}/schemes)`,
    `- [Application process](${BASE}/process)`,
    `- [About](${BASE}/about)`,
    `- [FAQ](${BASE}/faq)`,
    `- [Contact](${BASE}/contact)`,
    "",
    "## Blog",
    ...getAllBlogPosts().map((p) => `- [${clean(p.title)}](${BASE}/blog/${p.slug}): ${clean(p.excerpt)}`),
    "",
    "## FAQ",
    ...FAQ_CATEGORIES.flatMap((category) => [
      `### ${category.name}`,
      "",
      ...FAQS.filter((f) => f.category === category.name).flatMap((f) => [`#### ${clean(f.question)}`, clean(f.answer), ""]),
    ]),
    "## Destination FAQ",
    ...DESTINATIONS.flatMap((d) =>
      (DESTINATION_FAQS[d.id] ?? []).flatMap((f) => [`### ${d.name}: ${f.question}`, f.answer, ""])
    ),
  ]

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
