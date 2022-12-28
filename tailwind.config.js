/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '3px 8px 19px #00000061;',
      }
    },
    screens: {
      'md': { 'min': '768px' },
      'lg': { 'max': '1023px' },
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
