/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      gray: {
        950: '#09090a',
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        100: '#e1e1e6'
      },

      violet: {
        800: '#271A45',
        500: '#633BBC',
        400: '#8257E5'
      },

      white: '#ffffff',
      black: '#000000'
    },
    extend: {}
  },
  plugins: []
}
