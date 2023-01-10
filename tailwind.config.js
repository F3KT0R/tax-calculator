/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,js}"],
  },
  theme: {
    fontFamily: {
      'roboto': ['Roboto Mono']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'classy-green': '#048A81',
        'classy-dark': '#334B48',
        'classy-gray': '#96B1AD',
        'classy-blue': '#5B7CB3',
        'classy-navy': '#224B7E',
        'reset-red': '#B13E3E',
      },
    },
  },
  plugins: [],
}
