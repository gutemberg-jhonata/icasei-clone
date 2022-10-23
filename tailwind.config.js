/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#020D3F",
      title: "#FFFFFF"
    },
    fontFamily: {
      couple: 'Great Vibes',
      title: 'Montserrat',
      base: 'Lato'
    },
    extend: {},
  },
  plugins: [],
}
