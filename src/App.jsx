import { useEffect, useState } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import router from './routes'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollToTopButton from './Components/ScrollToTopButton'
function App() {
  const element = useRoutes(router)

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true
    })
  }, [])

  return (
    <>
    {element}
    <ScrollToTopButton/>
    </>
  )
}

export default App
