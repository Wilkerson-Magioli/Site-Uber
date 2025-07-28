/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
      'uber': "url('../Imagens/bguber.png')",
      'city': "url('../Imagens/bg-city.png')",
      }
    },
  },
  plugins: [],
}