import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/header/header'
import Main from './Components/main/main'
import Footer from './Components/footer/footer'
import SiteHeader from './Components/blog/siteHeader'
import NavHead from './Components/header/navHead'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavHead/>
    {/* <Header/> */}
    {/* <Main/> */}
    {/* <Footer/> */}
    <SiteHeader/>
    </>
  )
}

export default App
