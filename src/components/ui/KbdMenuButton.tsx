"use client";

import React from "react";

import useModal from "@/hooks/useModal";

export default function KbdMenuButton() {
  const handleClick = useModal("navigation_modal");
  return (
    <ul className="menu menu-horizontal">
      <li>
        <button onClick={handleClick} className="btn">
          <span>
            Press <kbd className="kbd">ctrl</kbd>+<kbd className="kbd">k</kbd>{" "}
            to start
          </span>
        </button>
      </li>
    </ul>
  );
}
