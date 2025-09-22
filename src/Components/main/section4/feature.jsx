import React from 'react'
import FullTitle from '../fullTitle/fullTitle'
import Info from '../info'
import Boxicon from '../boxIcon/Boxicon'
function Feature() {
  return (
    <>
    <section>
        <div className="container">
        <FullTitle text={Info[3].text}/>
        <h3>ویژگی های پر قدرت مثل همیشه</h3>
        <div>
          <Boxicon/>
          <Boxicon/>
          <Boxicon/>
        </div>
        <div>
            <img src="public/images/feature-image.png" alt="feature" />
        </div>
        <div>
          <Boxicon/>
          <Boxicon/>
          <Boxicon/>
        </div>
        </div>
    </section>
    </>
  )
}

export default Feature