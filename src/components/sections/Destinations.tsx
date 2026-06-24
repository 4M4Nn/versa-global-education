"use client"
import { motion } from "framer-motion"
import { destinations } from "@/lib/data"

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm tracking-widest uppercase font-medium">Where Will You Go?</span>
          <h2 className="font-playfair text-4xl md:text-6xl text-[#1B2A4A] font-bold mt-3">Study in 60+ Countries</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <motion.div key={dest.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-2xl p-6 border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-lg transition-all duration-300 bg-white cursor-pointer"
              style={{ borderTopColor: dest.color, borderTopWidth: "3px" }}>
              <div className="text-5xl mb-4">{dest.flag}</div>
              <h3 className="font-playfair text-xl text-[#1B2A4A] font-bold mb-2">{dest.country}</h3>
              <div className="inline-flex items-center px-3 py-1 bg-[#C9A84C]/10 rounded-full mb-3">
                <span className="text-[#C9A84C] text-xs font-bold">{dest.universities} Universities</span>
              </div>
              <p className="text-[#6B7280] text-sm mb-4">{dest.description}</p>
              <div className="flex flex-wrap gap-1">
                {dest.popular.slice(0, 2).map((u) => (
                  <span key={u} className="text-xs px-2 py-1 bg-gray-50 text-[#6B7280] rounded-full border border-gray-100">{u}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
