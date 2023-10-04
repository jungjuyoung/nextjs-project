import SmileIcon from "./ui/icons/SmileIcon";

export const CommentForm = () => {
  return (
    <form className="flex border-t border-neutral-300 p-3">
      <SmileIcon />
      <input
        className="w-full ml-2 border-none outline-none"
        type="text"
        placeholder="leave a comment"
      />
      <button className="font-bold text-sky-500 ml-2">post</button>
    </form>
  );
};
