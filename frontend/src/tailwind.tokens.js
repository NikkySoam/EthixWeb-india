// Tailwind design tokens
export default {
  colors: {
    brand: {
      DEFAULT: "#D62828",
      50: "#ffe5e5",
      100: "#ffbaba",
    },
    neutral: {
      black: "#111111",
      white: "#fdfdfd",
      gray: {
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
      },
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    base: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    DEFAULT: "0.5rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
  boxShadow: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    DEFAULT: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 10px 15px rgba(0,0,0,0.1)",
  },
  transitionDuration: {
    DEFAULT: "200ms",
    fast: "150ms",
    slow: "300ms",
  },
  fontFamily: {
    sans: ["Inter", "ui-sans-serif", "system-ui"],
    heading: ["Playfair Display", "serif"],
  },
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.25rem" }],
    base: ["1rem", { lineHeight: "1.5rem" }],
    lg: ["1.125rem", { lineHeight: "1.75rem" }],
    xl: ["1.25rem", { lineHeight: "1.75rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
  },
};
