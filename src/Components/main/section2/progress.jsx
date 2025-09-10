import React from 'react'
import HalfTitle from '../halfTitle/halfTitle'
import Info from '../info'
import ButtonInfo from '../buttonInfo/buttonInfo'
function Progress() {
    return (
        <>
            <section>
                <div className="container">
                    <div className='flex items-center-center'>
                        <div>
                        <HalfTitle text={Info[1].text}/>
                        <h3>برنامه گرت برای همیشه</h3>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            بیشتر بدانید
                        </p>
                        <ButtonInfo/>
                    </div>
                    <div className='bg-progress'>
                        <div>
                            <img src="/public/images/progress-phone.png" alt="progress" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Progress