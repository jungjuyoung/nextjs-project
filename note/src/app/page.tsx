import Image from 'next/image'
import os from 'os'; // node api
import Counter from './components/Counter';
export default function Home() {
  console.log('hi- server component 👋🏻');// 서버 콘솔에서만 출력이 되고, 브라우저의 콘솔탭에는 출력되지 않는다. 
  return (
    <>
      <h1>홈페이지</h1>
      <Counter/>
    </>
  )
}
