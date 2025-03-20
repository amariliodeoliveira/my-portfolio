"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";

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
    <label className="input px-4 input-ghost w-full rounded-none focus-within:bg-base-300/40 focus-within:backdrop-blur-xl focus-within:outline-none">
      <span className="size-5">
        <Icon className="size-5" icon="line-md:search" />
      </span>
      <input
        type="search"
        className="grow"
        placeholder="Search"
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <kbd className="kbd">ctrl</kbd>
      <kbd className="kbd">k</kbd>
    </label>
  );
};

export default NavigatorModalSearch;
