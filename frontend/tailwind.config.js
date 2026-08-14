/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a0d17",
          card: "rgba(16, 23, 42, 0.75)",
          primary: "#38bdf8",
          secondary: "#818cf8",
          accent: "#6366f1"
        }
      }
    },
  },
  plugins: [],
}