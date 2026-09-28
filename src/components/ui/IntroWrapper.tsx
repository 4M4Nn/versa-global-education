"use client"

import { useState, useSyncExternalStore } from "react"
import { AnimatePresence } from "framer-motion"
import IntroAnimation from "./IntroAnimation"

const INTRO_KEY = "global-intro-seen"

const subscribe = () => () => {}
const getIntroPending = () => !sessionStorage.getItem(INTRO_KEY)
const getServerIntroPending = () => false

export default function IntroWrapper() {
  const introPending = useSyncExternalStore(subscribe, getIntroPending, getServerIntroPending)
  const [dismissed, setDismissed] = useState(false)

  return (
    <AnimatePresence>
      {introPending && !dismissed && (
        <IntroAnimation
          onComplete={() => {
            sessionStorage.setItem(INTRO_KEY, "1")
            setDismissed(true)
          }}
        />
      )}
    </AnimatePresence>
  )
}
