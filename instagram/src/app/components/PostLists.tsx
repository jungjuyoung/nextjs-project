"use client";

import { SimplePost } from "@/model/post";
import { BeatLoader } from "react-spinners";
import useSWR from "swr";
import PostListCard from "./PostListCard";

const PostList = () => {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>("/api/posts");
  // console.log("PostList data", posts);
  return (
    <section>
      {isLoading && (
        <div className="text-center mt-20">
          <BeatLoader color="red" size={8} />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className="mb-4">
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PostList;
