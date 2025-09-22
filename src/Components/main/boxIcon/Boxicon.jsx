import React from 'react'

function Boxicon() {
  return (
    <>
    <div className='flex bg-sky-300 gap-4'>
        <span className='size-17.5 rounded-full bg-white flex justify-center items-center text-blue-500  hover:bg-gradient-to-tr from-grandiant-200 to-grandiant-100 hover:text-white  transition-colors duration-500'>
            <i className="lnr lnr-rocket text-xl"></i>
        </span>
        <div className='text-white'>
            <h4 className='mb-2.5'>سریع و قدرتمند</h4>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
    </div>
    </>
  )
}

export default Boxicon