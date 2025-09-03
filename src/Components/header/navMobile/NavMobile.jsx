import React from 'react'
import { FaBars } from "react-icons/fa";

function NavMobile() {
  return (
    <>
    <nav className='fixed top-0 right-0 left-0 hidden max-mg:flex py-5 px-3.75 items-center justify-between bg-gradient-to-r bg-gradient-to-br from-grandiant-200 to-grandiant-100'>
        <div className='w-43'>
                    <img src="./public/icons/logo.png" className='w-full' alt="" />
                </div>

                <div className='border-white border w-11.25 h-8.5 flexcenter'>
                    <FaBars className='text-white w-15' size={26}/>
                </div>
    </nav>
   
    </>
  )
}

export default NavMobile