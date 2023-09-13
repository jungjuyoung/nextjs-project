import PostContent from "@/app/components/PostContent";
import { getPostData } from "@/app/utils/posts";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};
const postPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  const { title, path } = post;
  // console.log(typeof date, date);
  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px] object-fit"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section>이전 | 다음</section>
    </article>
  );
};

export default postPage;
