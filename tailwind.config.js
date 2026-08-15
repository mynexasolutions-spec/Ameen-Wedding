/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf6ef",
        ivory: "#f6efe3",
        gold: {
          DEFAULT: "#c5a880",
          light: "#e2d4c0",
          dark: "#997d56",
          bright: "#d4af37",
        },
        ink: "#2a2420",
        charcoal: "#0a0908",
        glass: "rgba(255, 255, 255, 0.03)",
        card: "#12100e",
      },
      fontFamily: {
        serif: [
          "Outfit",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: ["'Playfair Display'", "Georgia", "serif"],
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
