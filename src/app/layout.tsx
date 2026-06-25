import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import LenisProvider from "@/components/providers/LenisProvider"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","500","600","700","800"], variable: "--font-playfair", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: "Versa Global — International Trade & Export-Import Consultancy Kerala",
  description: "Kerala's trusted export-import consultancy. 60+ countries. ₹50Cr+ trade facilitated. Import consulting, export management, logistics and compliance.",
  keywords: ["export import consultancy Kerala", "Versa Global", "international trade Kochi", "import consulting India", "export management Kerala"],
  openGraph: { title: "Versa Global — International Trade Consultancy", description: "60+ countries. Complete import-export solutions.", type: "website" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#FAFBFF] text-[#0A1628] overflow-x-hidden">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </LenisProvider>
      </body>
    </html>
  )
}
