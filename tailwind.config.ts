import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        // main page background — soft cream (bright & refreshing)
        void: "#F7F5F0",
        // dark forest green — used for dark accent cards/hover states
        ink: "#1B3B2B",
        "ink-90": "#17301F",
        // primary text color is now dark forest green (was light text-on-dark)
        paper: "#1B3B2B",
        "paper-70": "rgba(27,59,43,0.7)",
        "paper-50": "rgba(27,59,43,0.5)",
        "paper-30": "rgba(27,59,43,0.3)",
        "paper-15": "rgba(27,59,43,0.15)",
        "paper-10": "rgba(27,59,43,0.1)",
        "paper-06": "rgba(27,59,43,0.06)",
        // warm sand / champagne accent
        gold: "#D4AF37",
        "gold-soft": "#B9962E",
        "gold-10": "rgba(212,175,55,0.10)",
        // electric violet — reserved for the one highlighted-animation accent
        violet: "#6A0DAD",
        "violet-10": "rgba(106,13,173,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
