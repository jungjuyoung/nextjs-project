import React from 'react'
import {notFound} from 'next/navigation'
type Props = {
  params: {
    slug: string
  } 
}

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`
  }
}
const pantsPage = ({ params }: Props) => {
  if (params.slug === 'nothing') { 
	notFound()
  }
  return (
    <div>{params.slug} 상세 페이지</div>
  )
}
export default pantsPage

// 동적 라우팅의 경우,  SSR이기 때문에 미리 빌드시에 SSG하고 싶다면 
// 특정경로를 params로 넘겨서 만들어 둔다.
export function generateStaticParams() {
  const products = ['pants', 'skirt']
  return products.map(product => ({
    slug: product
  }))
}