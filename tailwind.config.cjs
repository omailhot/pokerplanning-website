/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        'Montserrat', ...defaultTheme.fontFamily.sans
      ],
    },
    extend: {
      spacing: {
        'xs': '8rem',
        'sm': '16rem',
        'md': '20rem',
        'lg': '24rem',
        'xl': '32rem',
        '2xl': '40rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '96rem',
        '9xl': '128rem',
      },
      minWidth: {
        'xs': '12rem',
        'sm': '16rem',
        'md': '20rem',
        'lg': '24rem',
        'xl': '32rem',
        '2xl': '40rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '96rem',
        '9xl': '128rem',
      },
      maxWidth: {
        'xs': '8rem',
        'sm': '16rem',
        'md': '20rem',
        'lg': '24rem',
        'xl': '32rem',
        '2xl': '40rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}