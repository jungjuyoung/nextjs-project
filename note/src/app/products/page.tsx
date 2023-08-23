import { getProducts } from '@/utils/products'
import Link from 'next/link'
import React from 'react'

const productPage = async () => {
  const products = await getProducts();
  // 서버파일(DB)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌. 
  return (
    <>
      <h1>제품 소개페이지</h1>
      <ul>
        {products.map(({id, name}, index) => <li key={index}><Link href={`products/${id}`}>{name}</Link></li>)}
      </ul>
      </>
  )
}

export default productPage
