import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"
import MobileStickyBar from "@/components/ui/MobileStickyBar"
import IntroWrapper from "@/components/ui/IntroWrapper"
import { SITE } from "@/lib/data"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: { default: `${SITE.name} — Study Abroad Consultancy Kerala`, template: `%s | ${SITE.name}` },
  description: "Kerala's most trusted study abroad consultancy. 60+ countries, 95% visa success rate, expert counsellors.",
  keywords: ["study abroad", "Kerala", "IELTS", "UK university", "Canada study", "Germany education", "Versa Global"],
  openGraph: { type: "website", locale: "en_IN", siteName: SITE.name },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white font-inter antialiased overflow-x-hidden">
        <IntroWrapper />
        <Navbar />
        <main className="pt-[64px] md:pt-[94px] pb-16 md:pb-0 overflow-x-hidden">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar />
      </body>
    </html>
  )
}
