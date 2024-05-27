/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#262262",
        secondaryColor: "#25AAE1",
        textPrimaryColor:"#646464"
      }
    },
  },
  plugins: [],
}