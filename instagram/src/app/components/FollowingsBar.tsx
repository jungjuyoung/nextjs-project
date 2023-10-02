"use client";
import { DetailUser } from "@/model/user";
import Link from "next/link";
import { FadeLoader } from "react-spinners";
import useSWR from "swr";
import Aavatar from "./Aavatar";

const FollowingsBar = () => {
  const { data, error, isLoading } = useSWR<DetailUser>("/api/me");
  // console.log("FollowingsBar data", data?.following);
  const users = data?.following;

  return (
    <div>
      {isLoading ? (
        <FadeLoader color="red" />
      ) : (
        (!users || users.length === 0) && (
          <span className="border rounded border-gray-500 px-[8px] py-[5px]">{`you don't have following`}</span>
        )
      )}
      {users && users.length > 0 && (
        <ul>
          {users.map(({ image, username }) => (
            <li key={username}>
              <Link href={`/user/${username}`}>
                <Aavatar image={image} highlight />
                <p>{username}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FollowingsBar;
