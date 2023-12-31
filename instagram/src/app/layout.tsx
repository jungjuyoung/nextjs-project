import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import AuthContext from "@/context/AuthContext";
import SWRContext from "@/context/SWRContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "instagram clone coding",
    template: "일상을 기록하는 즐거움 | %s",
  },
  description: "instagram photos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full  bg-neutral-50  overflow-auto">
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b">
            <div className="max-w-screen-xl mx-auto">
              <Navbar />
            </div>
          </header>
          <main className="w-full flex justify-center max-w-screen-xl mx-auto">
            <SWRContext>{children}</SWRContext>
          </main>
        </AuthContext>
        <div id="portal"></div>
      </body>
    </html>
  );
}
