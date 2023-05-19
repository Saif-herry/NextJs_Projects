/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import data from '../../Utils/data'
import Link from 'next/link'

const ProductScreen = () => {
  const { query } = useRouter()
  console.log("query---",query)
  const { id } = query
  console.log("id----",id)
  const product = data.products.find(x => x.id === Number(id))
  console.log("product---",product)
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <Layout title={product.name}>
      <div className='py-2'>
        <Link href='/'><button className=' primary-button1'>Back to Product</button></Link>
      </div>

      <div className='grid md:grid-cols-4 md:gap-12'>
        <div className='card md:col-span-1 place-content-center '>
          <img
            src={product.image}
            alt={product.title}
            width={240}
            height={40}
            className='px-2 mx-4 my-2 '
            
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
        <div className='p-5 card'>
          <div className='flex justify-between mb-2 '>
            <div>Price</div>
            <div>${product.price}</div>
          </div>
          <div className='flex justify-between mb-2'>
            <div>Status</div>
            <div>{product.countInStock > 0 ? 'In Stock' : 'Unavialable'}</div>
          </div>
          <button className='w-full primary-button'>Add to cart</button>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductScreen
