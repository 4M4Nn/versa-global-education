"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function OpeningAnimation() {
  const [phase, setPhase] = useState(0)
  const [visible, setVisible] = useState(true)
  const [skipped, setSkipped] = useState(false)

  useEffect(() => {
    if (skipped) { setVisible(false); return }
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setVisible(false), 4500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [skipped])

  if (!visible) return null

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-[100] bg-[#1B2A4A] flex items-center justify-center overflow-hidden" exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
        <div className="relative z-10 text-center">
          {phase >= 1 && (
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="text-8xl mb-6">🌍</motion.div>
          )}
          {phase >= 2 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4">
              60+ <span className="gold-gradient">Countries</span>
            </motion.div>
          )}
          {phase >= 3 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="font-playfair text-xl text-blue-200">
              Your Dream University Awaits
            </motion.div>
          )}
        </div>
        <button onClick={() => setSkipped(true)} className="absolute bottom-8 right-8 text-blue-200 hover:text-white text-sm tracking-widest">SKIP →</button>
      </motion.div>
    </AnimatePresence>
  )
}
