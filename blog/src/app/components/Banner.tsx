export type BannerData = {
  message: string;
  state: "success" | "error";
};
const Banner = ({ banner: { message, state } }: { banner: BannerData }) => {
  console.log("hi- server Banner component 👋🏻");
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "❌";

  return (
    <div
      className={`p-2 rounded-xl text-center w-full ${
        isSuccess ? "bg-green-300" : "bg-red-300"
      }`}
    >{`${icon} ${message}`}</div>
  );
};

export default Banner;
