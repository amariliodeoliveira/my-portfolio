"use client";

import { useState } from "react";

import useModal from "@/hooks/useModal";

import NavigatorModalSearch from "./NavigatorModalSearch";
import NavigatorModalMenu from "./NavigatorModalMenu";

export default function NavigatorModal() {
  const { closeModal } = useModal("navigation_modal");
  const [query, setQuery] = useState("");

  const handleClose = () => {
    closeModal();

    setTimeout(() => {
      setQuery("");
    }, 300);
  };

  return (
    <dialog id="navigation_modal" className="modal" onClose={handleClose}>
      <div className="modal-box p-0 bg-base-300/40 backdrop-blur-3xl overflow-hidden">
        <NavigatorModalSearch query={query} setQuery={setQuery} />
        <NavigatorModalMenu query={query} />
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
