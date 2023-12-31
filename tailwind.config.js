/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: '#1e306e',
        header_text: '#ffffff',
        chevron_bg: 'rgba(247,38,138,.8)',
      }
    },
  },
  plugins: [],
}

