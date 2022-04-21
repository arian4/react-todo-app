module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        'body': ['Josefin Sans', 'sans-serif'],
      },
      colors :{
        'primary' : {
          'blue' : 'hsl(220, 98%, 61%)',
          'right-g':'hsl(192, 100%, 67%)',
          'left-g':'hsl(280, 87%, 65%)'

        },
        light : {
          '100':'hsl(0, 0%, 98%)',
          '200':'hsl(236, 33%, 92%)',
          '300':'hsl(233, 11%, 84%)',
          '400':'hsl(236, 9%, 61%)',
          // text color
          '500':'hsl(235, 19%, 35%)'

        },
        dark : {
          '100':'hsl(235, 21%, 11%)',
          '200':'hsl(235, 24%, 19%)',
          '300':'hsl(234, 39%, 85%)',
          '400':'hsl(234, 11%, 52%)',
          '500':'hsl(233, 14%, 35%)',
          '600':'hsl(237, 14%, 26%)',
          'hover':'hsl(236, 33%, 92%)'

        }
      }
    },
  },
  plugins: [],
}
