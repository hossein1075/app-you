import React from 'react'
import HalfTitle from '../halfTitle/halfTitle'
import ButtonInfo from '../buttonInfo/buttonInfo'
import Info from '../info'
import gallerySImage from '../slide/gallerySlide'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
function Gallery() {
    return (
        <>
            <section className='text-white bg-gradient-to-tr from-grandiant-200 to-grandiant-100 max-md:py-15 py-30'>
                <div className="container">
                    <div className='max-md:flex-col flex gap-x-15'>
                        <div className='w-200'>
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                slidesPerView={4}
                                loop={true}
                                  dir="ltr"  
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                
                                className=""
                                breakpoints={{
                                    200: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 4 },
                                }}
                            >
                                {gallerySImage.map((item, idx) => (
                                    <SwiperSlide key={idx}>
                                          <img src={item.img} alt={`gallery-${item.id}`} className="w-37"/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className=' max-w-138'>
                            <HalfTitle text={Info[5].text} className='mb-3.75' color={'white'} />
                            <h3 className=' max-md:text-[22px] text-[25px] pt-2.5 pb-3.75'>اسکرین شات 01</h3>
                            <p className='max-md:text-sm pt-5 pb-12.5 max-w-114 max-xl:max-w-full'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                            <ButtonInfo />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery