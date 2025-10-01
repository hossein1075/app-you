import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/header/header'
import Main from './Components/main/main'
import Footer from './Components/footer/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App
