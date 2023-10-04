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
      />
      <div className="flex justify-between my-2 px-2">
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div className="px-4 py-2">
        <p className="text-sm font-bold mb-2">{`${likes?.length ?? 0} ${
          likes?.length > 1 ? "likes" : "like"
        }`}</p>
        <p>
          <strong className="mr-2">{username}</strong>
          {text}
        </p>
        <p className="text-xs text-neutral-500 uppercase my-2">
          {parseDate(createdAt)}
        </p>
        <form className="flex border-t border-neutral-300 p-3">
          <SmileIcon />
          <input
            className="w-full ml-2 border-none outline-none"
            type="text"
            placeholder="leave a comment"
          />
          <button className="font-bold text-sky-500 ml-2">post</button>
        </form>
      </div>
    </article>
  );
};

export default PostListCard;
