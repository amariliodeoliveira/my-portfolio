export const closeModal = (modalId: string) => {
  const modal = document.getElementById(modalId) as HTMLDialogElement | null;
  if (modal) {
    modal.close();
  }
};
