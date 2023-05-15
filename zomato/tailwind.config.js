/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(180.96deg, #000000 0.82%, #4A2800 129.1%)'
      },
      colors:{
        primary:{
          light:"3fcc182",
          DEFAULT:"#FA9021",
          dark:"#afb04"
        },
      },
    },
  },
  plugins: []
}
