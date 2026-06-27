import type { Metadata } from "next"
import HeroSection from "@/components/sections/HeroSection"
import DestinationsSection from "@/components/sections/DestinationsSection"
import ProcessSection from "@/components/sections/ProcessSection"
import FoundersSection from "@/components/sections/FoundersSection"
import BlogSection from "@/components/sections/BlogSection"
import FAQSection from "@/components/sections/FAQSection"
import SchemesSection from "@/components/sections/SchemesSection"
import ContactSection from "@/components/sections/ContactSection"

export const metadata: Metadata = {
  title: "Study Abroad Consultancy Kerala — Versa Global",
  description: "Kerala's #1 study abroad consultancy. UK, Canada, Australia, Germany, USA and more. 1,000+ students placed, 95% visa success rate.",
}

export default function HomePage() {
  return (
    <>
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
