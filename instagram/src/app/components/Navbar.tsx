"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  HomeFillIcon,
  HomeIcon,
  NewFillIcon,
  NewIcon,
  SearchFillIcon,
  SearchIcon,
} from "./ui/icons";
import ColorButton from "./ui/ColorButton";
const menu = [
  { href: "/", icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
  { href: "/search", icon: <SearchIcon />, clickedIcon: <SearchFillIcon /> },
  { href: "/new", icon: <NewIcon />, clickedIcon: <NewFillIcon /> },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="flex justify-between items-center px-6">
      <Link href="">
        <h1 className="text-2xl font-bold">Instagram</h1>
      </Link>
      <nav className="flex items-center">
        <ul className="flex p-4 gap-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
        </ul>
        <ColorButton text="Sign in" onClick={() => {}} />
      </nav>
    </div>
  );
};

export default Navbar;
