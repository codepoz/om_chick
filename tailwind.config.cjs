/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%'
      }
    },
    colors: {
      // background colors
      bgone: "#ff9940",
      bgtwo: "#ff2f2b",
      bgthree: "#333333",
      bgfour: "#fffaf5",

      // text colors
      textone: '#47201a',
      texttwo: '',
      textthree: '',

      // normal
      white: '#FFFFFF',
      blue: '#1E90FF',
    },
    fontFamily: {
      body: ['Montserrat'],
    }
  },
  plugins: [],
}
