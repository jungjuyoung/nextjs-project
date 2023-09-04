import React from "react";
import PostsGrid from "./PostsGrid";
import { getAllPosts } from "../utils/posts";

const FeaturedPosts = async () => {
  const posts = await getAllPosts();
  // console.log("posts", posts);
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
