type AavatarSize = "small" | "medium" | "large";

type Props = {
  image?: string | null;
  size?: AavatarSize;
  highlight?: boolean;
};

const getContainerStyle = (size: AavatarSize, highlight: boolean): string => {
  const baseStyle = "rounded-full flex items-center justify-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-500"
    : "";
  const sizeStyle = getContainerSize(size);
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
};

const getContainerSize = (size: AavatarSize): string => {
  switch (size) {
    case "small":
      return "w-9 h-9";
    case "medium":
      return "w-11 h-11";
    case "large":
      return "w-[68px] h-[68px]";
  }
};

const getImageSizeStyle = (size: AavatarSize): string => {
  switch (size) {
    case "small":
      return "w-[34px] h-[34px] p-[0.1rem]";
    case "medium":
      return "w-[42px] h-[42px] p-[0.1rem]";
    case "large":
      return "w-16 h-16 p-[0.2rem]";
  }
};

const Aavatar = ({ image, size = "large", highlight = false }: Props) => {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`bg-white object-cover p-[0.15rem] rounded-full ${getImageSizeStyle(
          size
        )}`}
        src={image ?? undefined}
        alt="user profile image"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Aavatar;
