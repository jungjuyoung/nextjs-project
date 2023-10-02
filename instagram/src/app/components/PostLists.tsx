"use client";

import { SimplePost } from "@/model/post";
import useSWR from "swr";

const PostList = () => {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>("/api/posts");
  console.log("PostList data", posts);
  return (
    <ul>{posts && posts.map((post) => <li key={post.id}>{post.text}</li>)}</ul>
  );
};

export default PostList;
