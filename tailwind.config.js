/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2f2e0c",
        secondary: "#aeff6e",
      },
      textColor: {
        primary: "#2f2e0c",
        secondary: "#aeff6e",
      }
    },
  },
  plugins: [],
}