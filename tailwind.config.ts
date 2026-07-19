import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F8F3EA",
        "paper-dim": "#EFE6D4",
        ink: "#241F1A",
        "ink-soft": "#5B5145",
        accent: "#B15A2C",
        "accent-dark": "#8A4520",
        line: "#DED2BC",
        mood: {
          playful: "#B8862E",
          romantic: "#A24632",
          meaningful: "#4C5B45",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(36, 31, 26, 0.15)",
        card: "0 8px 30px -12px rgba(36, 31, 26, 0.2)",
      },
      borderRadius: {
        sm2: "6px",
        md2: "10px",
      },
    },
  },
  plugins: [],
};

export default config;
