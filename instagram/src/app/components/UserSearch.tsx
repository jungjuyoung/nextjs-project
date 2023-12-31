"use client";

import { SearchUser } from "@/model/user";
import { FormEvent, useState } from "react";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import UserCard from "./UserCard";
import useDebounce from "@/hook/useDebounce";

const UserSearch = () => {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword);
  const {
    isLoading,
    error,
    data: users,
  } = useSWR<SearchUser[]>(`/api/search/${debouncedKeyword}`);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="w-full max-w-2xl my-4 flex flex-col items-center">
      <form onSubmit={onSubmit} className="w-full mb-4 text-center">
        <input
          className="w-full text-xl p-3 outline-none border border-gray-400"
          type="text"
          autoFocus
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search for a useername or name"
        />
        {error && <p>무언가가 잘못되었음.</p>}
        {isLoading && <PropagateLoader size={8} color="red" className="my-4" />}
        {!isLoading && !error && users?.length === 0 && (
          <p>찾는 사용자가 없음.</p>
        )}
        <ul className="w-full p-4">
          {users &&
            users?.map((user) => (
              <li key={user.username}>
                <UserCard user={user} />
              </li>
            ))}
        </ul>
      </form>
    </section>
  );
};

export default UserSearch;
