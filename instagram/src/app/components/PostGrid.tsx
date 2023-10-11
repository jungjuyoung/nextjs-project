"use client";
import useSWR from "swr";
import DynamicSppiner from "./DynamicSppiner";
import PostGridCard from "./PostGridCard";
import { SimplePost } from "@/model/post";

type Props = {
  username: string;
  query: string;
};
const PostGrid = ({ username, query }: Props) => {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR<SimplePost[]>(`/api/users/${username}/${query}`);
  console.log("posts", posts);

  return (
    <div className="w-full text-center">
      {isLoading && <DynamicSppiner />}
      <ul className="grid grid-cols-3 gap-4 py-4 px-8">
        {posts &&
          posts.map((post, index) => (
            <li key={post.id}>
              <PostGridCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostGrid;
