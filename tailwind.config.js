import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        base: '#0b1224',
      },
      boxShadow: {
        glow: '0 15px 60px -30px rgba(59,130,246,0.6)',
      },
    },
  },
  plugins: [],
}

