import React from 'react'
import './halfTitle.css'

function HalfTitle(props) {
  let color = props.color
  return (
    <>
     <h5 className={`title_sec2 relative inline-block tracking-[1.5px] font-semibold text-sm/[1.4rem] ${color ? color : 'text-slate-400'} mb-3.75`}>
       {props.text}
    </h5>
    </>
  )
}

export default HalfTitle