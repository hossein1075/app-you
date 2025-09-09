import React from 'react'
import FullTitle from '../fullTitle/fullTitle'
import Info from '../info'

function About() {
  return (
    <>
    <section className='max-md:my-15 my-30 text-center m-auto'>
     <div className="container">
         <img src="/public/images/about-logo.png" className='m-auto mb-5' alt="about logo" />
        <FullTitle text={Info[0].text}/>
        <h3 className='text-blue-500 m-auto max-md:text-22 text-25 max-w-194 mt-7.5 mb-3.75'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
        </h3>
        <p className='mb-2.5 pt-5 text-slate-400 max-w-236 m-auto'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
        </p>
     </div>
    </section>
    </>
  )
}

export default About