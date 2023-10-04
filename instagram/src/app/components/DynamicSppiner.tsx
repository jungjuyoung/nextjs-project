import dynamic from "next/dynamic";

const BeatLoader = dynamic(
  () => import("react-spinners").then((lib) => lib.BeatLoader),
  { ssr: false }
);
type Props = {
  color?: string;
};
const DynamicSppiner = ({ color = "red" }: Props) => {
  return <BeatLoader color={color} size={8} />;
};

export default DynamicSppiner;
