'use client' // use client를 선언해서 csr에서 처리할 때 사용하는 useHooks들 사용할 수 있게 허용.
import React, { useState } from 'react'

const Counter = () => {
   const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(num => num+1)}>+</button>
    </div>
  )
}

export default Counter