import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { BlogPost } from "@/types"
import { BLOG_POSTS as staticBlogPosts } from "@/lib/data"

const BLOG_DIR = path.join(process.cwd(), "src/content/blog")
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&auto=format&fit=crop"

type AgentFrontmatter = {
  title: string
  slug: string
  status?: string
  metaDescription?: string
  targetKeyword?: string
  publishedAt?: string
  coverImage?: string
}

function firstParagraph(markdown: string): string {
  return markdown.split(/\n\s*\n/)[0]?.replace(/^#+\s*/, "").trim() ?? ""
}

/** Blog posts written by the Nexora SEO agent (src/content/blog/*.mdx), mapped onto this site's BlogPost shape. */
function getAgentBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(BLOG_DIR, f), "utf-8"))
      const fm = data as AgentFrontmatter
      return {
        slug: fm.slug,
        title: fm.title,
        excerpt: fm.metaDescription || firstParagraph(content),
        image: fm.coverImage || DEFAULT_IMAGE,
        category: fm.targetKeyword || "Study Abroad",
        date: fm.publishedAt
          ? new Date(fm.publishedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })
          : new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
        body: content.trim(),
        status: fm.status,
      } as BlogPost & { status?: string }
    })
    .filter((post) => post.status === "published")
}

/** Static posts from data.ts merged with agent-published posts. */
export function getAllBlogPosts(): BlogPost[] {
  const agentPosts = getAgentBlogPosts()
  const agentSlugs = new Set(agentPosts.map((p) => p.slug))
  return [...staticBlogPosts.filter((p) => !agentSlugs.has(p.slug)), ...agentPosts]
}
