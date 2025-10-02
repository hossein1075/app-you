import React from 'react'
import './SiteHeader.css'
function SiteHeader() {
  return (
    <>
    <section className='pt-10 bg-gradient-to-r from-grandiant-200/95 to-grandiant-100/95'>
        <div className="container">
            <div className='pt-45 pb-30 flex flex-col items-center text-white'>
                <h1 className='font-Av max-md:text-4-5xl text-6xl mb-3.75 leading-[1.4rem]'>آخرین وبلاگ</h1>
                <ul className='flex mt-2.5 mb-5 gap-7'>
                    <li>
                        <a href="#">خانه</a>
                    </li>
                    <li>
                        <a href="#" className='blog_link relative'>وبلاگ</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default SiteHeader