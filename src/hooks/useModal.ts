"use client";

import { useCallback } from "react";

export const MODAL_OPEN_EVENT = "modal:open";
export const MODAL_CLOSE_EVENT = "modal:close";

const dispatchModalEvent = (eventName: string, modalId: string) => {
  window.dispatchEvent(new CustomEvent(eventName, { detail: { modalId } }));
};

const useModal = (modalId: string) => {
  const getModal = useCallback(() => {
    return document.getElementById(modalId) as HTMLDialogElement | null;
  }, [modalId]);

  const openModal = useCallback(() => {
    const modal = getModal();

    if (modal) {
      modal.showModal();
      dispatchModalEvent(MODAL_OPEN_EVENT, modalId);
    }
  }, [getModal, modalId]);

  const closeModal = useCallback(() => {
    const modal = getModal();

    if (modal) {
      modal.close();
      dispatchModalEvent(MODAL_CLOSE_EVENT, modalId);
    }
  }, [getModal, modalId]);

  return { openModal, closeModal };
};

export default useModal;
