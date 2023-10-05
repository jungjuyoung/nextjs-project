import ReactDOM from "react-dom";
type Props = {
  children: React.ReactNode;
};
const ModalPortal = ({ children }: Props) => {
  if (typeof window === undefined) return;
  const el = document.getElementById("portal") as Element;
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
