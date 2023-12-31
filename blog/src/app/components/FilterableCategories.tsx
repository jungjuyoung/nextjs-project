"use client";
import { useState } from "react";
import { Post } from "../utils/posts";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";
type Props = {
  posts: Post[];
  categories: string[];
};
const ALL_POSTS = "All Posts";
const FilterableCategories = ({ posts, categories }: Props) => {
  // console.log("posts", posts, "categories", categories);
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className="flex m-4">
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
};

export default FilterableCategories;
