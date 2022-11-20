/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "768px",
      laptop: "1200px",
      desktop: "1400px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        laptop: "0",
      },
      screens: {
        tablet: "720px",
        laptop: "1140px",
        desktop: "1320px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["'Open Sans', sans-serif"],
      },
    },
  },
  plugins: [],
};
