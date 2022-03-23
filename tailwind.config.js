module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
         Inconsolata: ["Inconsolata" ,"bold"],
         Karla: ["Karla" ,"bold"]
      },
      colors: {
        'port-orange' : '#FCBF49',
        'port-red'    : '#D62828',
        'port-white'  : '#EAE2B7',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
