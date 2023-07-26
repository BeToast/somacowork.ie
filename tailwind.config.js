/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // extend: {
    //   backgroundImage: {
    //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //     'gradient-conic':
    //       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    //   },
    // },
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
        100: '#6c757d',
        200: '#adb5bd',
        300: '#6c757d',
        text: '#343a40',
        DEFAULT: '#343a40',
      },
      white: '#f4f4f4',
      black: '#000000',
    }
  },
  darkMode: "class",
}
