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
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav className='flex h-12 justify-between shadow-md items-center px-4'>
            <Link href="/" className='text-lg font-bold'>
               amazon
            </Link>
            <div>
              <Link href="/cart" className='p-2'>Cart</Link>
              <Link href="/login" className='p-2'>Login</Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex h-10 justify-center items-center shadow-inner'>Copyright @ 2023 Amazon</footer>
      </div>
    </>
  )
}
