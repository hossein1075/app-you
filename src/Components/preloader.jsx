import React from 'react'

function Preloader() {
  return (
    <>
    <div className='bg-white z-50 fixed inset-0 flexcenter h-full'>
        
        <span className='animate-mymove flexcenter bg-gradient-to-tr from-grandiant-200 to-grandiant-100 rounded-full size-15 absolute top-0 bottom-0 left-0 right-0 text-center text-white text-2xl m-auto '>
        <i className='lnr lnr-sun'></i>
        </span>
    </div>
    </>
  )
}

export default Preloader