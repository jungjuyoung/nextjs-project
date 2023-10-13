import BookmarkIcon from "./ui/icons/BookmarksIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import { parseDate } from "../utils/date";
import { useState } from "react";
import ToggleButton from "./ui/ToggleButton";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";
import { SimplePost } from "@/model/post";
import { useSession } from "next-auth/react";
import { useSWRConfig } from "swr";
import usePosts from "@/hook/usePosts";

type Props = {
  post: SimplePost;
};

const Actionbar = ({ post }: Props) => {
  const { data: session } = useSession();
  const { id, likes, username, text, createdAt } = post;
  // console.log(
  //   "id: ",
  //   id,
  //   "likes",
  //   likes,
  //   "username",
  //   username,
  //   "text: ",
  //   text,
  //   "createdAt: ",
  //   createdAt
  // );
  const user = session?.user;
  const liked = user ? likes.includes(user.username) : false;
  const [bookmarked, setBookmarked] = useState(false);
  const { setLike } = usePosts();
  const handleLike = (liked: boolean) => {
    if (user) {
      setLike(post, user.username, liked);
    }
  };
  return (
    <>
      <div className="flex justify-between my-2 px-2">
        <ToggleButton
          toggled={liked}
          onToggle={handleLike}
          onIcon={<HeartFillIcon />}
          offIcon={<HeartIcon />}
        />

        <ToggleButton
          toggled={bookmarked}
          onToggle={setBookmarked}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
        />
      </div>
      <div className="px-4 py-2">
        <p className="text-sm font-bold mb-2">{`${likes?.length ?? 0} ${
          likes?.length > 1 ? "likes" : "like"
        }`}</p>
        {text && (
          <p>
            <strong className="mr-2">{username}</strong>
            {text}
          </p>
        )}
        <p className="text-xs text-neutral-500 uppercase my-2">
          {parseDate(createdAt)}
        </p>
      </div>
    </>
  );
};

export default Actionbar;
