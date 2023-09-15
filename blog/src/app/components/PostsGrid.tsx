import React from "react";
import { Post } from "../utils/posts";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

const PostsGrid = ({ posts }: Props) => {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsGrid;
