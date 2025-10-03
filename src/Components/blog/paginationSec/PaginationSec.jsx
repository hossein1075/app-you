import React, { useEffect, useState } from 'react'
import BoxBlog from '../articleSite/boxBlog/BoxBlog'
import InfoBoxBlog from '../articleSite/boxBlog/InfoBoxBlog'
import './Pagination.css'
function PaginationSec() {
  

    return (
        <>
            <section>
                <div className="container">
                    <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-5 px-5'>
                        {InfoBoxBlog.map(item => (
                            <BoxBlog
                                key={item.id}
                                img={item.img}
                            />
                        ))}
                    </div>

                  
                </div>
            </section>
        </>
    )
}

export default PaginationSec