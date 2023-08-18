import Image from 'next/image'
import os from 'os'; // node api
export default function Home() {
  console.log(os.hostname()) // 서버 컴포넌트로 동작하는 컴포넌트는 DOM API는 사용하지 못하고, node API사용가능.
  console.log('안녕'); // 서버 콘솔에서만 출력이 되고, 브라우저의 콘솔탭에는 출력되지 않는다. 
  return (
    <h1>홈페이지</h1>
  )
}
