import React from "react";
import PostsGrid from "./PostsGrid";
import { getFeaturedPosts } from "../utils/posts";

const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts();
  // console.log("posts", posts);
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
