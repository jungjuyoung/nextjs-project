"use client";

import useSWR from "swr";

const PostList = () => {
  const { data, isLoading, error } = useSWR("/api/posts");
  console.log("PostList data", data);
  return <div>PostList</div>;
};

export default PostList;
