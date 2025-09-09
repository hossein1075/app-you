import React from 'react'
import './FullTitle.css'
function FullTitle(props) {
  return (
    <>
    
    <h5 className='title_sec relative inline-block tracking-[1.5px] font-semibold text-sm/[1.4rem] text-slate-400 mb-3.75'>
      {props.text}
    </h5>
  
    </>
  )
}

export default FullTitle