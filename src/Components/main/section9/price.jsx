import React from 'react'
import FullTitle from '../fullTitle/fullTitle'
import Info from '../info'
import BoxProduct from '../boxProduct/BoxProduct'
function Price() {
  return (
    <>
    <section className='max-md:py-15 py-30'>
      <div className="container">
        <div className='text-center max-xl:px-4 px-10'>
         <FullTitle text={Info[7].text} />
          <h3 className='mt-2.5 mb-18.75 text-[25px] max-md:text-22'>برنامه عالی قیمت گذاری</h3>
          <div className='grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-7 justify-center'>
            <BoxProduct/>
            <BoxProduct/>
            <BoxProduct/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Price