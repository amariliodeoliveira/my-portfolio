// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";

import { MODAL_OPEN_EVENT } from "@/hooks/useModal";

import KbdMenuButton from "./KbdMenuButton";

it("opens the navigation dialog and announces the modal event", async () => {
  const user = userEvent.setup();
  const showModal = vi.fn();
  const onModalOpen = vi.fn();

  globalThis.addEventListener(MODAL_OPEN_EVENT, onModalOpen);

  try {
    render(
      <>
        <KbdMenuButton />
        <dialog
          id="navigation_modal"
          ref={(dialog) => {
            if (dialog) dialog.showModal = showModal;
          }}
        />
      </>,
    );

    await user.click(
      screen.getByRole("button", { name: /press ctrl\+k to start/i }),
    );

    expect(showModal).toHaveBeenCalledOnce();
    expect(onModalOpen).toHaveBeenCalledOnce();
    expect(onModalOpen.mock.calls[0]?.[0]).toMatchObject({
      detail: { modalId: "navigation_modal" },
    });
  } finally {
    globalThis.removeEventListener(MODAL_OPEN_EVENT, onModalOpen);
  }
});
