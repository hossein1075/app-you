import React, { useState } from 'react'
import HalfTitle from '../halfTitle/halfTitle'
import ButtonInfo from '../buttonInfo/buttonInfo'
import Info from '../info'
import gallerySImage from '../slide/gallerySlide'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
function Gallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <section className='text-white bg-gradient-to-tr from-grandiant-200 to-grandiant-100 max-md:py-15 py-30'>
                <div className="container">
                    <div className='grid max-md:grid-cols-1 grid-cols-2 gap-x-15'>
                        <div className='w-full max-md:max-w-100 mx-auto relative'>
                            <Swiper
                                modules={[Navigation, Autoplay, Thumbs]}
                                thumbs={{ swiper: thumbsSwiper }}
                                slidesPerView={1}
                                spaceBetween={8}
                                speed={1000}
                                loop={true}
                                dir="ltr"
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}

                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                breakpoints={{

                                    768: { slidesPerView: 2 },
                                    1280: { slidesPerView: 2 },
                                    1536: { slidesPerView: 4 },
                                }}
                            >
                                {gallerySImage.map((item, idx) => (

                                    <SwiperSlide key={idx} className=''>
                                        <div className='max-md:flex justify-center'>
                                            <img src={item.img} alt={`gallery-${item.id}`} className="" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                slidesPerView={4}
                                spaceBetween={10}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[Thumbs, Navigation]}
                                className="thumbsSwiper mt-4"
                            >
                                {gallerySImage.map((item, idx) => (
                                    <SwiperSlide key={idx} className="cursor-pointer">
                                        <img src={item.img} alt={`thumb-${item.id}`} className="w-full h-20 object-cover rounded max-sm:hidden" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                        <div className='w-full md:w-[360px] mt-6 md:mt-0'>
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