import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";

function NavMobile() {
    const [open, setOpen] = useState(false)

    useEffect(()=> {
        const sizeMenu = ()=> {
            if(window.innerWidth > 965) {
                setOpen(false)
            }
        }

        window.addEventListener('resize', sizeMenu)
        return ()=> window.removeEventListener('resize', sizeMenu)
    },[])
    return (
        <>
            <nav className='fixed z-40 top-0 right-0 left-0 hidden max-mg:flex py-5 px-3.75 items-center justify-between bg-gradient-to-r bg-gradient-to-br from-grandiant-200 to-grandiant-100'>
                <div className='w-43'>
                    <img src="./public/icons/logo.png" className='w-full' alt="" />
                </div>

                <div className='border-white border w-11.25 h-8.5 flexcenter'>
                    <a href="#" onClick={()=> setOpen(!open)}>
                        <FaBars className='text-white w-15' size={26} />
                    </a>
                </div>
            </nav>
                <div className={`absolute left-0 right-0  text-white bg-gradient-to-tr from-grandiant-200 to-grandiant-100  transition-transform  duration-700 ease-in-out ${open ?"translate-y-[-3rem]" : "-translate-y-[590px]"}`}>
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