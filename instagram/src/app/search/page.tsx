import { Metadata } from "next";
import UserSearch from "../components/UserSearch";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "user search",
  description: "search users to follow",
};

const SearchPage = () => {
  return <UserSearch />;
};

export default SearchPage;
