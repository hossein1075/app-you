import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useRoutes } from 'react-router-dom'
import router from './routes'
function App() {
  const [count, setCount] = useState(0)
  const element = useRoutes(router)

  return (
    <>
    {element}
    </>
  )
}

export default App
