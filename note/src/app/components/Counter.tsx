'use client' // use client를 선언해서 csr에서 처리할 때 사용하는 useHooks들 사용할 수 있게 허용.
import React, { useState } from 'react'

const Counter = () => {
  console.log('hi- client component 👋🏻'); // 브라우저 콘솔에서 출력이 되고, 서버상에서 빌드시 SSG로 프리랜더링 할 수 있는 부분까지 찾아서 렌더링 하기때문에 서버에서도 실행됨.
  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(num => num+1)}>+</button>
    </div>
  )
}

export default Counter