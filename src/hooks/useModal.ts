import { useCallback } from "react";

const useModal = (modalId: string) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const dialog = document.getElementById(
        modalId
      ) as HTMLDialogElement | null;

      if (dialog) {
        dialog.showModal();
      }
    },
    [modalId]
  );

  return handleClick;
};

export default useModal;
