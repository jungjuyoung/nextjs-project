import React from "react";
import { getNonFeaturedPosts } from "../utils/posts";
import PostCard from "./PostCard";
import MultiCarouselWrap from "./MultiCarouselWrap";

const CarouselPosts = async () => {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">You May Like</h2>
      <MultiCarouselWrap>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarouselWrap>
    </section>
  );
};

export default CarouselPosts;
