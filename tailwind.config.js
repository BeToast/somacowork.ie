/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        '69': '26rem',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: {
        DEFAULT: '#fd5829',
        dark: '#cc4823',
      },
      grey: {
        100: '#dee2e6',
        200: '#adb5bd',
        300: '#6c757d',
        text: '#343a40',
        DEFAULT: '#343a40',
      },
      white: '#FFFFFF',
      black: '#000000',
    }
  },
  darkMode: "class",
}
