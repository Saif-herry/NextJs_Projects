import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
export default function Layout ({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '-Amazona' : 'Amazon'}</title>
        <meta name='description' content='Ecommerce Website' />
      </Head>
      <div className='flex flex-col justify-between'>
        <header>
          <nav className='flex items-center justify-between h-16 px-4 shadow-md bg-amber-200'>
            <Link href='/' className='text-lg font-bold'>
              amazon
            </Link>
            <div>
              <Link href='/cart' className='p-2'>
                Cart
              </Link>
              <Link href='/login' className='p-2'>
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className='container px-4 m-auto mt-4'>{children}</main>
        <footer className='flex items-center justify-center h-10 shadow-inner'>
          Copyright @ 2023 Amazon
        </footer>
      </div>
    </>
  )
}
