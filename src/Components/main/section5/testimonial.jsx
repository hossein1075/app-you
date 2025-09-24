import React from 'react'
import FullTitle from '../fullTitle/fullTitle'
import Info from '../info'
import ImageSlide from '../infoSlide'
import Slide from '../slide/Slide'
function Testimonial() {
  return (
    <>
      <section>
        <div className="container">
          <div className='mx-auto text-center'>
            <FullTitle text={Info[3].text} />
            <h3 className='mt-2.5 mb-18.75 text-[25px] max-md:text-22'>ویژگی های پر قدرت مثل همیشه</h3>
          </div>

          <div className='flex items-center'>
            <div className='size-17.5 shrink-0 rounded-full bg-white z-20 flex justify-center items-center shadow-[0_0_30px_0_rgba(0,0,0,0.1)] text-blue-500  hover:bg-gradient-to-tr from-grandiant-200 to-grandiant-100 hover:text-white  transition-colors duration-500'>
              <i className="lnr lnr-chevron-right text-xl leading-none"></i>
            </div>
            <div className='grid grid-cols-3'>
              <Slide img={ImageSlide[0].img} />
              <Slide img={ImageSlide[1].img} />
              <Slide img={ImageSlide[2].img} />
            </div>
            <div className='size-17.5 shrink-0 rounded-full bg-white z-20 flex justify-center items-center shadow-[0_0_30px_0_rgba(0,0,0,0.1)] text-blue-500  hover:bg-gradient-to-tr from-grandiant-200 to-grandiant-100 hover:text-white  transition-colors duration-500'>
              <i className="lnr lnr-chevron-left text-xl leading-none"></i>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Testimonial