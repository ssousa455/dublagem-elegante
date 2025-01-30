import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#7E69AB",
          light: "#9B87F5",
          dark: "#5A4A7B",
        },
        secondary: {
          DEFAULT: "#1A1F2C",
          light: "#2A3040",
          dark: "#0A0F1C",
        },
        accent: {
          DEFAULT: "#D6BCFA",
          light: "#E6CCFF",
          dark: "#C6ACFA",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%, rgba(246,219,245,1) 89%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;