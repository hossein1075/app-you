import React from 'react'
import Nav from './nav/nav'
import NavMobile from './navMobile/NavMobile'
import { HiOutlineDownload } from "react-icons/hi";

export default function Header() {
  return (
    <>
      <header className='pt-10 mb-25 relative bg-home bg-cover bg-center max-md:min-h-128 min-h-168 bg-gradient-to-tr from-grandiant-200 to-grandiant-100 '>
        
  {/* لایه اورلی گرادینت */}
  <div className="absolute inset-0 bg-gradient-to-tr from-grandiant-200/80 to-grandiant-100/80"></div>
  
  {/* محتوای اصلی */}
        <div className='container'>
          <div className='flex gap-5 max-lg:mt-10 mt-20 text-white'>
            <div data-aos="fade-up" className='w-101 h-142 max-lg:hidden z-10'>
              <img src="./public/images/header-mobile.png" className='w-full z-10' alt="app weather" />
            </div>

            <div data-aos="fade-up" className='relative max-md:mt-5 mt-20'>
              <h1 data-aos="fade-up" className='max-w-184 font-Av text-6xl max-md:text-4-5xl font-medium leading-5.6 max-lg:5 mb-2.5'>کارهای شگفت انگیز خود را از طریق اپ یو شروع کنید.</h1>
              <p data-aos="fade-up" className='max-w-163 max-md:my-6 mt-5 mb-2.5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
              <button data-aos="fade-up" className='mt-5'>
                <a href="#" className='flex items-center gap-2 max-md:py-2 py-3 px-7.5 text-highBlue bg-white rounded-[50px] font-bold text-sm hover:text-white hover:bg-gradient-to-tr from-grandiant-200 to-grandiant-100 duration-300 delay-75'>
                <HiOutlineDownload />
                دانلود برنامه
              </a>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
