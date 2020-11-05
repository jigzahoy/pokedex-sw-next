module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
      },
      inset: {
        '1/2':'50%'
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-image-rendering')(), // no options to configure
  ],
}
