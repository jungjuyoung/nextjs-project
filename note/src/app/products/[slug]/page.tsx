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