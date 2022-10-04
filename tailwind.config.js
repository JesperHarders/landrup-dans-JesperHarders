/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      'fontFamily': {
        'headingTwo': ['Racing Sans One', 'cursive'],
        'headingOne': ['Roboto', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
      'fontSize': {
        '18': '18pt',
        '24': '24pt',
        '36': '36pt'
      },
      'colors': {
        'grey': '#EAEAEA',
        'purple': '#5E2E53',
        'pink': '#E1A1E9'
      }
    },
  },
  plugins: [],
}
