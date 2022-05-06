module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          100:"#07224B",
          200:"#22c55e",
          300:"#22ff5d",
        }
      },
      borderRadius:{
        md: '4px'
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')

  ],
  
}
