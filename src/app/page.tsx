import type { Metadata } from "next"
import AnnouncementBar from "@/components/layout/AnnouncementBar"
import HeroSection from "@/components/sections/HeroSection"
import DestinationsSection from "@/components/sections/DestinationsSection"
import ProcessSection from "@/components/sections/ProcessSection"
import FoundersSection from "@/components/sections/FoundersSection"
import BlogSection from "@/components/sections/BlogSection"
import FAQSection from "@/components/sections/FAQSection"
import SchemesSection from "@/components/sections/SchemesSection"
import ContactSection from "@/components/sections/ContactSection"

export const metadata: Metadata = {
  title: "Versa Global — The Most Trusted Study Abroad Agency",
  description: "Versa Global is the most trusted study abroad agency for Indian students. UK, Canada, Australia, Germany, Georgia, Vietnam, South Korea and more. 1,000+ students placed, 95% visa success rate.",
}

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <HeroSection />
      <DestinationsSection />
      <ProcessSection />
      <FoundersSection />
      <SchemesSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
