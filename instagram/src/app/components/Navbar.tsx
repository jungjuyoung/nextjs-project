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
import { useSession, signIn, signOut } from "next-auth/react";
import Aavatar from "./Aavatar";

const menu = [
  { href: "/", icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
  { href: "/search", icon: <SearchIcon />, clickedIcon: <SearchFillIcon /> },
  { href: "/new", icon: <NewIcon />, clickedIcon: <NewFillIcon /> },
];

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const pathName = usePathname();

  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-2xl font-bold">Instagram</h1>
      </Link>
      <nav>
        <ul className="flex items-center justify-center p-4 gap-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          <li>
            {user && (
              <Link href={`user/${user.username}`}>
                <Aavatar image={user?.image} />
              </Link>
            )}
          </li>
          <li>
            {session ? (
              <ColorButton text="Sign Out" onClick={() => signOut()} />
            ) : (
              <ColorButton text="Sign in" onClick={() => signIn()} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
