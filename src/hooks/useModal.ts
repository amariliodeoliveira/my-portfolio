"use client";

import { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

const useModal = (modalId: string) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      router.replace(pathname);

      const dialog = document.getElementById(
        modalId
      ) as HTMLDialogElement | null;
      if (dialog) {
        dialog.showModal();
      }
    },
    [modalId, router, pathname]
  );

  return handleClick;
};

export default useModal;
