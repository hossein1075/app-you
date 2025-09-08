import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/header/header'
import Main from './Components/main/main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Main/>
    </>
  )
}

export default App
