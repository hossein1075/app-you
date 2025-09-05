import React from 'react'
import Nav from './nav/nav'
import NavMobile from './navMobile/NavMobile'
import { HiOutlineDownload } from "react-icons/hi";

export default function Header() {
  return (
    <>
      <header>
        <Nav />
        <NavMobile />
        <div className='container'>
          <div className='flex items-center mt-32 text-white'>
            <div className='w-101 h-142 max-lg:hidden'>
              <img src="./public/images/header-mobile.png" className='w-full' alt="app weather" />
            </div>

            <div>
              <h1 className='max-w-184 font-Av text-6xl max-md:text-4-5xl font-medium leading-5.6'>کارهای شگفت انگیز خود را از طریق اپ یو شروع کنید.</h1>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
              <button>
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
