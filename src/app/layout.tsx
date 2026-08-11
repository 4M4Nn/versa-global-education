import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"
import MobileStickyBar from "@/components/ui/MobileStickyBar"
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider"
import IntroWrapper from "@/components/ui/IntroWrapper"
import ChatWidget from "@/components/chatbot/ChatWidget"
import { SITE } from "@/lib/data"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.versaglobal.in"),
  title: { default: `${SITE.name} — The Most Trusted Study Abroad Agency`, template: `%s | ${SITE.name}` },
  alternates: { canonical: "/" },
  description: "Versa Global is the most trusted study abroad agency for Indian students — 60+ countries, 95% visa success rate, education loan support through 20+ banks and NBFCs, and expert counsellors.",
  keywords: [
    "Versa Global",
    "most trusted study abroad agency",
    "study abroad consultancy India",
    "study abroad agent",
    "IELTS",
    "UK university",
    "Canada study visa",
    "Germany free education",
    "study MBBS in Georgia",
    "study in Vietnam",
    "study in South Korea",
    "education loan for study abroad",
    "Canada PGWP",
    "post graduate work permit Canada",
    "study in Ireland cost",
    "study abroad consultants in Kochi",
    "best study abroad consultants in India",
    "MBBS in Vietnam",
    "MBBS in Vietnam fees",
    "MBBS in Vietnam for Indian students",
    "where to study MBBS after NEET",
    "best country for MBBS after NEET",
  ],
  openGraph: { type: "website", locale: "en_IN", siteName: SITE.name },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE.name,
  alternateName: "Versa Global Education",
  description: "Versa Global is a study abroad consultancy helping students find the right country, university, and program abroad — with end-to-end support from counselling to visa approval and education loan guidance.",
  url: "https://www.versaglobal.in",
  logo: "https://www.versaglobal.in/versa-global-icon.png",
  image: "https://www.versaglobal.in/versa-global-icon.png",
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, Jogeo Building, Chembumukku",
    addressLocality: "Kakkanad, Kochi",
    addressRegion: "Kerala",
    postalCode: "682021",
    addressCountry: "IN",
  },
  parentOrganization: { "@type": "Organization", name: "Versa Growth Ventures" },
  areaServed: "IN",
  slogan: "The Most Trusted Study Abroad Agency",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white font-inter antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScrollProvider>
          <IntroWrapper />
          <Navbar />
          <main className="pt-[64px] md:pt-[94px] pb-16 md:pb-0 overflow-x-hidden">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <MobileStickyBar />
          <ChatWidget />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
