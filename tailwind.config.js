/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        custom: '0 2px 10px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
