module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'soft-violet': 'hsl(273, 75%, 66%)',
        'soft-blue': 'hsl(240, 73%, 65%)',
        'soft-red': 'hsl(14, 88%, 65%)',
        'very-dark-blue': 'hsl(237, 12%, 33%)',
        'desaturated-blue': 'hsl(238, 29%, 16%)',
        'dark-blue': 'hsl(240, 6%, 50%)',
        'light-blue': 'hsl(240, 5%, 91%)',
      },
      fontFamily: {
        body: ['Kumbh Sans', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
