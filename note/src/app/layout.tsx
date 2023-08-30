import Link from 'next/link';
import './globals.css';
import styles from './layout.module.scss';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Comforter } from 'next/font/google';

const openSans = Open_Sans({ weight: '600', subsets: ['latin'] });
const comforter = Comforter({ weight: '400', subsets: ['latin'] });
export const metadata: Metadata = {
  title: '멋진 쇼핑몰.',
  description: '멋진 상품을 판매한는 곳.',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1 className={comforter.className} style={{ fontSize: '39px' }}>
            Shopping Mall
          </h1>
          <nav className={styles.nav}>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
``;
