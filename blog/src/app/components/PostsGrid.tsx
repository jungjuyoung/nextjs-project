import React from "react";
import { Posts } from "../utils/posts";

type Props = {
  posts: Posts[];
};

const PostsGrid = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostsGrid;
