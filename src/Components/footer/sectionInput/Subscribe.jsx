import React from 'react'

function Subscribe() {
  return (
    <>
      <section className='max-md:py-15 py-30 bg-subscribe'>
        <div className="flex justify-center">
          <div className='max-w-187 w-full bg-white max-sm:p-3 p-15 rounded-[5px] text-center'>
            <h3 className='text-blue-500 max-sm:text-lg max-md:text-[22px] text-[25px] leading-[1.4rem] mb-8.75'>برای ویژگی های بیشتر در خبرنامه ما عضو شوید</h3>
            <form action="#" className='max-md:flex max-md:flex-col items-center'>
              <div className='border-1 border-solid rounded-full border-blue-500 *:py-3.75 w-full flex justify-between mb-5'>
                <input type="text" placeholder='ایمیل خود را وارد کنید' className='w-full max-sm:text-xs pr-3.75 outline-0 border-0 placeholder-slate-400 text-blue-500'/>
                <button type='submit' className='flex items-center max-md:hidden gap-3 h-full rounded-full cursor-pointer px-7.5 text-white bg-gradient-to-tr from-grandiant-200 to-grandiant-100'>
                  <span className='lnr lnr-location'></span>
                  <span> عضویت</span>
                </button>
              </div>
              <button type='submit' className='max-md:flex hidden items-center gap-3 h-full rounded-full max-sm:py-1.25 max-sm:px-6 py-2 px-7.5 text-white bg-gradient-to-tr from-grandiant-200 to-grandiant-100'>
                  <span className='lnr lnr-location'></span>
                  <span> عضویت</span>
                </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Subscribe