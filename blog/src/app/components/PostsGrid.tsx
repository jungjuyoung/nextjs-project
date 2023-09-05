import React from "react";
import { Posts } from "../utils/posts";
import PostCard from "./PostCard";

type Props = {
  posts: Posts[];
};

const PostsGrid = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsGrid;
