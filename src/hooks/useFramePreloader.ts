"use client"

import { useEffect, useState } from "react"

interface FramePreloaderState {
  images: HTMLImageElement[]
  progress: number
  isLoaded: boolean
}

export function useFramePreloader(sources: readonly string[]): FramePreloaderState {
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false
    let settledCount = 0
    const loaded: HTMLImageElement[] = new Array(sources.length)

    sources.forEach((src, index) => {
      const img = new Image()
      img.decoding = "async"

      const onSettle = () => {
        if (cancelled) return
        settledCount += 1
        loaded[index] = img
        setProgress(Math.round((settledCount / sources.length) * 100))
        if (settledCount === sources.length) {
          setImages(loaded)
          setIsLoaded(true)
        }
      }

      img.onload = onSettle
      img.onerror = onSettle
      img.src = src
    })

    return () => {
      cancelled = true
    }
  }, [sources])

  return { images, progress, isLoaded }
}
