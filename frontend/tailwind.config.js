/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCE1A",
        secondary: "#0D0842",
        blackBG: "#3F3F3F",
        favourite: "#FF5841",
        footer: "#120731",
        hoverPrimary: "#FFB703",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Nunito Sans", "sans-serif"],
        castoro: ["Castoro Titling", "sans-serif"],
      },
    },
  },
  plugins: [],
};
