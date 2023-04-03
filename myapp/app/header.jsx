import Link from 'next/link'
import React from 'react'
import "../styles/globals.css"
import Searchbar from './Components/Clients/Searchbar'
const header = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">Men Page</Link>
      <Link href="/about/founder">Women Page</Link>
      <Searchbar/>
    </nav>
  )
}

export default header
