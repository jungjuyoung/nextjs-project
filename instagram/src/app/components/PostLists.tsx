"use client";

import { SimplePost } from "@/model/post";
import useSWR from "swr";
import PostListCard from "./PostListCard";
import DynamicSppiner from "./DynamicSppiner";

const PostList = () => {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>("/api/posts");
  // console.log("PostList data", posts);
  return (
    <section>
      {isLoading && (
        <div className="text-center mt-20">
          <DynamicSppiner color='red'/>
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
