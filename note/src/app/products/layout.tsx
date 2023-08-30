import styles from './layout.module.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '멋진 쇼핑몰 | 전체 상품확인',
  description: '멋진 상품을 확인해보세요.',
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/woman">여성복</Link>
        <Link href="/products/man">남성복</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
