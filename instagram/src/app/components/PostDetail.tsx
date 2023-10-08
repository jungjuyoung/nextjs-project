import { FullPost, SimplePost } from "@/model/post";
import Image from "next/image";
import useSWR from "swr";
import PostUserAavatar from "./PostUserAavatar";
import Actionbar from "./Actionbar";
import { CommentForm } from "./CommentForm";
import Aavatar from "./Aavatar";

type Props = {
  post: SimplePost;
};
const PostDetail = ({ post }: Props) => {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = useSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;
  console.log("comments", comments);
  return (
    <section className="flex w-full h-full">
      <div className="relative basis-3/5">
        <Image
          src={image}
          alt={`photo by ${username}`}
          priority
          fill
          sizes="650px"
          className="object-cover"
        />
      </div>
      <div className="w-full basis-2/5 flex flex-col">
        <PostUserAavatar image={userImage} username={username} />
        <ul className="border-t border-gray-200 h-full oveflow-y-auto p-4 mb-1">
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => (
                <li key={index} className="flex items-center mb-1">
                  <Aavatar
                    image={image}
                    size="small"
                    highlight={commentUsername === username}
                  />
                  <div className="ml-2">
                    <span className="font-bold mr-1">{commentUsername}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              )
            )}
        </ul>
        <Actionbar likes={likes} username={username} createdAt={createdAt} />
        <CommentForm />
      </div>
    </section>
  );
};

export default PostDetail;
