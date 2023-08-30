import Image from 'next/image';
import os from 'os'; // node api
import Counter from './components/Counter';
import shoes from '../../public/images/shoes.jpg';
import clothes from '../../public/images/clothes.jpg';
export default function Home() {
  console.log('hi- server component 👋🏻'); // 서버 콘솔에서만 출력이 되고, 브라우저의 콘솔탭에는 출력되지 않는다.
  return (
    <>
      <h1>홈페이지</h1>
      <Counter />
      {/* 원격에 있는 이미지 */}
      <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" alt="external images" width={400} height={400} priority />
      <Image src={clothes} alt="clothes" width={400} height={400} />
      <Image src={shoes} alt="shoes" width={400} height={400} />
    </>
  );
}
