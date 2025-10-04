import React from 'react'
import HalfTitle from '../halfTitle/halfTitle'
import Info from '../info'
import ButtonInfo from '../buttonInfo/buttonInfo'
function Progress() {
    return (
        <>
            <section className='bg-indigo-50 mt-22.5 '>
                <div className="container">
                    <div className='flex justify-between'>
                        <div data-aos="fade-up" className='max-w-138 max-lg:py-15 py-30'>
                            <HalfTitle data-aos="fade-up" text={Info[1].text} className='mb-3.75'/>
                            <h3 data-aos="fade-up" className='text-neutral-700 max-md:text-[22px] text-[25px] pt-2.5 pb-3.75'>برنامه گرت برای همیشه</h3>
                            <p data-aos="fade-up" className='max-md:text-sm text-slate-400 pt-5 pb-12.5 max-w-138'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                            <ButtonInfo data-aos="fade-up" />
                        </div>
                        <div className='relative max-w-147'>
                                <img src="public/images/progress-bg.jpg" className=' max-lg:hidden max-xl:invisible visible w-full h-full object-cover' alt="progress" />
                            <img src="/public/images/progress-phone.png" className='max-lg:hidden block absolute top-1/2 -translate-y-[45%] left-0 right-4' alt="progress-phone" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Progress