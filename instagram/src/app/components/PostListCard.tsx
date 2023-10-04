import { SimplePost } from "@/model/post";
import Aavatar from "./Aavatar";
import Image from "next/image";
import BookmarkIcon from "./ui/icons/BookmarksIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import { parseDate } from "../utils/date";
import SmileIcon from "./ui/icons/SmileIcon";

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
      <div>
        <BookmarkIcon />
        <HeartIcon />
      </div>
      <div>
        <p>{`${likes?.length ?? 0} ${likes?.length > 1 ? "likes" : "like"}`}</p>
        <p>
          <strong>{username}</strong>
          {text}
        </p>
        <p>{parseDate(createdAt)}</p>
        <form action="">
          <SmileIcon />
          <input type="text" placeholder="leave a comment" />
          <button>post</button>
        </form>
      </div>
    </div>
  );
};

export default PostListCard;
