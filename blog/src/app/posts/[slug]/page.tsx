import { getPostData } from "@/app/utils/posts";
import React from "react";
type Props = {
  params: {
    slug: string;
  };
};
const postPage = async ({ params: { slug } }: Props) => {
  // 1. slug에 전달된 path를 읽어와서
  // 2. path를 마크다운 뷰어에 표기.
  const post = await getPostData(slug);
  return (
    <div>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </div>
  );
};

export default postPage;
