"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft, MessageCircle, RotateCcw, Check } from "lucide-react"
import { SITE } from "@/lib/data"
import {
  COURSE_CATEGORIES,
  BUDGET_BANDS,
  QUALIFICATION_LEVELS,
  getRecommendations,
  type BudgetBand,
} from "@/lib/courseMatching"

type Step = 1 | 2 | 3 | 4

export default function DigitalOfficeWizard() {
  const [step, setStep] = useState<Step>(1)
  const [categoryId, setCategoryId] = useState<string | null>(null)
  const [budgetBand, setBudgetBand] = useState<BudgetBand | null>(null)
  const [qualificationId, setQualificationId] = useState<string | null>(null)

  const category = COURSE_CATEGORIES.find((c) => c.id === categoryId)
  const qualification = QUALIFICATION_LEVELS.find((q) => q.id === qualificationId)
  const recommendations = categoryId && budgetBand ? getRecommendations({ categoryId, budgetBand }) : []

  const reset = () => {
    setStep(1)
    setCategoryId(null)
    setBudgetBand(null)
    setQualificationId(null)
  }

  const buildWhatsAppUrl = () => {
    const budgetLabel = BUDGET_BANDS.find((b) => b.id === budgetBand)?.label ?? ""
    const topPick = recommendations[0]?.destination.name ?? ""
    const message = `Hi Versa Global, I used the Digital Office tool.
Interest: ${category?.name ?? ""}
Budget: ${budgetLabel}
Qualification: ${qualification?.label ?? ""}
Top recommendation shown: ${topPick}

I'd like to talk to a counsellor about my options.`
    const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`
    return `${waUrl}?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              s <= step ? "bg-[#C9A84C]" : "bg-gray-100"
            }`}
          />
        ))}
      </div>

      {step === 1 && (
        <div>
          <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider">Step 1 of 3</span>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mt-2 mb-6">
            What do you want to study?
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {COURSE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setCategoryId(cat.id)
                  setStep(2)
                }}
                className="text-left p-4 rounded-xl border-2 border-gray-100 hover:border-[#C9A84C] hover:bg-[#EEF2FF]/50 transition-all"
              >
                <p className="font-bold text-[#1B2A4A] text-sm">{cat.name}</p>
                <p className="text-xs text-[#6B7280] mt-1">{cat.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider">Step 2 of 3</span>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mt-2 mb-6">
            What&apos;s your yearly budget?
          </h2>
          <div className="grid gap-3">
            {BUDGET_BANDS.map((band) => (
              <button
                key={band.id}
                onClick={() => {
                  setBudgetBand(band.id)
                  setStep(3)
                }}
                className="text-left p-4 rounded-xl border-2 border-gray-100 hover:border-[#C9A84C] hover:bg-[#EEF2FF]/50 transition-all flex items-center justify-between"
              >
                <div>
                  <p className="font-bold text-[#1B2A4A] text-sm">{band.label}</p>
                  <p className="text-xs text-[#6B7280] mt-1">{band.range}</p>
                </div>
                <ArrowRight size={16} className="text-[#C9A84C] shrink-0" />
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep(1)}
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B7280] hover:text-[#1B2A4A]"
          >
            <ArrowLeft size={14} /> Back
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider">Step 3 of 3</span>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mt-2 mb-6">
            What&apos;s your current qualification?
          </h2>
          <div className="grid gap-3">
            {QUALIFICATION_LEVELS.map((level) => (
              <button
                key={level.id}
                onClick={() => {
                  setQualificationId(level.id)
                  setStep(4)
                }}
                className="text-left p-4 rounded-xl border-2 border-gray-100 hover:border-[#C9A84C] hover:bg-[#EEF2FF]/50 transition-all flex items-center justify-between"
              >
                <p className="font-bold text-[#1B2A4A] text-sm">{level.label}</p>
                <ArrowRight size={16} className="text-[#C9A84C] shrink-0" />
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep(2)}
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B7280] hover:text-[#1B2A4A]"
          >
            <ArrowLeft size={14} /> Back
          </button>
        </div>
      )}

      {step === 4 && (
        <div>
          <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider">Your Matches</span>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mt-2 mb-2">
            Based on Your Profile
          </h2>
          <p className="text-sm text-[#6B7280] mb-6">
            {category?.name} &middot; {BUDGET_BANDS.find((b) => b.id === budgetBand)?.label} &middot;{" "}
            {qualification?.label}
          </p>

          {recommendations.length === 0 ? (
            <p className="text-sm text-[#6B7280] mb-6">
              We don&apos;t have a close match for that exact combination — but our counsellors cover 10+
              countries and can find the right fit. Message us directly below.
            </p>
          ) : (
            <div className="space-y-4 mb-8">
              {recommendations.map((rec, i) => (
                <div
                  key={rec.destination.id}
                  className={`rounded-2xl border-2 p-5 ${
                    i === 0 ? "border-[#C9A84C] bg-[#FBF5E6]" : "border-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{rec.destination.flag}</span>
                      <div>
                        <p className="font-playfair font-bold text-[#1B2A4A]">{rec.destination.name}</p>
                        <p className="text-xs text-[#C9A84C] font-semibold">{rec.destination.tagline}</p>
                      </div>
                    </div>
                    {i === 0 && (
                      <span className="bg-[#C9A84C] text-[#1B2A4A] text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                        Best Match
                      </span>
                    )}
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {rec.reasons.map((reason) => (
                      <li key={reason} className="flex items-start gap-2 text-xs text-[#374151]">
                        <Check size={13} className="text-[#C9A84C] mt-0.5 shrink-0" /> {reason}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/destinations/${rec.destination.id}`}
                    className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-[#1B2A4A] hover:text-[#C9A84C]"
                  >
                    Explore {rec.destination.name} <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1B2A4A] text-white font-bold px-6 py-3.5 rounded-lg hover:bg-[#0F1A2E] transition-colors"
            >
              <MessageCircle size={18} /> Get My Personalized Plan on WhatsApp
            </a>
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 border border-gray-200 text-[#6B7280] font-semibold px-6 py-3.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              <RotateCcw size={15} /> Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
