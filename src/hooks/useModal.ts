"use client";

import { useCallback } from "react";

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
      }, 150);
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
