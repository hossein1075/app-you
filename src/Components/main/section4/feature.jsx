import React from 'react'
import FullTitle from '../fullTitle/fullTitle'
import Info from '../info'
import Boxicon from '../boxIcon/Boxicon'
import './feature.css'
function Feature() {
  return (
    <>
      <section className='text-white bg-blue-500 pt-20 mb-35.5 max-md:my-0 bg-feature'>
        <div className="container">
          <div className='mx-auto text-center'>
            <FullTitle text={Info[3].text} color={'white'}/>
            <h3 className='mt-2.5 mb-18.75 text-[25px] max-md:text-22'>ویژگی های پر قدرت مثل همیشه</h3>
          </div>
         <div className='flex max-md:flex-col flex-row justify-center'>
           <div className='flex-shrink-0'>
            <Boxicon />
            <Boxicon />
            <Boxicon />
          </div>
          <div className=''>
            <img src="public/images/feature-image.png" className='max-lg:hidden block xl:max-w-90 max-xl:mb-0 -mb-35.5' alt="feature" />
          </div>
          <div className='flex-shrink-0'>
            <Boxicon />
            <Boxicon />
            <Boxicon />
          </div>
         </div>
        </div>
      </section>
    </>
  )
}

export default Feature