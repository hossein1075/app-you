import { useEffect, useState } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import router from './routes'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollToTopButton from './Components/ScrollToTopButton'
import Preloader from './Components/preloader'
function App() {
  const element = useRoutes(router)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {

    const timer = setTimeout(()=> {
      setLoading(false)
    }, 500)

    return ()=> clearTimeout(timer)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true
    })
  }, [])

  return (
    <>
    {loading ? (
      <Preloader/>
    ):(
    <>
    {element}
    <ScrollToTopButton/>
    </>
    )}
    </>
  )
}

export default App
