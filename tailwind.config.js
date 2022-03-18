module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
  plugins: [],
}
