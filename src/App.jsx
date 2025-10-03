import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/header/header'
import Main from './Components/main/main'
import Footer from './Components/footer/footer'
import SiteHeader from './Components/blog/siteHeader'
import NavHead from './Components/header/navHead'
import Article from './Components/blog/articleSite/article'
import PaginationSec from './Components/blog/paginationSec/PaginationSec'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavHead/>
    {/* <Header/> */}
    {/* <Main/> */}
    {/* <Footer/> */}
    <SiteHeader/>
    <Article/>
    <PaginationSec/>
    </>
  )
}

export default App
