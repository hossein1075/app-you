import React from 'react'
import About from './section1/about'
import Progress from './section2/progress'
import VideoSec from './section3/VideoSec'
import Feature from './section4/feature'
import Testimonial from './section5/testimonial'
import Gallery from './section6/gallery'
import Use from './section7/use'
import Download from './section8/download'
import Price from './section9/price'
import Questions from './section10/questions'
function Main() {
  return (
    <>
    <main className=''>
    <About/>
    <Progress/>
    <VideoSec/>
    <Feature/>
    <Testimonial/>
    <Gallery/>
    <Use/>
    <Download/>
    <Price/>
    <Questions/>
    </main>
    </>
  )
}

export default Main