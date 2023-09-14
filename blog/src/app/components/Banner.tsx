import React from "react";
export type BannerData = {
  message: string;
  state: "success" | "error";
};
const Banner = ({ banner: { message, state } }: { banner: BannerData }) => {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "❌";

  return (
    <div
      className={`p-2 ${isSuccess ? "bg-green-300" : "bg-red-700"}`}
    >{`${icon} ${message}`}</div>
  );
};

export default Banner;
