"use client";

import { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

const useModal = (modalId: string) => {
  const router = useRouter();
  const pathname = usePathname();

  const getModal = useCallback(() => {
    return document.getElementById(modalId) as HTMLDialogElement | null;
  }, [modalId]);

  const openModal = useCallback(() => {
    router.replace(pathname);
    const modal = getModal();

    if (modal) {
      modal.showModal();

      setTimeout(() => {
        const input = modal.querySelector('input[type="search"]') as HTMLInputElement | null;
        input?.focus();
      }, 150);
    }
  }, [getModal, router, pathname]);

  const closeModal = useCallback(() => {
    const modal = getModal();

    if (modal) {
      modal.close();
    }
  }, [getModal]);

  return { openModal, closeModal };
};

export default useModal;
