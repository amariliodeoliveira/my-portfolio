"use client";

import { Suspense } from "react";

import useModal from "@/hooks/useModal";

import NavigatorModalSearch from "./NavigatorModalSearch";
import NavigatorModalMenu from "./NavigatorModalMenu";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function NavigatorModal() {
  const { closeModal } = useModal("navigation_modal");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClose = () => {
    const params = new URLSearchParams(searchParams);

    const input = document.getElementById("navigation_search") as HTMLInputElement;

    if (input) input.value = "";
    params.delete("query");
    replace(`${pathname}?${params.toString()}`);
    
    closeModal();
  };

  return (
    <dialog id="navigation_modal" className="modal" onClose={handleClose}>
      <div className="modal-box p-0 bg-base-300/40 backdrop-blur-3xl overflow-hidden">
        <Suspense fallback={null}>
          <NavigatorModalSearch />
          <NavigatorModalMenu />
        </Suspense>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
