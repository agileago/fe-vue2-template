/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('tailwindcss-rem2px-preset')],
}
