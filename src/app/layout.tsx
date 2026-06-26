import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"
import MobileStickyBar from "@/components/ui/MobileStickyBar"
import LenisProvider from "@/components/providers/LenisProvider"

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-cormorant", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: { default: "Versa Global — Study Abroad Consultancy Kerala | 60+ Countries", template: "%s | Versa Global" },
  description: "Kerala's trusted study abroad consultancy. 1,000+ students placed in 60+ countries with 95% visa success rate. UK, Canada, Australia, Germany, USA, Ireland, and more.",
  keywords: ["study abroad Kerala", "study in UK from Kerala", "Canada study visa", "Germany free education", "Australia student visa Kerala"],
  openGraph: { type: "website", locale: "en_IN", siteName: "Versa Global" },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#F8F6F0] font-inter antialiased">
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <MobileStickyBar />
        </LenisProvider>
      </body>
    </html>
  )
}
