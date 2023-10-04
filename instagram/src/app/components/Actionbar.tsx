import BookmarkIcon from "./ui/icons/BookmarksIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import { parseDate } from "../utils/date";

type Props = {
  likes: string[];
  username: string;
  text: string;
  createdAt: string;
};

const Actionbar = ({ likes, username, text, createdAt }: Props) => {
  return (
    <>
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
      </div>
    </>
  );
};

export default Actionbar;