import React from 'react'
import BtnApp from '../btnApp/BtnApp'
import InfoBtnApp from '../infoBtnApp'
function Download() {
  return (
    <>
    <section className='mt-17.5 mb-25 max-md:py-15 py-30 text-white bg-download relative'>
        <div className='absolute inset-0 bg-gradient-to-tr from-grandiant-200 to-grandiant-100 opacity-70 z-20'></div>
        <div className="container flex justify-center">
            <div className='flex items-center max-mg:gap-x-0 gap-x-10 mx-auto z-30'>
                <div className='max-mg:hidden'>
                    <img src="/images/download-image.png" className='w-full -mt-57 -mb-80' alt="download" />
                </div>
                <div className=''>
                    <h3 className='mb-8.25 leading-[1.4rem] max-mg:text-2xl text-3xl'>برنامه را دانلود کنید</h3>
                    <p className='max-mg:mb-13 mb-17 max-w-138 max-mg:max-w-full'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                    <div className='flex gap-2.5 flex-wrap'>
                        <BtnApp icon={InfoBtnApp[0].icon} title={InfoBtnApp[0].title}/>
                        <BtnApp icon={InfoBtnApp[1].icon} title={InfoBtnApp[1].title}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Download