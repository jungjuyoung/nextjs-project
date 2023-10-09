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
    <Link href={`/user/${username}`}>
      <Aavatar image={image} />
      <div>
        <p>{username}</p>
        <p>{name}</p>
        <p>{`${followers} followers ${following} followings`}</p>
      </div>
    </Link>
  );
};

export default UserCard;
