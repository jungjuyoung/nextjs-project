import MarkDownViewer from "@/app/components/MarkdownViewer";
import { getPostData } from "@/app/utils/posts";
import React from "react";
type Props = {
  params: {
    slug: string;
  };
};
const postPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  return (
    <div>
      <h1>{post.title}</h1>
      <MarkDownViewer content={post.content} />
    </div>
  );
};

export default postPage;
