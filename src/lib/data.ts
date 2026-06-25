export const siteConfig = { name: "Versa Global", phone: "+91 8891129111", whatsapp: "918891129111", email: "info@versaglobal.in", location: "Kochi, Kerala, India" }

export const services = [
  { id: "import", num: "01", name: "Import Consultancy", short: "Import Consulting", desc: "End-to-end import solutions — source the world's best products and bring them into India compliantly and cost-efficiently.", stat: "₹50Cr+", statLabel: "Import Value Facilitated" },
  { id: "export", num: "02", name: "Export Management", short: "Export Management", desc: "Take your Indian products global. Market entry strategy, buyer sourcing, documentation, and logistics — all handled.", stat: "60+", statLabel: "Countries Reached" },
  { id: "logistics", num: "03", name: "International Logistics", short: "Logistics & Freight", desc: "Air, sea, and land freight with complete documentation, customs clearance, and last-mile delivery coordination.", stat: "99%", statLabel: "On-Time Delivery Rate" },
  { id: "compliance", num: "04", name: "Trade Compliance", short: "Compliance & Docs", desc: "Navigate international trade regulations, IEC registration, DGFT, FSSAI, and export-import documentation with zero errors.", stat: "800+", statLabel: "Consignments Cleared" },
]

export const countries = ["UAE", "USA", "UK", "Germany", "Singapore", "Australia", "Canada", "Saudi Arabia", "Qatar", "Netherlands", "Japan", "France", "Malaysia", "South Africa", "New Zealand"]

export const numberPhases = [
  { num: "60+", label: "Countries in Our Network", color: "#C49A2E" },
  { num: "₹50Cr+", label: "Trade Value Facilitated", color: "#0A1628" },
  { num: "800+", label: "Consignments Cleared", color: "#C49A2E" },
]

export const testimonials = [
  { name: "Suresh Varma", co: "Naturals Foods India", quote: "Versa Global opened the UAE and Singapore markets for our organic products. Revenue from exports now exceeds our domestic sales.", initials: "SV" },
  { name: "Meera Krishnan", co: "Kochi Importers Ltd.", quote: "The compliance team handled everything flawlessly. We went from zero import infrastructure to 8 successful shipments in one year.", initials: "MK" },
  { name: "Arun Pillai", co: "Kerala Spice Exports", quote: "Our FSSAI documentation used to take 3 months. With Versa Global it takes 3 weeks. That speed is worth millions in perishables.", initials: "AP" },
]

export const statement = "The world is your market. We make sure nothing stands between you and it."

export const serviceInterests = services.map(s => s.short)
