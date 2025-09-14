import React from 'react'
import HalfTitle from '../main/halfTitle/halfTitle'
import ButtonInfo from '../main/buttonInfo/buttonInfo'
import Info from '../main/info'
import VideoJsSec from '../VideoJs'
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
        <section>
            <div className="container">
                <div className='flex gap-20'>
                    {/* video */}
                    <div className='flex-1 w-full bg-video flexcenter'>
                        <div className='w-138'>
                            <VideoJsSec options={videoOptions}/>
                        </div>
                    </div>
                    {/* content */}
                    <div className='flex-1 max-w-138 py-15'>
                        <HalfTitle text={Info[2].text} className='mb-3.75' />
                        <h3 className='text-neutral-700 max-md:text-[22px] text-[25px] pt-2.5 pb-3.75'>برنامه گرت برای همیشه</h3>
                        <p className='max-md:text-sm text-slate-400 pt-5 pb-12.5 max-w-138'>
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