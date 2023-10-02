"use client";
import { DetailUser } from "@/model/user";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import Aavatar from "./Aavatar";
import ScrollableBar from "./ui/ScrollableBar";

const FollowingsBar = () => {
  const { data, error, isLoading } = useSWR<DetailUser>("/api/me");
  // console.log("FollowingsBar data", data?.following);
  // const users = data?.following;
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];

  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto">
      {isLoading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && (
          <span className="border rounded border-gray-500 px-[8px] py-[5px]">{`you don't have following`}</span>
        )
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
              <Link
              key={username}
                href={`/user/${username}`}
                className="flex flex-col items-center"
              >
                <Aavatar image={image} highlight />
                <p className="w-20 text-center overflow-hidden text-ellipsis">
                  {username}
                </p>
              </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
};

export default FollowingsBar;
