import React from 'react'

function BoxBlog({img}) {
    return (
        <article className='p-7.5 mb-7.5 rounded-[3px] shadow-[0_0_20px_0_rgba(0,0,0,0.1)]'>
            <div className='flex flex-col items-center'>
                <div className='rounded-[3px]'>
                    <img src={img} className='w-full' alt="article-blog" />
                </div>

                <div className=''>
                    <div className='my-5 flex justify-between'>
                        <span className='text-neutral-800 hover:text-indigo-400 transition-colors duration-400 cursor-pointer'>مردم</span>
                        <span className='text-slate-400'>2 فروردین 1399</span>
                    </div>

                    <h4 className='max-sm:text-lg text-xl font-medium mb-5 hover:text-indigo-400 transition-colors duration-400'>
                        <a href="#">5 نکته برای کسانی که باید فضای بیشتری در کمد خود ایجاد کنند</a>
                    </h4>

                    <p className='mb-2.5 text-slate-400'>
                        روش هایی برای بهتر به نظر رسیدن
                    </p>

                    <a href="#" className='pt-2.5 flex items-center gap-2 font-bold text-sm text-indigo-400'>
                        <span>مشاهده مقاله</span>
                        <span className='lnr lnr-arrow-left'></span>
                    </a>
                </div>
            </div>
        </article>
    )
}

export default BoxBlog