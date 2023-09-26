"use client";
import useSWR from "swr";

const FollowingsBar = () => {
  const { data, error, isLoading } = useSWR("/api/hello");
  console.log(data);
  return <div>FollowingsBar</div>;
};

export default FollowingsBar;
