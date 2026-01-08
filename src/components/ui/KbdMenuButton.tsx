"use client";

import useModal from "@/hooks/useModal";

export default function KbdMenuButton() {
  const { openModal } = useModal("navigation_modal");

  return (
    <ul className="menu menu-horizontal">
      <li>
        <button onClick={openModal} className="btn">
          <span>
            Press <kbd className="kbd">ctrl</kbd>+<kbd className="kbd">k</kbd>{" "}
            to start
          </span>
        </button>
      </li>
    </ul>
  );
}
