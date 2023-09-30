"use client";
import useSWR from "swr";

const FollowingsBar = () => {
  const { data, error, isLoading } = useSWR("/api/me");
  console.log("FollowingsBar data", data);
  return <div>FollowingsBar</div>;
};

export default FollowingsBar;
