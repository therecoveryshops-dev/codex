import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#123524",
        cream: "#F7F4EE",
        gold: "#B99A5B",
        ink: "#222222",
        moss: "#526354",
        saddle: "#7C5736"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "estate": "0 30px 90px rgba(18, 53, 36, 0.16)",
        "gold": "0 18px 50px rgba(185, 154, 91, 0.28)"
      },
      backgroundImage: {
        "linen": "linear-gradient(135deg, rgba(247,244,238,.94), rgba(255,255,255,.98))"
      }
    }
  },
  plugins: []
};

export default config;
