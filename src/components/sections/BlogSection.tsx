import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { BLOG_POSTS } from "@/lib/data"

export default function BlogSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">Resources</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A]">Study Abroad Guides</h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] hover:text-[#C9A84C] transition-colors">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#C9A84C]/30 transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#1B2A4A] text-[#C9A84C] text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#6B7280] text-xs mb-2">{post.date}</p>
                <h3 className="font-playfair font-bold text-[#1B2A4A] mb-2 line-clamp-2 group-hover:text-[#C9A84C] transition-colors">{post.title}</h3>
                <p className="text-[#6B7280] text-sm line-clamp-2">{post.excerpt.replace(/&apos;/g, "'")}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#C9A84C] mt-4">
                  Read Guide <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
