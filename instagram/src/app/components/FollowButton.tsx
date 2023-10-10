"use client";

import { HomeUser, ProfileUser } from "@/model/user";
import useSWR from "swr";
import Button from "./ui/Button";

type Props = {
  user: ProfileUser;
};
const FollowButton = ({ user }: Props) => {
  const { data: loggedInUser } = useSWR<HomeUser>("/api/me");
  const { username } = user;
  const show = loggedInUser && loggedInUser.username !== username;
  const following =
    loggedInUser &&
    loggedInUser?.following.find(
      (following) => following.username === username
    );
  const text = following ? "unFollow" : "Follow";
  return (
    <p>
      {show && (
        <Button text={text} onClick={() => {}} red={text === "unFollow"} />
      )}
    </p>
  );
};

export default FollowButton;
