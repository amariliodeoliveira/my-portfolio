"use client";

import { useCallback } from "react";

// Gives the browser's open-dialog transition/animation time to finish before
// we steal focus, so the search input doesn't jump while it's still animating in.
const SEARCH_INPUT_FOCUS_DELAY_MS = 150;

const useModal = (modalId: string) => {
  const getModal = useCallback(() => {
    return document.getElementById(modalId) as HTMLDialogElement | null;
  }, [modalId]);

  const openModal = useCallback(() => {
    const modal = getModal();

    if (modal) {
      modal.showModal();

      setTimeout(() => {
        const input = modal.querySelector(
          'input[type="search"]',
        ) as HTMLInputElement | null;
        input?.focus();
      }, SEARCH_INPUT_FOCUS_DELAY_MS);
    }
  }, [getModal]);

  const closeModal = useCallback(() => {
    const modal = getModal();

    if (modal) {
      modal.close();
    }
  }, [getModal]);

  return { openModal, closeModal };
};

export default useModal;
