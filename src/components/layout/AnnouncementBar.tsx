"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, ArrowRight } from "lucide-react"

const DISMISS_KEY = "vg-mbbs-vietnam-announcement-dismissed"

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    queueMicrotask(() => {
      if (!sessionStorage.getItem(DISMISS_KEY)) {
        setVisible(true)
      }
    })
  }, [])

  const dismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="relative bg-[#1B2A4A] text-white">
      <div className="max-w-7xl mx-auto px-5 py-2.5 flex items-center justify-center gap-3 text-center">
        <p className="text-xs sm:text-sm font-medium flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span className="text-[#C9A84C] font-bold uppercase tracking-wide text-[10px] sm:text-xs">
            New
          </span>
          <span>MBBS in Vietnam — now starting from ₹31 lakhs.</span>
          <Link
            href="/destinations/vietnam"
            className="inline-flex items-center gap-1 text-[#C9A84C] font-semibold hover:text-[#E8C96A] transition-colors underline underline-offset-2"
          >
            Learn more <ArrowRight size={13} />
          </Link>
        </p>
        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-3 sm:right-5 p-1 text-white/60 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
