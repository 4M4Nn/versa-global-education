import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CustomCursor from "@/components/CustomCursor"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"
import MobileStickyCTA from "@/components/MobileStickyCTA"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Versa Global Education — Study Abroad Consultancy Kerala",
  description: "Your dream university in 60+ countries. Expert study abroad guidance from Kerala. 500+ universities, 95% visa success rate.",
  keywords: ["study abroad Kerala", "overseas education consultancy Kochi", "university admission India", "Versa Global"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-[#1B2A4A] antialiased">
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyCTA />
      </body>
    </html>
  )
}
