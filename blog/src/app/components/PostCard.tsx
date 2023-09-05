import React from "react";
import { Posts } from "../utils/posts";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: Posts;
};
const PostCard = ({
  post: { title, description, date, category, path },
}: Props) => {
  return (
    <Link href={`/posts/${path}`}>
      <article className="transition rounded-md overflow-hidden shadow-sm hover:shadow-xl">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-700">{date.toString()}</time>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="text-sm rounded-lg bg-green-300 px-2 my-2">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
