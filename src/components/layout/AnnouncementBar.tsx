"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, ArrowRight, Sparkles } from "lucide-react"
import { ANNOUNCEMENTS } from "@/lib/data"

const DISMISS_KEY = "vg-announcements-oct-2026-dismissed"
const ROTATE_MS = 6000

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    queueMicrotask(() => {
      if (!sessionStorage.getItem(DISMISS_KEY)) {
        setVisible(true)
      }
    })
  }, [])

  useEffect(() => {
    if (!visible) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % ANNOUNCEMENTS.length), ROTATE_MS)
    return () => clearInterval(timer)
  }, [visible])

  const dismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1")
    setVisible(false)
  }

  if (!visible) return null

  const item = ANNOUNCEMENTS[index]

  return (
    <Link
      href={item.href}
      className="relative flex items-center justify-center bg-gradient-to-r from-[#C9A84C] via-[#E8C96A] to-[#C9A84C] bg-[length:200%_auto] animate-shimmer text-[#1B2A4A] group"
    >
      <div className="max-w-7xl mx-auto px-10 py-3 flex items-center justify-center gap-2.5 text-center">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B2A4A] opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1B2A4A]" />
        </span>
        <Sparkles size={16} className="shrink-0" />
        <p key={item.href} className="text-xs sm:text-sm font-bold flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 animate-fade-in-up">
          <span className="uppercase tracking-wide">{item.label}:</span>
          <span>{item.message}</span>
          <span className="inline-flex items-center gap-1 underline underline-offset-2 group-hover:gap-1.5 transition-all">
            Learn more <ArrowRight size={13} />
          </span>
        </p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          dismiss()
        }}
        aria-label="Dismiss announcement"
        className="absolute right-3 sm:right-5 p-1 text-[#1B2A4A]/60 hover:text-[#1B2A4A] transition-colors z-10"
      >
        <X size={16} />
      </button>
    </Link>
  )
}
