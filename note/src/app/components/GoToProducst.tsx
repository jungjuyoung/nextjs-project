'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const GoToProducstButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push('/products');
      }}
    >
      제품페이지로 이동
    </button>
  );
};

export default GoToProducstButton;
