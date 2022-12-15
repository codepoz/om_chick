/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      // background colors
      bgone: "#ff9940",
      bgtwo: "#ff2f2b",
      bgthree: "#333333",

      // text colors
      textone: '#47201a',
      texttwo: '#',
      textthree: '#',

      // normal
      white: '#FFFFFF',
      blue: '#1E90FF',
    }
  },
  plugins: [],
}
