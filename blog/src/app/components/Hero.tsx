import Image from "next/image";
import profile from "../../../public/images/profile.png";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-center">
      <Image
        src={profile}
        alt="pictures of the author profile"
        width={250}
        className="mx-auto rounded-full"
        priority
      />
      <h2 className="text-3xl font-bold">Hi, I am nadia</h2>
      <h3 className="text-xl font-semibold">I am FrontEnd Developer</h3>
      <p>블로그 만들기</p>
      <Link href="/contact">
        <button className="bg-yellow-500 py-1 px-4 mt-2 rounded-lg">
          Contact Me
        </button>
      </Link>
    </section>
  );
};

export default Hero;
