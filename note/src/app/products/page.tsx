import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/utils/products';
import Link from 'next/link';
import React from 'react';

// export const revalidate = 3; // 3초 간격으로 ISR (page에서)

const productsPage = async () => {
  // throw new Error(); // error.tsx컴포넌트 출력용.
  const products = await getProducts();
  // 서버파일(DB)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌.
  // const res = await fetch('https://meowfacts.herokuapp.com/', { next: { revalidate: 0 } }); // 3초 간격으로 ISR을 fetch단위에서
  // { next: { revalidate: 0 } } revalidate: 0은 (SSR),
  // cashe: force-cache가 기본값 (SSG)
  // cache: no-store도 (SSR)
  // const data = await res.json();
  // const factText = data.data[0];
  // console.log(factText);
  return (
    <>
      <h1>제품 소개페이지</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
};

export default productsPage;
