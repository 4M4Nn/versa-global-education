import type { Config } from "tailwindcss"
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F8F6F0", navy: "#1B2A4A", "navy-dark": "#0F1A2E",
        gold: "#C9A84C", "gold-light": "#E8C96A",
        "text-dark": "#1B2A4A", "text-muted": "#6B7280",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
