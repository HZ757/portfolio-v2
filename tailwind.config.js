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
  },
  plugins: [],
}
