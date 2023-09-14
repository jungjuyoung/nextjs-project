import React from "react";
import { Post } from "../utils/posts";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
type Props = {
  post: Post;
  type: "prev" | "next";
};
const ICON_CLASS =
  "text-3xl m-3 text-yellow-300 transition-all group-hover:text-5xl";
const AdjacentPostCard = ({
  post: { path, title, description },
  type,
}: Props) => {
  // console.log("path", path, "title", title, "description", description);
  return (
    <Link href={`/posts/${path}`} className="relative bg-black max-h-50 w-full">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
        className="w-full opacity-40"
      />
      <div className="group pl-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-around w-full items-center text-white">
        {type === "prev" && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="font-bold">{description}</p>
        </div>
        {type === "next" && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
};

export default AdjacentPostCard;
