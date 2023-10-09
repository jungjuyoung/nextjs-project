import { ProfielUser } from "@/model/user";
import Link from "next/link";
import Aavatar from "./Aavatar";

type Props = {
  user: ProfielUser;
};
const UserCard = ({
  user: { name, username, image, followers, following },
}: Props) => {
  return (
    <Link
      href={`/user/${username}`}
      className="flex items-center w-full rounded-sm border border-neutral-300 mb-2 p-4 bg-white hover:bg-neutral-50"
    >
      <Aavatar image={image} />
      <div className="text-neutral-500">
        <p className="text-black font-bold leading-4">{username}</p>
        <p>{name}</p>
        <p className="text-sm leading-4">{`${followers} followers ${following} followings`}</p>
      </div>
    </Link>
  );
};

export default UserCard;
