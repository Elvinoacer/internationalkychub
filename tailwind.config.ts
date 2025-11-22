import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0A4A8F",
        "background-light": "#F4F7FA",
        "background-dark": "#101622",
        "surface-light": "#FFFFFF",
        "surface-dark": "#18202F",
        "text-light": "#333333",
        "text-dark": "#E0E0E0",
        "heading-light": "#000000",
        "heading-dark": "#FFFFFF",
        "border-light": "#E0E0E0",
        "border-dark": "#3B4354",
        success: "#28A745",
        warning: "#FFC107",
        danger: "#DC3545",
      },
      fontFamily: {
        display: ["Public Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
export default config;







