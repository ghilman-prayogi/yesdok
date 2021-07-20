module.exports = {
  purge: [

    './components/**/*.{vue,js}',

    './layouts/**/*.vue',

    './pages/**/*.vue',

    './plugins/**/*.{js,ts}',

    './nuxt.config.{js,ts}',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': {
          DEFAULT: '#024668',
          '50': '#54C4FC',
          '100': '#3BBBFB',
          '200': '#09AAFA',
          '300': '#0489CC',
          '400': '#03689A',
          '500': '#024668',
          '600': '#012436',
          '700': '#000304',
          '800': '#000000',
          '900': '#000000'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
