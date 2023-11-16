/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          300: "#ECECED",
          900: "#7F7D83",
          1000: "#2D2B32",
          1200: "#0A090B",
        },
        orange: {
          500: '#FCC004'
        }
      }
    },
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [],
}
