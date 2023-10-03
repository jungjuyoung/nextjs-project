"use client";

import { SimplePost } from "@/model/post";
import { GridLoader } from "react-spinners";
import useSWR from "swr";
import PostListCard from "./PostListCard";

const PostList = () => {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>("/api/posts");
  console.log("PostList data", posts);
  return (
    <section>
      {isLoading && (
        <div>
          <GridLoader color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PostList;
