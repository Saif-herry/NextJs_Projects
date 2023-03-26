import React from 'react'
import { useRouter } from 'next/router'

const PageNo = () => {
    const router = useRouter()
    const pageNumber = router.query.PageNo;
  return (
    <div>
      My blog {pageNumber} content
    </div>
  )
}

export default PageNo
