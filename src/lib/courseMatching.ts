import { DESTINATIONS } from "@/lib/data"
import type { Destination } from "@/types"

export interface CourseCategory {
  id: string
  name: string
  description: string
  keywords: string[]
}

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: "business",
    name: "Business & Management",
    description: "MBA, business administration, management, and trade programs.",
    keywords: ["business", "mba", "management", "trade"],
  },
  {
    id: "engineering-tech",
    name: "Engineering & Technology",
    description: "Engineering, computer science, IT, software, and applied sciences.",
    keywords: ["engineering", "computer science", "it & software", "technology", "natural sciences"],
  },
  {
    id: "medicine-health",
    name: "Medicine & Healthcare",
    description: "MBBS, medicine, nursing, dentistry, pharma, and healthcare programs.",
    keywords: ["medicine", "mbbs", "healthcare", "nursing", "dentistry", "pharma"],
  },
  {
    id: "arts-design-hospitality",
    name: "Arts, Design & Hospitality",
    description: "Arts, design, film & media, hospitality, and tourism programs.",
    keywords: ["arts", "design", "film & media", "hospitality", "tourism"],
  },
  {
    id: "data-research-sciences",
    name: "Data, Research & Applied Sciences",
    description: "Data analytics, research programs, biotechnology, and agriculture.",
    keywords: ["data analytics", "research", "biotechnology", "agriculture"],
  },
  {
    id: "law",
    name: "Law",
    description: "Undergraduate and postgraduate law programs.",
    keywords: ["law"],
  },
]

export function getDestinationsForCategory(categoryId: string): Destination[] {
  const category = COURSE_CATEGORIES.find((c) => c.id === categoryId)
  if (!category) return []
  return DESTINATIONS.filter((dest) =>
    dest.programs.some((program) =>
      category.keywords.some((keyword) => program.toLowerCase().includes(keyword))
    )
  )
}

export type BudgetBand = "budget" | "mid" | "premium"

export const BUDGET_BANDS: { id: BudgetBand; label: string; range: string }[] = [
  { id: "budget", label: "Budget-Friendly", range: "Roughly ₹10-25 lakhs/year" },
  { id: "mid", label: "Mid-Range", range: "Roughly ₹25-45 lakhs/year" },
  { id: "premium", label: "Premium", range: "₹45 lakhs/year and above" },
]

const DESTINATION_BUDGET_BAND: Record<string, BudgetBand> = {
  germany: "budget",
  vietnam: "budget",
  "south-korea": "budget",
  georgia: "budget",
  ireland: "mid",
  canada: "mid",
  "new-zealand": "mid",
  uk: "premium",
  usa: "premium",
  australia: "premium",
}

export function getBudgetBand(destinationId: string): BudgetBand {
  return DESTINATION_BUDGET_BAND[destinationId] ?? "mid"
}

export interface QualificationLevel {
  id: string
  label: string
}

export const QUALIFICATION_LEVELS: QualificationLevel[] = [
  { id: "12th", label: "Completed 12th Grade" },
  { id: "bachelors", label: "Completed Bachelor's Degree" },
  { id: "other", label: "Other / Not Sure Yet" },
]

export interface RecommendationInput {
  categoryId: string
  budgetBand: BudgetBand
}

export interface RecommendationResult {
  destination: Destination
  score: number
  reasons: string[]
}

export function getRecommendations({ categoryId, budgetBand }: RecommendationInput): RecommendationResult[] {
  const category = COURSE_CATEGORIES.find((c) => c.id === categoryId)
  if (!category) return []

  const results: RecommendationResult[] = DESTINATIONS.map((dest) => {
    let score = 0
    const reasons: string[] = []

    const matchesInterest = dest.programs.some((program) =>
      category.keywords.some((keyword) => program.toLowerCase().includes(keyword))
    )
    if (matchesInterest) {
      score += 2
      reasons.push(`Strong ${category.name.toLowerCase()} programs`)
    }

    const destBand = getBudgetBand(dest.id)
    if (destBand === budgetBand) {
      score += 2
      reasons.push(`Fits your ${BUDGET_BANDS.find((b) => b.id === budgetBand)?.label.toLowerCase()} budget`)
    } else if (
      (budgetBand === "premium" && destBand === "mid") ||
      (budgetBand === "mid" && destBand === "budget")
    ) {
      score += 1
      reasons.push("Within reach of your budget")
    }

    return { destination: dest, score, reasons }
  })

  return results
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
}
