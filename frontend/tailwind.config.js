/** @type {import('tailwindcss').Config} */
import tokens from "./src/tailwind.tokens.js";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      ...tokens,
    },
  },
  plugins: [],
};
