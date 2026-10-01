"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Trophy, X } from "lucide-react"
import { PLACEMENTS, PLACEMENT_POSTERS, PLACED_STUDENTS } from "@/lib/placements"

const NOTICE_KEY = "vg-placements-notice-oct-2026-seen"
const INTRO_KEY = "global-intro-seen"
const SLIDE_MS = 4500

/**
 * Recent-placements strip that loops continuously, plus a poster viewer.
 * With `notice`, the viewer also opens by itself once per session as a homepage notice.
 */
export default function PlacementsShowcase({ notice = false }: { notice?: boolean }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [auto, setAuto] = useState(false)

  const count = PLACEMENT_POSTERS.length
  const step = useCallback((delta: number) => setIndex((i) => (i + delta + count) % count), [count])

  const close = useCallback(() => {
    setOpen(false)
    setAuto(false)
  }, [])

  // Homepage notice: open once per session, after the intro animation has finished.
  useEffect(() => {
    if (!notice) return
    if (sessionStorage.getItem(NOTICE_KEY)) return
    let timeout: ReturnType<typeof setTimeout> | undefined
    const poll = setInterval(() => {
      if (!sessionStorage.getItem(INTRO_KEY)) return
      clearInterval(poll)
      timeout = setTimeout(() => {
        sessionStorage.setItem(NOTICE_KEY, "1")
        setIndex(0)
        setAuto(true)
        setOpen(true)
      }, 1500)
    }, 500)
    return () => {
      clearInterval(poll)
      if (timeout) clearTimeout(timeout)
    }
  }, [notice])

  // Auto-advance while the notice is showing.
  useEffect(() => {
    if (!open || !auto) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = setInterval(() => step(1), SLIDE_MS)
    return () => clearInterval(timer)
  }, [open, auto, step])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") {
        setAuto(false)
        step(1)
      }
      if (e.key === "ArrowLeft") {
        setAuto(false)
        step(-1)
      }
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open, close, step])

  const openAt = (i: number) => {
    setIndex(i)
    setAuto(false)
    setOpen(true)
  }

  const poster = PLACEMENT_POSTERS[index]

  return (
    <section id="placements" className="py-16 bg-navy-dark text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 text-center mb-10">
        <span className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
          </span>
          {PLACEMENTS.eyebrow}
        </span>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">{PLACEMENTS.heading}</h2>
        <p className="text-blue-200 max-w-2xl mx-auto">{PLACEMENTS.intro}</p>
      </div>

      {/* Looping poster strip — the list is rendered twice so the -50% translate loops seamlessly */}
      <div className="group relative">
        <div className="flex w-max gap-5 px-2.5 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((copy) =>
            PLACEMENT_POSTERS.map((item, i) => (
              <button
                key={`${copy}-${item.src}`}
                type="button"
                onClick={() => openAt(i)}
                aria-hidden={copy === 1}
                tabIndex={copy === 1 ? -1 : 0}
                aria-label={`View poster: ${item.title}`}
                className="shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:border-gold/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <Image
                  src={item.src}
                  alt={copy === 0 ? item.alt : ""}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 640px) 80vw, 420px"
                  className="h-64 sm:h-80 w-auto"
                />
              </button>
            ))
          )}
        </div>
      </div>

      {/* Looping roll of names and roles */}
      <div className="mt-10">
        <p className="text-center text-gold text-xs font-semibold tracking-widest uppercase mb-4">{PLACEMENTS.rollHeading}</p>
        <div className="group relative border-y border-white/10 py-4">
          <ul className="flex w-max gap-3 px-1.5 animate-marquee-reverse group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[0, 1].map((copy) =>
              PLACED_STUDENTS.map((student) => (
                <li
                  key={`${copy}-${student.name}`}
                  aria-hidden={copy === 1}
                  className="shrink-0 flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm whitespace-nowrap"
                >
                  <Trophy size={14} className="text-gold" />
                  <span className="font-semibold">{student.name}</span>
                  <span className="text-blue-200">— {student.role}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 px-5">
        <Link
          href={PLACEMENTS.cta.href}
          className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-7 py-3.5 rounded-lg hover:bg-[#E8C96A] transition-colors"
        >
          {PLACEMENTS.cta.label} <ArrowRight size={16} />
        </Link>
      </div>

      {/* Notice / poster viewer */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={PLACEMENTS.noticeTitle}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          style={{ background: "rgba(15,26,46,0.85)" }}
          onClick={close}
        >
          <div
            className="relative w-full max-w-lg bg-white text-navy rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 px-5 pt-4 pb-3">
              <div>
                <p className="text-gold text-[11px] font-bold tracking-widest uppercase">{PLACEMENTS.eyebrow}</p>
                <p className="font-playfair text-lg font-bold leading-tight">{PLACEMENTS.noticeTitle}</p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close notice"
                className="p-2 -mr-2 rounded-lg text-navy/60 hover:text-navy hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative bg-navy-light">
              <Image
                key={poster.src}
                src={poster.src}
                alt={poster.alt}
                width={poster.width}
                height={poster.height}
                sizes="(max-width: 640px) 92vw, 512px"
                className="w-full h-auto max-h-[58vh] object-contain"
              />
              <button
                type="button"
                onClick={() => {
                  setAuto(false)
                  step(-1)
                }}
                aria-label="Previous poster"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-navy shadow flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuto(false)
                  step(1)
                }}
                aria-label="Next poster"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-navy shadow flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="px-5 py-4">
              <div className="flex justify-center gap-1.5 mb-3">
                {PLACEMENT_POSTERS.map((item, i) => (
                  <span key={item.src} className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-gold" : "w-1.5 bg-gray-300"}`} />
                ))}
              </div>
              <p className="text-sm text-muted text-center mb-4">{PLACEMENTS.noticeText}</p>
              <Link
                href={PLACEMENTS.cta.href}
                onClick={close}
                className="flex items-center justify-center gap-2 text-center bg-navy text-white font-bold px-5 py-3 rounded-lg hover:bg-navy-dark transition-colors text-sm"
              >
                {PLACEMENTS.cta.label} <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
