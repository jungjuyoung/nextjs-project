import React from 'react';

const ProductsLoading = () => {
  return <div>프로덕트 로딩중...✨</div>;
};

export default ProductsLoading;
// 이 로딩은 SSR일때만 의미가 있다.
// ProductsLoading 컴포넌트의 경우 프로덕트 페이지에가서 보면 revalidate를 하지 않은, 순수 SSG페이지이다.
// 로딩이란 서버쪽에 요청을해서 다이나믹하게 처리해서 전달받고 그 즉시 렌더링을 하는경우 의미 있는것이지, SSG같은경우 미리 서버에서 빌드해 둔것을 보여주기 때문에 로딩이 필요없다.
