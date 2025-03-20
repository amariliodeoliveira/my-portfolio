"use client";

import React, { Suspense } from "react";

import { closeModal } from "@/utils/modal";

import NavigatorModalSearch from "./NavigatorModalSearch";
import NavigatorModalMenu from "./NavigatorModalMenu";

export default function NavigatorModal() {
  return (
    <dialog
      id="navigation_modal"
      className="modal"
      onClose={() => closeModal("navigation_modal")}
    >
      <div className="modal-box p-0 bg-base-300/40 backdrop-blur-3xl overflow-hidden">
        <Suspense fallback={<p>Loading...</p>}>
          <NavigatorModalSearch />
        </Suspense>

        <Suspense fallback={<p>Loading...</p>}>
          <NavigatorModalMenu />
        </Suspense>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
