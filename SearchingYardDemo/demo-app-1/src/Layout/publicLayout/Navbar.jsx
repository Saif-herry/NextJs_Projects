import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <main className=' border border-pink-300 bg-yellow-200 '>
        <div className={'w-full flex items-center gap-10 h-12  px-4'}>
          <Link href='/home'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/content'>Content</Link>
        </div>
      </main>
    </>
  )
}

export default Navbar
