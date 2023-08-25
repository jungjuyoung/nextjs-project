import { getProducts } from '@/utils/products';
import Link from 'next/link';
import React from 'react';

// export const revalidate = 3; // 3초 간격으로 ISR

const productPage = async () => {
  const products = await getProducts();
  // 서버파일(DB)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌.
  const res = await fetch('https://meowfacts.herokuapp.com/', { next: { revalidate: 3 } });
  const data = await res.json();
  const factText = data.data[0];
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
      <article>{factText}</article>
    </>
  );
};

export default productPage;
