"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const NavigatorModalSearch: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <label className="input input-ghost w-full rounded-none focus-within:bg-base-300/40 focus-within:backdrop-blur-xl focus-within:outline-none">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        className="grow"
        placeholder="Search"
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <kbd className="kbd kbd-sm">ctrl</kbd>
      <kbd className="kbd kbd-sm">k</kbd>
    </label>
  );
};

export default NavigatorModalSearch;
