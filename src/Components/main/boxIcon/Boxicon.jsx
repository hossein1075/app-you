import React from 'react'

function Boxicon(props) {
  let color = props.color
  let size = props.size
  return (
    <>
    <div className='flex gap-4 mb-15'>
        <div className='size-17.5 shrink-0 shadow-[0_0_30px_0_rgba(0,0,0,0.2)] rounded-full bg-white flex justify-center items-center text-blue-500  hover:bg-gradient-to-tr from-grandiant-200 to-grandiant-100 hover:text-white  transition-colors duration-500'>
            <i className={`lnr ${props.icon} text-xl leading-none`}></i>
        </div>
        <div className={`${color ? color : 'text-white'}`}>
            <h4 className='mb-2.5'>{props.title}</h4>
            <p className={`${size ? size : 'max-w-65'}`}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
    </div>
    </>
  )
}

export default Boxicon