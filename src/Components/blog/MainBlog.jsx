import React from 'react'
import SiteHeader from './siteHeader'
import Article from './articleSite/article'
import PaginationSec from './paginationSec/PaginationSec'
function MainBlog() {
  return (
    <>
    <SiteHeader/>
    <Article/>
    <PaginationSec/>
    </>
  )
}

export default MainBlog