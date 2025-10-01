import React from 'react'

function FooterBox({icon, title, text}) {
    return (
        <>
            <a href="#">
                <div className='text-center flex flex-col items-center'>
                    <div className='group mb-7.5 size-21 rounded-full bg-gradient-to-tr from-grandiant-200 to-grandiant-100 flexcenter'>
                        <div className='size-18.75 text-center border-2 flex items-center justify-center border-white text-xl group-hover:bg-white *:group-hover:text-blue-500 rounded-full transition-colors duration-200'>
                            <span className={`${icon} text-center text-white`}></span>
                        </div>
                    </div>
                    <div className='mb-2.5 text-slate-400 flex flex-col'>
                        <span>{title}</span>
                        <span>{text}</span>
                    </div>
                </div>
            </a>
        </>
    )
}

export default FooterBox