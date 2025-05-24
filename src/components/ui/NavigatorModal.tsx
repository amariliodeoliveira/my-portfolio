"use client";

import useModal from "@/hooks/useModal";

import NavigatorModalSearch from "./NavigatorModalSearch";
import NavigatorModalMenu from "./NavigatorModalMenu";

export default function NavigatorModal() {
  const { closeModal } = useModal("navigation_modal");

  return (
    <dialog id="navigation_modal" className="modal" onClose={closeModal}>
      <div className="modal-box p-0 bg-base-300/40 backdrop-blur-3xl overflow-hidden">
        <NavigatorModalSearch />
        <NavigatorModalMenu />
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
