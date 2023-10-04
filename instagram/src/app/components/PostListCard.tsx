import { SimplePost } from "@/model/post";
import Aavatar from "./Aavatar";
import Image from "next/image";

import { CommentForm } from "./CommentForm";
import Actionbar from "./Actionbar";

type Props = {
  post: SimplePost;
  priority?: boolean;
};
const PostListCard = ({ post, priority = false }: Props) => {
  const { userImage, username, image, createdAt, likes, text } = post;
  return (
    <article className="rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center p-2">
        <Aavatar image={userImage} highlight size="medium" />
        <span className="text-gray-900 font-bold ml-2">{username}</span>
      </div>
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
      />
      <Actionbar
        likes={likes}
        username={username}
        createdAt={createdAt}
        text={text}
      />
      <CommentForm />
    </article>
  );
};

export default PostListCard;
