import { ProfileUser } from "@/model/user";
import Aavatar from "./Aavatar";
import FollowButton from "./FollowButton";

type Props = {
  user: ProfileUser;
};
const UserProfile = ({ user }: Props) => {
  const { image, username, name, posts, followers, following } = user;
  const info = [
    { title: "posts", data: posts },
    { title: "followers", data: followers },
    { title: "following", data: following },
  ];
  return (
    <section className="">
      <Aavatar image={image} highlight />
      <div>
        <h1>{username}</h1>
        <FollowButton user={user} />
        <ul>
          {info.map(({ title, data }, index) => (
            <li key={index}>
              <span>{data}</span>
              {title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UserProfile;
