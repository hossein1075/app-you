import React, { useRef } from 'react'
import FullTitle from '../fullTitle/fullTitle'
import Info from '../info'
import ImageSlide from '../infoSlide'
import Slide from '../slide/Slide'
import './testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
function Testimonial() {
  const swiperRef = useRef(null);
  return (
    <>
      <section className='max-md:py-15 py-18'>
        <div className="container mx-auto text-center">
          <FullTitle text={Info[4].text} />
          <h3 className='mt-2.5 mb-18.75 text-[25px] max-md:text-22'>ویژگی های پر قدرت مثل همیشه</h3>

          <div className=' flex items-center mt-10'>
            {/* دکمه قبلی */}
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className='max-lg:hidden size-17.5 shrink-0 rounded-full bg-white z-20 flex justify-center items-center shadow-[0_0_30px_0_rgba(0,0,0,0.1)] text-blue-500 hover:bg-gradient-to-tr from-grandiant-200 to-grandiant-100 hover:text-white transition-colors duration-500 cursor-pointer'
            >
              <i className="lnr lnr-chevron-right text-xl leading-none"></i>
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}

              slidesPerView={3}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="mx-4 flex-1"
              breakpoints={{
                200: { slidesPerView: 1 },
                560: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {ImageSlide.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <Slide img={item.img} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* دکمه بعدی */}
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className='max-lg:hidden size-17.5 shrink-0 rounded-full bg-white z-20 flex justify-center items-center shadow-[0_0_30px_0_rgba(0,0,0,0.1)] text-blue-500 hover:bg-gradient-to-tr from-grandiant-200 to-grandiant-100 hover:text-white transition-colors duration-500 cursor-pointer'
            >
              <i className="lnr lnr-chevron-left text-xl leading-none"></i>
            </div>
          </div>
          <div className='flexcenter'>
            {/* دکمه قبلی */}
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className='size-17.5 mx-3.75 mb-3.75 mt-7.5 shrink-0 rounded-full bg-white z-20 max-lg:flex hidden justify-center items-center shadow-[0_0_30px_0_rgba(0,0,0,0.1)] text-blue-500 hover:bg-gradient-to-tr from-grandiant-200 to-grandiant-100 hover:text-white transition-colors duration-500 cursor-pointer'
            >
              <i className="lnr lnr-chevron-right text-xl leading-none"></i>
            </div>
            {/* دکمه بعدی */}
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className='size-17.5 mx-3.75 mb-3.75 mt-7.5 shrink-0 rounded-full bg-white z-20 max-lg:flex hidden justify-center items-center shadow-[0_0_30px_0_rgba(0,0,0,0.1)] text-blue-500 hover:bg-gradient-to-tr from-grandiant-200 to-grandiant-100 hover:text-white transition-colors duration-500 cursor-pointer'
            >
              <i className="lnr lnr-chevron-left text-xl leading-none"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial