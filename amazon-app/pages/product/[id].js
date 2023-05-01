import React from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import data from '../../Utils/data'
import Link from 'next/link'
import Image from 'next/legacy/image'

const ProductScreen = () => {
  const { query } = useRouter()
  console.log(query)
  const { id } = query
  console.log(id)
  const product = data.products.find(x => x.id === Number(id))
  console.log(product)
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <Layout title={product.name}>
      <div className='py-2'>
      <Link href="/">Back to Product</Link>
      </div>

      <div className='md:col-span-2'>
        <Image src={product.image}
        alt={product.title}
        width={640}
        height={640}
        layout="responsive">


        </Image>
      </div>
    </Layout>
  )
}

export default ProductScreen
