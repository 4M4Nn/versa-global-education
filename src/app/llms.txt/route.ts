import { CAREER_PROGRAMS, DESTINATIONS, FAQS, SITE } from "@/lib/data"
import { getAllBlogPosts } from "@/lib/content"

const BASE = "https://www.versaglobal.in"

export const dynamic = "force-static"

const clean = (text: string) => text.replace(/&apos;/g, "'")

export function GET() {
  const lines = [
    `# ${SITE.name}`,
    "",
    "> Study abroad consultancy in Kochi, Kerala, India, part of Versa Growth Ventures. End-to-end support for Indian students: university selection, applications and SOPs, education loans through 20+ bank and NBFC partners, visa assistance, and pre-departure and arrival support. Also runs a Career & Skills Academy with job-assured IT programs for GCC careers.",
    "",
    `- Address: ${SITE.address}`,
    `- Phone: ${SITE.phone}`,
    `- Email: ${SITE.email}, ${SITE.businessEmail}`,
    "",
    "## Study destinations",
    ...DESTINATIONS.map(
      (d) =>
        `- [${d.name}](${BASE}/destinations/${d.id}): ${clean(d.description)} Intakes: ${d.intake}. Visa: ${d.visa}. Scholarships: ${d.scholarships}.`
    ),
    "",
    "## Career & Skills Academy",
    ...CAREER_PROGRAMS.map((p) => `- [${p.title}](${BASE}/career-academy/${p.slug}): ${clean(p.tagline)}`),
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
    ...FAQS.flatMap((f) => [`### ${clean(f.question)}`, clean(f.answer), ""]),
  ]

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
