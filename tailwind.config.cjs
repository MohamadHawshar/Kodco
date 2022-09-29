/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#334E93",
        secondary: "#507BCD",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(82.55deg, rgba(28, 45, 88, 0.3) 1.15%, rgba(28, 34, 88, 0) 88.3%), url('.//assets//house_hero_image_homepage.png')",
      }
    },
    screens: {
      xs: "320px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};