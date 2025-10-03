import React, { useEffect, useState } from 'react'
import BoxBlog from '../articleSite/boxBlog/BoxBlog'
import InfoBoxBlog from '../articleSite/boxBlog/InfoBoxBlog'
import './Pagination.css'
function PaginationSec() {
    const [currnetPage, setCurrentPage] = useState(1)
    const [pagination, setPagination] = useState([])

    let pageSize = 3
    let pageNumber

    useEffect(()=> {
        let endIndex = pageSize * currnetPage
        let firstIndex = endIndex - pageSize
        let allPage = InfoBoxBlog.slice(firstIndex, endIndex)
        setPagination(allPage)
    }, [currnetPage])

    let pageCount = Math.ceil(InfoBoxBlog.length / pageSize)
    pageNumber = Array.from(Array(pageCount).keys())

    const changePage = (newPage) => {
        setCurrentPage(newPage)
        let endIndex = pageSize * newPage
        let firstIndex = endIndex - pageSize
        let allPage = InfoBoxBlog.slice(firstIndex, endIndex)
        setPagination(allPage)
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-5 px-5'>
                        {pagination.map(item => (
                            <BoxBlog
                                key={item.id}
                                img={item.img}
                            />
                        ))}
                    </div>

                    <div className='flexcenter'>
                        <nav className='text-center my-5 p-5 shadow-[0_0_15px_0_rgba(0,0,0,0.1)] flex items-center gap-3'>

                        <button href="#" disabled={currnetPage === 1} className={`size-10 flexcenter rounded-[50%] inline-block hover:text-indigo-700 hover:bg-indigo-50`} onClick={()=> changePage(currnetPage - 1)}>
                            <span className='lnr lnr-chevron-right'></span>
                        </button>
                        {pageNumber.map(item => (
                            <button href="#" className={`${item + 1 === currnetPage ? 'active' : ''} size-10 flexcenter rounded-[50%] inline-block hover:text-indigo-700 hover:bg-indigo-50`} onClick={()=> changePage(item + 1)}>
                                <span className=''>{item + 1}</span>
                            </button>
                        ))}
                        <button href="#" disabled={currnetPage === pageCount} className={`size-10 flexcenter rounded-[50%] inline-block hover:text-indigo-700 hover:bg-indigo-50`} onClick={()=> changePage(currnetPage + 1)}>
                            <span className='lnr lnr-chevron-left'></span>
                        </button>
                    </nav>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PaginationSec