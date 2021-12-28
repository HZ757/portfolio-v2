module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('/src/Assets/headerBackground.svg')",
      },
      height: {
        "40rem": "40rem",
        "45rem": "45rem",
      },
    },
    screens: {
      'mini': '300px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px'
    },
  },
  plugins: [],
}
