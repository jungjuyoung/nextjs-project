import React from 'react'
type Props = {
  params: {
  slug: string
} 
}
const pantsPage = ({params} : Props) => {
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