/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      couple: 'Great Vibes',
      title: 'Montserrat',
      base: 'Lato'
    },
    extend: {
      colors: {
        primary: "#020D3F",
        secondary: "rgb(236, 240, 241)",
        title: "#FFFFFF"
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
