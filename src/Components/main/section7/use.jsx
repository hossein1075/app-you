import React from 'react'
import Info from '../info'
import ButtonInfo from '../buttonInfo/buttonInfo'
import HalfTitle from '../halfTitle/halfTitle'
import Boxicon from '../boxIcon/Boxicon'
import Icons from '../iconList'
function Use() {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='flex'>
                        <div className='max-w-138'>
                            <HalfTitle text={Info[2].text} className='mb-3.75' />
                            <h3 className='text-neutral-700 max-md:text-[22px] text-[25px] pt-2.5 pb-3.75'>برنامه گرت برای همیشه</h3>
                            <p className='max-md:text-sm text-slate-400 pt-5 pb-12.5 max-w-114 max-xl:max-w-full'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                            <ButtonInfo />
                        </div>
                        <div>
                            <Boxicon icon={Icons[3].icon} title={Icons[3].title} color = { 'text-slate-400'}/>
                            <Boxicon icon={Icons[4].icon} title={Icons[4].title} color = { 'text-slate-400'}/>
                            <Boxicon icon={Icons[5].icon} title={Icons[5].title} color = { 'text-slate-400'}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Use 