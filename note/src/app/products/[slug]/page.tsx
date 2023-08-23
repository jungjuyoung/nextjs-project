import React from 'react'
import {notFound} from 'next/navigation'
import { getProduct, getProducts } from '@/utils/products'
type Props = {
  params: {
    slug: string
  } 
}

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `제품의 이름: ${slug}`
  }
}
const productPage = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);
  if (!product) { 
    notFound();
  }
  // 서버파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌.
  return (
    <div>{product.name} 상세 페이지</div>
  )
}
export default productPage

// 동적 라우팅의 경우,  SSR이기 때문에 미리 빌드시에 SSG하고 싶다면 
// 특정경로를 params로 넘겨서 만들어 둔다.
export async function generateStaticParams() {
  // 일단 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄것임( 현재는 규모가 작음으로...) SSG로.
  const products = await getProducts();
  console.log(products)
  return products.map(product => ({
    slug: product.id
  }))
}