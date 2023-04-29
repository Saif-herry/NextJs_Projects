import React from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import data from '../../Utils/data'

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
      <h1>{product.title}</h1>
    </Layout>
  )
}

export default ProductScreen
