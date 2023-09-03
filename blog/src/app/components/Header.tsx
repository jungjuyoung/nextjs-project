import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <h1>{"Naida's blog"}</h1>
      </Link>
      <nav>
        <Link href="/">about</Link>
        <Link href="/about">home</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
};

export default Header;
