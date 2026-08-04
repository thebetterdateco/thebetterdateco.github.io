import type { Config } from "tailwindcss";

// Color/type/radius tokens below map 1:1 to the canonical design spec
// (comments show the spec's --variable-name for traceability).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FCFBFA", // --page-bg
        "paper-dim": "#F7F4F1", // --section-bg
        surface: "#FFFFFF", // --surface
        ink: "#202331", // --text-primary
        "ink-soft": "#41434D", // --text-secondary
        "ink-muted": "#6C6D73", // --text-muted
        accent: "#E76B50", // --brand
        "accent-dark": "#D85C43", // --brand-hover
        "accent-soft": "#FBE9E4", // --brand-soft
        "accent-subtle": "#FFF5F2", // --brand-subtle
        line: "#E7E0DB", // --border
        divider: "#EEE7E1", // --divider
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["64px", { lineHeight: "0.98", letterSpacing: "-0.025em", fontWeight: "600" }],
        "hero-mobile": ["44px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "600" }],
        heading: ["38px", { lineHeight: "1.1", fontWeight: "600" }],
        "heading-mobile": ["32px", { lineHeight: "1.15", fontWeight: "600" }],
        card: ["24px", { lineHeight: "1.2", fontWeight: "600" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["14px", { lineHeight: "1.55", fontWeight: "400" }],
        nav: ["14px", { lineHeight: "1.4", fontWeight: "500" }],
        btn: ["14px", { lineHeight: "1", fontWeight: "600" }],
      },
      maxWidth: {
        content: "1160px",
      },
      screens: {
        dt: "820px", // primary desktop/mobile collapse breakpoint per spec
      },
      boxShadow: {
        soft: "0 10px 30px rgba(32, 35, 49, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
