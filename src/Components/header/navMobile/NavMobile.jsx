import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";

function NavMobile() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const sizeMenu = () => {
            if (window.innerWidth > 965) {
                setOpen(false)
            }
        }
        const scrolledHandler = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', scrolledHandler)
        window.addEventListener('resize', sizeMenu)
        return () => {
            window.removeEventListener('resize', sizeMenu)
            window.removeEventListener('scroll', scrolledHandler)
        }
    }, [])
    return (
        <>
            <nav className={`fixed z-50 top-0 right-0 left-0 hidden max-mg:flex py-5 px-3.75 items-center justify-between ${scrolled ? 'bg-gradient-to-r from-grandiant-200 to-grandiant-100' : 'bg-gradient-to-r from-grandiant-200/90 to-grandiant-100/90' }`}>
                <div className='w-43'>
                    <img src="./public/icons/logo.png" className='w-full' alt="Logo" />
                </div>

                <div className='border-white border w-11.25 h-8.5 flexcenter'>
                    <button onClick={() => setOpen(!open)}>
                        <FaBars className='text-white w-15' size={26} />
                    </button>
                </div>
            </nav>
            <div className={`fixed top-20 left-0 right-0 z-40 overflow-hidden bg-gradient-to-tr from-grandiant-200 to-grandiant-100 transition-[max-height] duration-700 ease-in-out ${open ? "max-h-screen" : "max-h-0"}`}>
                <ul className='text-center text-white mx-2.5 *:w-full *:pb-3.75 border-t-1 border-white'>
                    <li className='bg-white text-highBlue mt-1.5'>
                        <a href="#" className='inline-block  transition-all  font-medium px-0.5 leading-5 py-2.5'>خانه</a>
                    </li>
                    <li className='hover:bg-white hover:text-highBlue'>
                        <a href="#" className='inline-block transition-all  font-medium px-0.5 leading-5 py-2.5'>درباره ی ما</a>
                    </li>
                    <li className='hover:bg-white hover:text-highBlue'>
                        <a href="#" className='inline-block transition-all  font-medium px-0.5 leading-5 py-2.5'>ویژگی ها</a>
                    </li>
                    <li className='hover:bg-white hover:text-highBlue'>
                        <a href="#" className='inline-block transition-all  font-medium px-0.5 leading-5 py-2.5'>گالری</a>
                    </li>
                    <li className='hover:bg-white hover:text-highBlue'>
                        <a href="#" className='inline-block transition-all  font-medium px-0.5 leading-5 py-2.5'>قیمت</a>
                    </li>
                    <li className='hover:bg-white hover:text-highBlue'>
                        <a href="#" className='inline-block transition-all  font-medium px-0.5 leading-5 py-2.5'>سوالات پر تکرار</a>
                    </li>
                    <li className='hover:bg-white hover:text-highBlue'>
                        <a href="#" className='inline-block transition-all  font-medium px-0.5 leading-5 py-2.5'>وبلاگ</a>
                    </li>
                    <li className='hover:bg-white hover:text-highBlue mb-3.5'>
                        <a href="#" className='inline-block transition-all  font-medium px-0.5 leading-5 py-2.5'>تماس با ما</a>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default NavMobile