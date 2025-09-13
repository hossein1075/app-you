import React from 'react'
import HalfTitle from '../main/halfTitle/halfTitle'
import ButtonInfo from '../main/buttonInfo/buttonInfo'
import Info from '../main/info'
function VideoSec() {
    return (
        <section>
            <div className="container">
                {/* content */}
                <div>
                    {/* video */}
                    <div>سلام چطوری</div>
                    <div>
                        <div className='max-w-138 max-lg:py-15 py-30'>
                            <HalfTitle text={Info[2].text} className='mb-3.75' />
                            <h3 className='text-neutral-700 max-md:text-[22px] text-[25px] pt-2.5 pb-3.75'>برنامه گرت برای همیشه</h3>
                            <p className='max-md:text-sm text-slate-400 pt-5 pb-12.5 max-w-138'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                            <ButtonInfo />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default VideoSec