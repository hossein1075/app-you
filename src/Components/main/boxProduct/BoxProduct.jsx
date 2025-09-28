import React from 'react'

function BoxProduct() {
    return (
        <>
            <div className='group rounded-sm text-center shadow-[0_0_15px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_-15px_#4d43c6] transition-colors duration-500'>
                <div className='flex flex-col p-10 text-indigo-400 bg-indigo-50 w-full group-hover:bg-gradient-to-tr from-grandiant-200 to-grandiant-100 group-hover:text-white transition-colors duration-500'>
                    <span className='lnr lnr-diamond inline-block text-6xl mb-2.5'></span>
                    <span className='inline-block leading-[1.4rem] font-bold text-xl mb-3.75'>متوسط</span>
                </div>
                <div>
                    <ul className='text-slate-400 p-10'>
                        <li>نصب آسان</li>
                        <li>پشتیبانی نامحدود</li>
                        <li>همیشه رایگان</li>
                    </ul>
                    <div className='text-indigo-400 mb-10 text-xl flexcenter flex-wrap gap-2'>
                        <span className='text-base -mt-5'>ماهیانه</span>
                        <span className='text-[46px]'>2000</span>
                        <span className='text-[26px] -mb-2'>/ تومان</span>
                    </div>
                </div>
                <div className='mb-10'>
                    <a href="#" className="inline-block mb-10 rounded-[50px] p-[2px] 
                       bg-gradient-to-r from-grandiant-200 to-grandiant-100">
                        <span className="block rounded-[50px] bg-white px-12 py-3 
                   text-indigo-400 font-bold text-sm 
                   hover:bg-gradient-to-r from-grandiant-200 to-grandiant-100 
                   hover:text-white transition-all duration-400">
                            خرید
                        </span>
                    </a>

                </div>
            </div>
        </>
    )
}

export default BoxProduct