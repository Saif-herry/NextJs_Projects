/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
const ProductItem = ({ product }) => {
  return (
    <div className='card'>
      <Link href={`/product/${product.title}`}>
        <img
          src={product.image}
          alt={product.name}
          className='rounded shadow'
        />
      </Link>

      <div className='flex flex-col items-center justify-center p-5'>
        <Link href={`/product/${product.title}`}>
          <h2 className='text-lg'>{product.title}</h2>
        </Link>
        <p className='mb-2'>{product.category}</p>
        <p>${product.price}</p>
        <button className='primary-button ' type='button'>
          {' '}
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductItem
