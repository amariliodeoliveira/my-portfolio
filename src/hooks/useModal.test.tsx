// @vitest-environment jsdom

import { act, render, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import useModal, { MODAL_CLOSE_EVENT, MODAL_OPEN_EVENT } from "./useModal";

describe("useModal", () => {
  it("closes an existing dialog and announces the modal event", () => {
    const close = vi.fn();
    const onModalClose = vi.fn();

    globalThis.addEventListener(MODAL_CLOSE_EVENT, onModalClose);

    try {
      render(
        <dialog
          id="test_modal"
          ref={(dialog) => {
            if (dialog) dialog.close = close;
          }}
        />,
      );
      const { result } = renderHook(() => useModal("test_modal"));

      act(() => {
        result.current.closeModal();
      });

      expect(close).toHaveBeenCalledOnce();
      expect(onModalClose).toHaveBeenCalledOnce();
      expect(onModalClose.mock.calls[0]?.[0]).toMatchObject({
        detail: { modalId: "test_modal" },
      });
    } finally {
      globalThis.removeEventListener(MODAL_CLOSE_EVENT, onModalClose);
    }
  });

  it("does not announce open or close events when the dialog is absent", () => {
    const onModalOpen = vi.fn();
    const onModalClose = vi.fn();
    const { result } = renderHook(() => useModal("missing_modal"));

    globalThis.addEventListener(MODAL_OPEN_EVENT, onModalOpen);
    globalThis.addEventListener(MODAL_CLOSE_EVENT, onModalClose);

    try {
      act(() => {
        result.current.openModal();
        result.current.closeModal();
      });

      expect(onModalOpen).not.toHaveBeenCalled();
      expect(onModalClose).not.toHaveBeenCalled();
    } finally {
      globalThis.removeEventListener(MODAL_OPEN_EVENT, onModalOpen);
      globalThis.removeEventListener(MODAL_CLOSE_EVENT, onModalClose);
    }
  });
});
