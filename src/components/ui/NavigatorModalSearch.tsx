"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

type NavigatorModalSearchProps = {
  query: string;
  setQuery: (value: string) => void;
};

export default function NavigatorModalSearch({
  query,
  setQuery,
}: NavigatorModalSearchProps) {
  return (
    <label className="input input-ghost focus-within:bg-base-300/40 w-full rounded-none px-4 focus-within:backdrop-blur-xl focus-within:outline-none">
      <span className="size-5">
        <Icon className="size-5" icon="line-md:search" />
      </span>
      <input
        type="search"
        id="navigation_search"
        autoComplete="off"
        className="grow"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <kbd className="kbd">ctrl</kbd>
      <kbd className="kbd">k</kbd>
    </label>
  );
}
