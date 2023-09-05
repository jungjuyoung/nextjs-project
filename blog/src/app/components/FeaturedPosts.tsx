import React from "react";
import PostsGrid from "./PostsGrid";
import { getFeaturedPosts } from "../utils/posts";

const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts();
  // console.log("posts", posts);
  return (
    <section>
      <h2 className="text-2xl font-bold">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
