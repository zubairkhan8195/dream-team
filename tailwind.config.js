/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["**/*.html"],
  theme: {
    screens:{
      sm: '640px',
      md: '768px', 
      lg: '1024px',
      xl: '1240px',
      xxl: '1440px',
    },
    extend: {
      backgroundImage:{
        desktop_bgImage:"url('./home/imag/Desktop_1.png')",
        desktop_bgImage2:"url('./home/imag/Desktop_11.png')",
        about_bgImage:"url('./about/about_1.png'), linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        about_bgImage3:"url('./about/hero_about_lg.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        about_bgImage2:"url('./about/find_mb.jpg')",
        about_bgImage4:"url('./about/find_us.jpg')",
        about_bgImage5:"url('./about/Rectangle_453.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        career_bgImage:"url('./career/career_mob.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        career_bgImage2:"url('./career/career_desktop.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        career_articleImag:"url('./career/article-bg.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        career_articleImag2:"url('./career/article_desktop.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        resource_mbImag:"url('./resourse/resourse_mb.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        resource_mbImag2:"url('./resourse/resourse_desktop.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        article_mbImag:"url('./article/article_mb.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        article_mbImag2:"url('./article/Frame_mb.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        article_mbImag3:"url('./article/Rectangle_453.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        article_mbImag4:"url('./article/Rectangle_449.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        article_desktopImag:"url('./article/article_desktop1.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        article_desktopImag2:"url('./article/article_desktop2.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        article_desktopImag3:"url('./article/article_desktop3.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        article_desktopImag4:"url('./article/article_desktop4.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        pricing_mbImag:"url('./pricing/pricing_mb.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        pricing_desktopImag:"url('./pricing/pricing_desktop.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        kata_mbImag:"url('./kata/kata_mb.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        kata_mbImag2:"url('./kata/kat_mb2.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        kata_desktopImag:"url('./kata/kata_desktop.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        kata_desktopImag2:"url('./kata/kata_desktop2.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        dream_mbImag:"url('./dream_team/home_mb.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        dream_mbImag2:"url('./dream_team/Rectangle_453.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        dream_desktopImag:"url('./dream_team/Rectangle_454.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
        gradient: "linear-gradient(135deg,  #26CD89 0%, #32CAA7 43.23%, #40C6C9 67.19%, #35B1D0 100%) ",
        text_gradient_2 : "linear-gradient(135deg, #FF704B 25.34%, #F65211 100%)",
      },
      colors:{
        primary:{
          100:"#3BD39D",
          200:"#FAF8F5",
          300:"rgba(140, 153, 166, 0.4)",
          400:"#E9E9E9",
          500:"#D9D9D9",
          600:"rgba(59, 211, 157, 0.6)",
          700:"#666460",
          800:"rgba(140, 153, 166, 0.3)",
          900:"#EEEEEE",

      },
      secondary:{
        100:"#0E2333",
        200:"#0C0E1E",
        300:"#017B9A",
        400:"#20211C",
        500:"#E44126"
        
      }
      },
      fontFamily:{
        pop:" 'Poppins', sans-serif"
      }
      
    },
  },
  plugins: [],
}
