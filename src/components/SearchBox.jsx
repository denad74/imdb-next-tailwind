"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5 "
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search movie...."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent "
      />
      <button
        type="submit"
        disabled={!search}
        className="text-purple-700 disabled:text-gray-400 flex-1"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
