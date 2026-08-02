"use client";

import useModal from "@/hooks/useModal";

export default function KbdMenuButton() {
  const { openModal } = useModal("navigation_modal");

  return (
    <button onClick={openModal} className="btn">
      <span>
        Press <kbd className="kbd">ctrl</kbd>+<kbd className="kbd">k</kbd> to
        start
      </span>
    </button>
  );
}
