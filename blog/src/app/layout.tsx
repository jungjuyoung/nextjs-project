import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Nadia's Blog",
    template: "Nadia's Blog | %s",
  },
  description: "FrontEnd Developer Nadia's Blog",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
