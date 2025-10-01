import React from 'react'

function CopyRightSec() {
  return (
    <>
    <section className='py-4 border-t-1 border-blue-500 bg-indigo-50'>
        <div className="container">
          <div className='flex max-lg:flex-col max-lg:items-center max-lg:gap-1.5 justify-evenly text-slate-400'>
              <p>
                کپی رایت ©2025 تمامی حقوق محفوظ است 
                <span className='lnr lnr-heart inline-block mx-0.5'></span>
                 برای <span className='text-neutral-800 hover:text-indigo-400 transition-colors duration-400 cursor-pointer'>ملیکا خلیلیان</span>
            </p>
            <ul className='flex max-sm:flex-wrap max-sm:justify-center *:hover:text-indigo-400 *:transition-colors *:duration-400'>
                <li>
                    <a href="#" className='p-2.5 max-sm:p-0.5'>درباره ی ما</a>
                </li>
                <li>
                    <a href="#" className='p-2.5 max-sm:p-0.5'>خدمات</a>
                </li>
                <li>
                    <a href="#" className='p-2.5 max-sm:p-0.5'>ویژگی ها</a>
                </li>
                <li>
                    <a href="#" className='p-2.5 max-sm:p-0.5'>قیمت</a>
                </li>
                <li>
                    <a href="#" className='p-2.5 max-sm:p-0.5'>نظرات</a>
                </li>
                <li>
                    <a href="#" className='p-2.5 max-sm:p-0.5'>تماس با ما</a>
                </li>
            </ul>
          </div>
        </div>
    </section>
    </>
  )
}

export default CopyRightSec