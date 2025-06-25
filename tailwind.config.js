/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ['NotoSansArabic', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: "100%",
          lg: "1280px",
        },
      },
    },
  },
  plugins: [],
};
