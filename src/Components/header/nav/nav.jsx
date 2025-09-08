import React, { useEffect, useState } from 'react'

function Nav() {
    const [scroll, setScroll] = useState(false)

    useEffect(()=> {
        const scrollHandler = ()=> {
            setScroll(window.scrollY > 50)
        }

        window.addEventListener('scroll', scrollHandler)
        return ()=> window.removeEventListener('scroll', scrollHandler)
    }, [])
    return (
        <>
            <nav className={`fixed top-0 right-0 left-0 max-mg:hidden py-5 px-3.75 flex items-center justify-between z-10 ${scroll ? 'bg-gradient-to-r from-grandiant-200 to-grandiant-100': 'bg-inherit'}`}>
                <div className='w-43'>
                    <img src="./public/icons/logo.png" className='w-full' alt="" />
                </div>

                <ul className='flex text-white max-lg:*:mx-2 *:mx-3.75'>
                    <li>
                        <a href="#" className='inline-block border-b-2 border-transparent border-white transition-all hover:bg-white/70 font-medium px-0.5 leading-5 py-2.5'>خانه</a>
                    </li>
                    <li>
                        <a href="#" className='inline-block border-b-2 border-transparent hover:border-white transition-all hover:bg-white/70 font-medium px-0.5 leading-5 py-2.5'>درباره ی ما</a>
                    </li>
                    <li>
                        <a href="#" className='inline-block border-b-2 border-transparent hover:border-white transition-all hover:bg-white/70 font-medium px-0.5 leading-5 py-2.5'>ویژگی ها</a>
                    </li>
                    <li>
                        <a href="#" className='inline-block border-b-2 border-transparent hover:border-white transition-all hover:bg-white/70 font-medium px-0.5 leading-5 py-2.5'>گالری</a>
                    </li>
                    <li>
                        <a href="#" className='inline-block border-b-2 border-transparent hover:border-white transition-all hover:bg-white/70 font-medium px-0.5 leading-5 py-2.5'>قیمت</a>
                    </li>
                    <li>
                        <a href="#" className='inline-block border-b-2 border-transparent hover:border-white transition-all hover:bg-white/70 font-medium px-0.5 leading-5 py-2.5'>سوالات پر تکرار</a>
                    </li>
                    <li>
                        <a href="#" className='inline-block border-b-2 border-transparent hover:border-white transition-all hover:bg-white/70 font-medium px-0.5 leading-5 py-2.5'>وبلاگ</a>
                    </li>
                    <li>
                        <a href="#" className='inline-block border-b-2 border-transparent hover:border-white transition-all hover:bg-white/70 font-medium px-0.5 leading-5 py-2.5'>تماس با ما</a>
                    </li>
                </ul>
                <a href="#" className='inline-block text-white bg-white/30 tracking-[1.5px] py-2.5 px-10 rounded-[50px] font-bold text-sm hover:bg-white hover:text-highBlue'>ثبت نام</a>
            </nav>
        </>
    )
}

export default Nav