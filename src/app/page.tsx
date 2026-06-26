import type { Metadata } from "next"
import ClientWrapper from "@/components/layout/ClientWrapper"
import HeroSection from "@/components/sections/HeroSection"
import DestinationsSection from "@/components/sections/DestinationsSection"
import ProcessSection from "@/components/sections/ProcessSection"
import BlogSection from "@/components/sections/BlogSection"
import FAQSection from "@/components/sections/FAQSection"
import SchemesSection from "@/components/sections/SchemesSection"

export const metadata: Metadata = {
  title: "Versa Global — Study Abroad Consultancy Kerala | 60+ Countries",
  description: "Kerala's trusted study abroad consultancy. 1,000+ students placed in 60+ countries with 95% visa success rate. UK, Canada, Australia, Germany, USA, and more.",
}

export default function HomePage() {
  return (
    <ClientWrapper>
      <HeroSection />
      <DestinationsSection />
      <ProcessSection />
      <BlogSection />
      <FAQSection />
      <SchemesSection />
    </ClientWrapper>
  )
}
