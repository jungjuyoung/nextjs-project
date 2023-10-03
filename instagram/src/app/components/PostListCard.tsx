import { SimplePost } from "@/model/post";
import Aavatar from "./Aavatar";
import Image from "next/image";

type Props = {
  post: SimplePost;
};
const PostListCard = ({ post }: Props) => {
  const { userImage, username, image, createdAt, likes, text } = post;
  return (
    <div>
      <Aavatar image={userImage} highlight />
      <span>{username}</span>
      <Image
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
      />
      <div></div>
    </div>
  );
};

export default PostListCard;
