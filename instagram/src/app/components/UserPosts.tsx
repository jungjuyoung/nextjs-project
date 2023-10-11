"use client";
import { ProfileUser } from "@/model/user";
import { useState } from "react";
import useSWR from "swr";

type Props = {
  user: ProfileUser;
};
const UserPosts = ({ user: { username } }: Props) => {
  // post 탭: /api/users/${username}/posts
  // like 탭: /api/users/${username}/likes
  // bookmark탭: /api/users/${username}/bookmarks
  const [tab, setTab] = useState("likes");
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(`/api/users/${username}/${tab}`);
  console.log("posts", posts);
  return <div></div>;
};

export default UserPosts;
