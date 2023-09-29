import { User } from "@/model/user";
import React from "react";
import Aavatar from "./Aavatar";

type Props = {
  user: User;
};
const SideBar = ({ user: { name, email, username, image } }: Props) => {
  console.log("SiderBar username", username, "email", email);
  return (
    <>
      <div className="flex items-center">
        {image && <Aavatar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">
        About . Help . Press . API . Jobs . Privacy . Terms . Location .
        Language
      </p>
      <p className="font-bold text-sm text-neutral-500 mt-8">
        @Copyright Instagram Meta
      </p>
    </>
  );
};

export default SideBar;
