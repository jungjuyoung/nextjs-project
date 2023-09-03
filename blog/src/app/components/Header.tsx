import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold">{"Naida's blog"}</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/">about</Link>
        <Link href="/about">home</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
};

export default Header;
