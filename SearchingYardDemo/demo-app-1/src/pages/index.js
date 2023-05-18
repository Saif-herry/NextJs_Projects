import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { PublicLayout } from '@/Layout'

// const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <Head>
        <title>project</title>
      </Head>
      <PublicLayout title="Home">
      <div>
        <h1>Hello nextjs</h1>
      </div>
      </PublicLayout>
    </>
  )
}
