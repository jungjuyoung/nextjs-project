import Aavatar from "./Aavatar";

type Props = {
  image: string
  username: string
};
const PostUserAavatar = ({ image, username }: Props) => {
  return (
    <div className="flex items-center p-2">
      <Aavatar image={image} highlight size="medium" />
      <span className="text-gray-900 font-bold ml-2">{username}</span>
    </div>
  );
};

export default PostUserAavatar;
