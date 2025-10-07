import React from 'react'
import HalfTitle from '../halfTitle/halfTitle'
import ButtonInfo from '../buttonInfo/buttonInfo'
import Info from '../info'
import VideoJsSec from '../../VideoJs'
function VideoSec() {

    let videoOptions = {
        controls: true,
        responsive: true,
        fluid: true,
        autoplay: false,
        poster: "/images/video-image.jpg",
        
        sources: [
            {
                src: "/video/film.mp4",
                type: "video/mp4",
            },
        ],
    }
    return (
        <section className='py-30'>
            <div className="container">
                <div className='flex gap-x-15 max-lg:flex-col'>
                    {/* video */}
                    <div className='flex-1 w-full bg-video flexcenter max-xl:justify-start'>
                        <div className='w-138 max-xl:w-full'>
                            <VideoJsSec options={videoOptions}/>
                        </div>
                    </div>
                    {/* content */}
                    <div data-aos="fade-up" className='flex-1 max-w-138 py-15'>
                        <HalfTitle text={Info[2].text} className='mb-3.75' />
                        <h3 data-aos="fade-up" className='text-neutral-700 max-md:text-[22px] text-[25px] pt-2.5 pb-3.75'>برنامه گرت برای همیشه</h3>
                        <p data-aos="fade-up" className='max-md:text-sm text-slate-400 pt-5 pb-12.5 max-w-114 max-xl:max-w-full'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                        <ButtonInfo />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSec