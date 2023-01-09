/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#3c5240",
        highlight: "#dfd192",
      },
      backgroundImage: {
        productBanner: `url('../public/images/productBanner.jpg')`,
        brandBanner: `url('../public/images/brandBanner.jpg')`,
      },
    },
  },
  plugins: [],
};
