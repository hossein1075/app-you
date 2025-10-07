import React, { useEffect, useState } from 'react'

function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {

       const handlerScrollToTop = () => {
         if(window.scrollY > 70) {
            setVisible(true)
        } else {
            setVisible(false)
        }
       }

        window.addEventListener('scroll', handlerScrollToTop)
        return () => {
        window.removeEventListener('scroll', handlerScrollToTop)
        }
    }, [])

    const scrollToTop = ()=> {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
  return (
    <>
  {visible && (
      <button onClick={scrollToTop} className='size-15 fixed bottom-1 left-1 rounded-sm cursor-pointer bg-white z-50 text-center text-3xl text-blue-500'>
        <span className='lnr lnr-arrow-up'></span>
    </button>
  )}
    </>
  )
}

export default ScrollToTopButton