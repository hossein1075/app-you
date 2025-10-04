import React from 'react'
import InfoBoxFooter from '../infoBox'
import FooterBox from '../footerBox/FooterBox'
import FullTitle from '../../main/fullTitle/fullTitle'
import Info from '../../main/info'
function Detail() {
    return (
        <>
            <section id='contact' className='max-md:py-15 py-30'>
                    <div className='text-center'>
                        <FullTitle text={Info[9].text} />
                        <h3 className='mt-2.5 mb-18.75 text-[25px] max-md:text-22'>ما را با جزئیات زیر پیدا کنید</h3>
                    </div>
                    <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 justify-between'>
                        {InfoBoxFooter.map(item => (
                            <FooterBox
                                key={item.id}
                                icon={item.icon}
                                title={item.title}
                                text={item.text}
                            />
                        ))}
                    </div>
                
            </section>
        </>
    )
}

export default Detail