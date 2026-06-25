import type { Config } from "tailwindcss"
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAFBFF", navy: "#0A1628", "navy-light": "#1E3A5F",
        gold: "#C49A2E", "gold-light": "#E8B84B",
        "text-dark": "#0A1628", "text-muted": "#4A5568",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
