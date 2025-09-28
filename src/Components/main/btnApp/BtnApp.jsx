import React from 'react'

function BtnApp({icon, title}) {
  return (
    <>
        <a href="#" className='flex items-center max-md:py-2 py-3.25 px-7.5  font-bold bg-white text-indigo-400 text-sm rounded-sm hover:text-white hover:bg-gradient-to-tr from-grandiant-200 to-grandiant-100 transition-colors duration-500'>
            <img src={icon} alt="apple" className='ml-1.25 w-4 h-5'/>
             {title}
        </a>

    </>
  )
}

export default BtnApp