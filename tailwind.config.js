/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        green: 'green',
        yellow: 'yellow',
        red: 'red',
        warning: '#FFC107'
      },
    },
  },
  variants: {},
  plugins: [],
}