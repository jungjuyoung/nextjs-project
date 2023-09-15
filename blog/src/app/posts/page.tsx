import React from "react";
import { getAllPosts } from "../utils/posts";
import FilterableCategories from "../components/FilterableCategories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "article of full stack skills",
};

const PostsPage = async () => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterableCategories posts={posts} categories={categories} />;
};

export default PostsPage;
