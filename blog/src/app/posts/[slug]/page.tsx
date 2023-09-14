import AdjacentPostCard from "@/app/components/AdjacentPostCard";
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
  const { title, path, next, prev } = post;
  // console.log("post", post);
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
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
};

export default postPage;
