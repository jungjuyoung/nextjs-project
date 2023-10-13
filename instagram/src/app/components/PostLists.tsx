"use client";

import PostListCard from "./PostListCard";
import DynamicSppiner from "./DynamicSppiner";
import usePosts from "@/hook/usePosts";

const PostList = () => {
  const { posts, isLoading, error } = usePosts();
  return (
    <section>
      {isLoading && (
        <div className="text-center mt-20">
          <DynamicSppiner color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className="mb-4">
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PostList;
