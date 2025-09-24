import React from 'react'

function Slide(props) {
  return (
    <>
     <div className='relative px-7.5 pb-7.5 pt-13.75 rounded-bl-[5px] shadow-[0_0_30px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_0_rgba(0,0,0,0.1)] mx-3.75'>
            <h4 className='text-blue-500 font-semibold text-xl mb-3.75'>ملیکا خلیلیان</h4>
            <h6 className='text-sm/[1.4rem] mb-3.75 text-slate-400'>کارگردان هنری</h6>
            <p className='text-slate-400 mb-2.5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
            <div className='absolute top-[-40px] right-10px size-20 rounded-full bg-white border-[5px] border-solid border-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)]'>
              <img src={props.img} alt="team" />
            </div>
          </div>
    </>
  )
}

export default Slide