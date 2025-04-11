/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 15px 0px #A39BD6B2',
      },
      colors: {
        'navbar-bg': '#000003',
        'custom-black-adventage':'#09090D',
        'custom-white-adventage':'#262626',
        'custom-back-popup-input':'#17171b',
        'main':'#A39BD6',
        'titles-color':'#E8E4FF'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #A39BD6 0%, #69648A 100%)',
        'custom-gradient-titles': 'radial-gradient(100% 100% at 50.43% 100%, rgba(212, 205, 255, 0.3) 0%, rgba(212, 205, 255, 0) 100%)',
      },
    },
  },
  plugins: [],
}

