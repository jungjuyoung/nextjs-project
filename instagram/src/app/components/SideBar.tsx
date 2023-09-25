import { User } from "@/model/user";
import React from "react";
import Aavatar from "./Aavatar";

type Props = {
  user: User;
};
const SideBar = ({ user: { name, username, image } }: Props) => {
  return (
    <div>
      {image && <Aavatar image={image} />}
      <p>{username}</p>
      <p>{name}</p>
      <p>
        About . Help . Press . API . Jobs . Privacy . Terms . Location .
        Language
      </p>
      <p>@Copyright Instagram Meta</p>
    </div>
  );
};

export default SideBar;
