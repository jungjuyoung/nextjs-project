type Props = {
  image?: string | null;
};

const Aavatar = ({ image }: Props) => {
  return (
    <div className=" w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-500">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="p-[0.15rem] rounded-full"
        src={image ?? undefined}
        alt="user profile image"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Aavatar;
