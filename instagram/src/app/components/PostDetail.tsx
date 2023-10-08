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
    <section>
      <div className="relative">
        <Image
          src={image}
          alt={`photo by ${username}`}
          priority
          fill
          sizes="650px"
        />
      </div>
      <div>
        <PostUserAavatar image={userImage} username={username} />
        <ul>
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => (
                <li key={index}>
                  <Aavatar
                    image={image}
                    size="small"
                    highlight={commentUsername === username}
                  />
                  <div>
                    <span>{commentUsername}</span>
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
