import Link from 'next/link'
import React from 'react'

const products = ['pants','skirt','shirt','shoes']
const productPage = () => {
  return (
    <>
      <h1>제품 소개페이지</h1>
      <ul>
        {products.map((product, index) => <li key={index}><Link href={`products/${product}`}>{ product}</Link></li>)}
      </ul>
      </>
  )
}

export default productPage
