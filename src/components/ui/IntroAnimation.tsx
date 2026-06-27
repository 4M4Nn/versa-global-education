"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface IntroAnimationProps {
  onComplete: () => void
}

const COUNTRY_DOTS = [
  { cx: 22, cy: 35, label: "UK" },
  { cx: 32, cy: 40, label: "Europe" },
  { cx: 55, cy: 38, label: "India" },
  { cx: 70, cy: 55, label: "Australia" },
  { cx: 18, cy: 45, label: "USA" },
  { cx: 65, cy: 28, label: "Japan" },
]

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState(0)
  const [visible, setVisible] = useState(true)
  const [planePos, setPlanePos] = useState({ x: 10, y: 60 })

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 900)
    const t3 = setTimeout(() => setPhase(3), 1500)
    const t4 = setTimeout(() => { setVisible(false) }, 2200)
    const t5 = setTimeout(() => onComplete(), 2700)
    return () => { [t1, t2, t3, t4, t5].forEach(clearTimeout) }
  }, [onComplete])

  useEffect(() => {
    if (phase < 2) return
    let frame = 0
    const animate = () => {
      frame++
      const progress = Math.min(frame / 60, 1)
      setPlanePos({ x: 10 + progress * 75, y: 60 - Math.sin(progress * Math.PI) * 25 })
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [phase])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="global-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center gap-6">
            {/* World map outline SVG */}
            <div className="relative w-64 h-36">
              <svg viewBox="0 0 100 60" className="w-full h-full">
                {/* Simplified world outline as an ellipse + landmass hints */}
                <motion.ellipse
                  cx="50" cy="30" rx="48" ry="28"
                  fill="none"
                  stroke="#1B2A4A"
                  strokeWidth="0.8"
                  strokeDasharray="200"
                  strokeDashoffset={200}
                  initial={{ strokeDashoffset: 200 }}
                  animate={{ strokeDashoffset: phase >= 1 ? 0 : 200 }}
                  transition={{ duration: 0.8 }}
                />
                {/* Grid lines */}
                {[20, 40, 60, 80].map((x) => (
                  <motion.line
                    key={x}
                    x1={x} y1={2} x2={x} y2={58}
                    stroke="#1B2A4A"
                    strokeWidth="0.3"
                    strokeOpacity="0.2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase >= 1 ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                ))}
                {[15, 30, 45].map((y) => (
                  <motion.line
                    key={y}
                    x1={2} y1={y} x2={98} y2={y}
                    stroke="#1B2A4A"
                    strokeWidth="0.3"
                    strokeOpacity="0.2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase >= 1 ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                ))}

                {/* Country dots */}
                {COUNTRY_DOTS.map((dot, i) => (
                  <motion.circle
                    key={dot.label}
                    cx={dot.cx}
                    cy={dot.cy}
                    r="2.5"
                    fill="#C9A84C"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: phase >= 2 ? [0, 1.5, 1] : 0, opacity: phase >= 2 ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                  />
                ))}

                {/* Airplane */}
                <motion.text
                  x={planePos.x}
                  y={planePos.y}
                  fontSize="6"
                  animate={{ x: planePos.x, y: planePos.y }}
                  style={{ opacity: phase >= 2 ? 1 : 0 }}
                >
                  ✈
                </motion.text>
              </svg>
            </div>

            {/* VERSA GLOBAL */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: phase >= 3 ? 1 : 0, y: phase >= 3 ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-[#1B2A4A] font-bold text-3xl tracking-[0.3em] uppercase">
                VERSA <span className="text-[#C9A84C]">GLOBAL</span>
              </p>
              <p className="text-[#6B7280] text-xs tracking-widest mt-1 uppercase">Study Abroad Consultancy</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
