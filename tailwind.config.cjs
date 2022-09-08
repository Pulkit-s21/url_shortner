/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: 'hsl(180, 66%, 49%)',
          violet: 'hsl(257, 27%, 26%)',
        },
        secondary: 'hsl(0, 87%, 67%)',
        neutral: {
          300: 'hsl(0, 0%, 75%)',
          500: 'hsl(257, 7%, 63%)',
          700: 'hsl(255, 11%, 22%)',
          900: 'hsl(260, 8%, 14%)',
        },
      },
      fontFamily: {
        primary: 'Poppins',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}