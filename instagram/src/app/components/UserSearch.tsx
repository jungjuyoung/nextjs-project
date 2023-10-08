"use client";

import { useState } from "react";
import useSWR from "swr";

const UserSearch = () => {
  const [keyword, setKeyword] = useState("Bob");
  const { isLoading, error, data } = useSWR(`/api/search/${keyword}`);
  console.log("data", data);
  return <div>UserSearch</div>;
};

export default UserSearch;
