import { AiOutlineAppstore } from "react-icons/ai";
type Props = {
  className?: string;
};
const PostIcon = ({ className }: Props) => {
  return <AiOutlineAppstore className={className || "w-3 h-3"} />;
};
export default PostIcon;
