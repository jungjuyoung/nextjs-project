import MarkDownViewer from "@/app/components/MarkdownViewer";
import { getPostData } from "@/app/utils/posts";
import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";
type Props = {
  params: {
    slug: string;
  };
};
const postPage = async ({ params: { slug } }: Props) => {
  const { title, content, path, description, date } = await getPostData(slug);
  console.log(date);
  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px] object-fit"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
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
    </article>
  );
};

export default postPage;
