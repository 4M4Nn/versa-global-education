import type { Metadata } from "next"
import OpeningAnimation from "@/components/sections/OpeningAnimation"
import Hero from "@/components/sections/Hero"
import Stats from "@/components/sections/Stats"
import Destinations from "@/components/sections/Destinations"
import GlobalContact from "@/components/sections/GlobalContact"

export const metadata: Metadata = {
  title: "Versa Global Education — Study Abroad Consultancy Kerala",
  description: "Expert study abroad guidance from Kerala. 60+ countries, 500+ universities, 95% visa success rate. Free consultation.",
}

export default function HomePage() {
  return (
    <main>
      <OpeningAnimation />
      <Hero />
      <Stats />
      <Destinations />
      <GlobalContact />
    </main>
  )
}
