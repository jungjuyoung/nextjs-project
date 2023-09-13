import React from "react";
import MarkDownViewer from "@/app/components/MarkdownViewer";
import { AiTwotoneCalendar } from "react-icons/ai";
import { PostData } from "../utils/posts";
type Props = {
  post: PostData;
};
const PostContent = ({ post }: Props) => {
  const { title, content, path, description, date } = post;
  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-sky-500">
        <AiTwotoneCalendar />
        <p className="ml-2 font-bold">{date}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="w-[130px] border-2 border-sky-500 mt-4 mb-10" />
      <MarkDownViewer content={content} />
    </section>
  );
};

export default PostContent;
