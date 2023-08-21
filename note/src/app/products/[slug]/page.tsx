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
  // 서버파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌.
  return (
    <div>{params.slug} 상세 페이지</div>
  )
}
export default pantsPage

// 동적 라우팅의 경우,  SSR이기 때문에 미리 빌드시에 SSG하고 싶다면 
// 특정경로를 params로 넘겨서 만들어 둔다.
export function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄것임( 현재는 규모가 작음으로...) SSG로.
  const products = ['pants', 'skirt']
  return products.map(product => ({
    slug: product
  }))
}