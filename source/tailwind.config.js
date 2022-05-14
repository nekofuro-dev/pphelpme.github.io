module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'notoSans': ["Noto Sans TC", "sans-serif"]
    }
  },
  plugins: [
    require("daisyui")
  ],
}
