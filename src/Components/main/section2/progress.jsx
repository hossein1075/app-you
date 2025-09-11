import React from 'react'
import HalfTitle from '../halfTitle/halfTitle'
import Info from '../info'
import ButtonInfo from '../buttonInfo/buttonInfo'
function Progress() {
    return (
        <>
            <section>
                <div className="container">
                    <div className='flex items-center justify-between'>
                        <div className='max-w-138'>
                        <HalfTitle text={Info[1].text}/>
                        <h3 className='text-neutral-700 max-md:text-[22px] text-[25px]'>برنامه گرت برای همیشه</h3>
                        <p className='max-md:text-sm text-slate-400'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            بیشتر بدانید
                        </p>
                        <ButtonInfo/>
                    </div>
                    <div className='block max-xl:hidden bg-progress max-w-138'>
                        <div>
                            <img src="/public/images/progress-phone.png" className='max-lg:hidden block' alt="progress" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Progress