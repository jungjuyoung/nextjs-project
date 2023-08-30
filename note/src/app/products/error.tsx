'use client';

import { useEffect } from 'react';

type Props = { error: Error; reset: () => void };

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
// 각 컴포넌트 별로 ErrorBoundary를 사용할 수 있음.
