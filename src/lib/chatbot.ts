import { SITE, DESTINATIONS, PROCESS_STEPS, FOUNDERS, STATS, SCHEMES, FAQS, OFFER } from "@/lib/data"

export interface ChatReply {
  text: string
  quickReplies?: string[]
}

export const CHAT_QUICK_START = ["Study destinations", "Visa process", "Education loans", "Book free evaluation"]

export const GREETING: ChatReply = {
  text: `Hi! I'm the Versa Global Assistant 🎓 Ask me about study destinations, visas, education loans, or how to get started — or tap a quick option below.`,
  quickReplies: CHAT_QUICK_START,
}

function findDestinationMatch(input: string) {
  const aliases: Record<string, string> = {
    uk: "United Kingdom",
    britain: "United Kingdom",
    england: "United Kingdom",
    usa: "United States",
    america: "United States",
    us: "United States",
    nz: "New Zealand",
    korea: "South Korea",
    "south korea": "South Korea",
  }
  for (const [alias, name] of Object.entries(aliases)) {
    if (input.includes(alias)) {
      const dest = DESTINATIONS.find((d) => d.name === name)
      if (dest) return dest
    }
  }
  return DESTINATIONS.find((d) => input.includes(d.name.toLowerCase()))
}

function findFaqMatch(input: string) {
  const inputWords = new Set(input.split(/\W+/).filter((w) => w.length > 3))
  let best: { score: number; faq: (typeof FAQS)[number] } | null = null

  for (const faq of FAQS) {
    const questionWords = faq.question.toLowerCase().split(/\W+/)
    const score = questionWords.filter((w) => inputWords.has(w)).length
    if (score > 0 && (!best || score > best.score)) {
      best = { score, faq }
    }
  }
  return best && best.score >= 2 ? best.faq : null
}

export function getBotReply(rawInput: string): ChatReply {
  const input = rawInput.trim().toLowerCase()

  if (!input) return GREETING
  if (/^(hi|hello|hey|namaste|hii+)\b/.test(input)) return GREETING

  const destination = findDestinationMatch(input)
  if (destination) {
    return {
      text: `${destination.flag} ${destination.name} — ${destination.tagline}\n\nPopular programs: ${destination.programs.join(", ")}\nScholarships: ${destination.scholarships}\nIntake: ${destination.intake}\nVisa: ${destination.visa}\n\n${destination.description.replace(/&apos;/g, "'")}`,
      quickReplies: ["Book free evaluation", "Study destinations"],
    }
  }

  if (/destination|countr(y|ies)|where can i study|which countr/.test(input)) {
    const list = DESTINATIONS.map((d) => `${d.flag} ${d.name}`).join(", ")
    return {
      text: `We help students study in: ${list}. Ask me about any specific country for programs, intake and visa details.`,
      quickReplies: ["Book free evaluation", "Visa process"],
    }
  }

  if (/process|how does it work|steps|apply|application/.test(input)) {
    const list = PROCESS_STEPS.map((s) => `${s.number}. ${s.title} — ${s.description}`).join("\n")
    return {
      text: `Here's our process:\n${list}`,
      quickReplies: ["Book free evaluation", "Education loans"],
    }
  }

  if (/scholarship|loan|finance|scheme|fund|nbfc|bank/.test(input)) {
    const list = SCHEMES.map((s) => `• ${s.name} — ${s.description}`).join("\n")
    return {
      text: `Here's how we support your education financing:\n${list}`,
      quickReplies: ["Book free evaluation", "Study destinations"],
    }
  }

  if (/success rate|visa (approval|rate)/.test(input)) {
    const stat = STATS.find((s) => s.label.toLowerCase().includes("visa"))
    return {
      text: `We maintain a ${stat?.value}${stat?.suffix} visa success rate across all destinations — our team reviews every document before submission.`,
      quickReplies: ["Study destinations", "Book free evaluation"],
    }
  }

  if (/founder|who (runs|started|owns)|about (you|versa)/.test(input)) {
    const list = FOUNDERS.map((f) => `${f.name} — ${f.role}`).join("\n")
    return {
      text: `Versa Global is led by:\n${list}`,
      quickReplies: ["Book free evaluation", "Study destinations"],
    }
  }

  if (/book|appointment|call|phone|whatsapp|contact|evaluat|counsel|consult/.test(input)) {
    return {
      text: `${OFFER.title} — ${OFFER.description}\n\nCall or WhatsApp us at ${SITE.phone}, or email ${SITE.email}.`,
      quickReplies: ["Chat on WhatsApp", "Study destinations"],
    }
  }

  const faqMatch = findFaqMatch(input)
  if (faqMatch) {
    return {
      text: faqMatch.answer.replace(/&apos;/g, "'"),
      quickReplies: ["Book free evaluation", "Study destinations"],
    }
  }

  return {
    text: `I'm not totally sure about that one — but our counsellors can help directly on WhatsApp, or browse our Destinations and FAQ pages.`,
    quickReplies: ["Chat on WhatsApp", "Study destinations", "Visa process"],
  }
}
