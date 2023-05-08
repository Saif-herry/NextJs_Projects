/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import data from '../../Utils/data'
import Link from 'next/link'

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
        <Link href='/'>Back to Product</Link>
      </div>

      <div className='grid md:grid-cols-4 md:gap-12'>
        <div className='card md:col-span-1 place-content-center '>
          <img
            src={product.image}
            alt={product.title}
            width={240}
            height={40}
            className=' px-2 mx-4 my-2'
            
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className='text-lg'>{product.title}</h1>
            </li>
            <li>Discription: {product.description}</li>
            <li>Rating: {product.rating.rate}</li>
          </ul>
        </div>
        <div>
        <div className='card p-5'>
          <div className='mb-2 flex justify-between '>
            <div>Price</div>
            <div>${product.price}</div>
          </div>
          <div className='mb-2 flex justify-between'>
            <div>Status</div>
            <div>{product.countInStock > 0 ? 'In Stock' : 'Unavialable'}</div>
          </div>
          <button className='primary-button w-full'>Add to cart</button>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductScreen
