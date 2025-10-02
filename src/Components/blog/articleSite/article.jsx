import React from 'react'

function Article() {
  return (
    <>
    <section className='max-md:py-15 py-30'>
      <div className="container flexcenter">
        <article className='p-7.5 mb-7.5 max-w-285 rounded-[3px] shadow-[0_0_20px_0_rgba(0,0,0,0.1)]'>
          <div className='flex max-lg:flex-col max-lg:items-center'>
            <div className='max-lg:ml-0 ml-15 rounded-[3px]'>
            <img src="/images/blog/sticky-image.jpg" className='w-full' alt="article-blog" />
          </div>

          <div className='lg:max-w-106'>
            <div className='my-5 flex justify-between'>
              <span className='text-neutral-800 hover:text-indigo-400 transition-colors duration-400 cursor-pointer'>مردم</span>
              <span className='text-slate-400'>2 فروردین 1399</span>
            </div>

            <h4 className='max-sm:text-lg text-xl font-medium mb-5 hover:text-indigo-400 transition-colors duration-400'>
              <a href="#">5 نکته برای کسانی که باید فضای بیشتری در کمد خود ایجاد کنند</a>
            </h4>

            <p className='mb-2.5 text-slate-400'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>

            <a href="#" className='pt-2.5 flex items-center gap-2 font-bold text-sm text-indigo-400'>
              <span>مشاهده مقاله</span>
              <span className='lnr lnr-arrow-left'></span>
            </a>
          </div>
          </div>
        </article>
      </div>
    </section>
    </>
  )
}

export default Article