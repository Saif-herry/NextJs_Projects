import { useRouter } from 'next/router';
import React from 'react'

const PageNo = () => {
  const router = useRouter()
  console.log(router)
  const PageNumber = router.query.pageNo;
  console.log(PageNumber)
  return <div>My blog {PageNumber} content</div>
}

export default PageNo
