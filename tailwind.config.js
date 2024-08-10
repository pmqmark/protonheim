// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy-Bold', 'sans-serif'],
        gilroy1: ['Gilroy-Regular', 'sans-serif'],
      },
      letterSpacing: {
        custom: '-1.2px',
      },
      colors: {
        black: 'rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}
