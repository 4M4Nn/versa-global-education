import { siteConfig } from "@/lib/data"
export default function Footer() {
  return (
    <footer className="bg-[#1B2A4A] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center">
                <span className="text-white font-bold text-xs">VG</span>
              </div>
              <div>
                <p className="font-playfair text-white font-bold">Versa Global</p>
                <p className="text-[#C9A84C] text-xs">Study Abroad Consultancy</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm">Your trusted partner for overseas education in 60+ countries.</p>
          </div>
          <div>
            <h4 className="text-[#C9A84C] font-semibold mb-4 text-sm uppercase tracking-wider">Destinations</h4>
            <div className="grid grid-cols-2 gap-1 text-blue-200 text-sm">
              {["United Kingdom", "United States", "Canada", "Australia", "Germany", "Dubai"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[#C9A84C] font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-2 text-blue-200 text-sm">
              <span>{siteConfig.phone}</span>
              <span>{siteConfig.email}</span>
              <span>{siteConfig.address}</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-sm">© {new Date().getFullYear()} Versa Global · A Versa Growth Ventures Company</p>
          <p className="text-blue-200 text-sm">Built by <span className="text-[#C9A84C]">Loopgen Technologies</span></p>
        </div>
      </div>
    </footer>
  )
}
