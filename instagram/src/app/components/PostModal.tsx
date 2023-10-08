import CloseIcon from "./ui/icons/CloseIcon";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};
const PostModal = ({ onClose, children }: Props) => {
  return (
    <section
      onClick={(event) => {
        // console.log(
        //   "event: ",
        //   event.target,
        //   "currentTarget",
        //   event.currentTarget
        // );
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed left-0 top-0 w-full h-full flex flex-col justify-center items-center z-50  bg-neutral-900/70"
    >
      <button
        onClick={() => onClose()}
        className="fixed top-0 right-0 p-8 text-white"
      >
        <CloseIcon />
      </button>
      <div className="bg-white w-4/5 h-3/5 max-w-7xl"> {children}</div>
    </section>
  );
};

export default PostModal;
