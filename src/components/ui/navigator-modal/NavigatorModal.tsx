"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navigationLinks } from "@/config/navigation";
import { socialLinks } from "@/config/social";
import useModal, {
  MODAL_CLOSE_EVENT,
  MODAL_OPEN_EVENT,
} from "@/hooks/useModal";

import NavigatorModalMenu from "./NavigatorModalMenu";
import NavigatorModalSearch from "./NavigatorModalSearch";

// Mirrors the flattening in NavigatorModalMenu: only real, navigable routes
// are eligible for a single-key shortcut.
const shortcutLinks = navigationLinks.flatMap(
  (link) => link.sublinks ?? [link],
);

// Matches the modal's closing transition, so the query only clears once it's
// no longer visible.
const QUERY_RESET_DELAY_MS = 300;
const SEARCH_INPUT_FOCUS_DELAY_MS = 150;

// Selects every focusable row inside the modal box (search input + menu
// links/buttons), in the order they appear on screen.
const FOCUSABLE_SELECTOR = "input, a[href], button";
const NAVIGATION_MODAL_ID = "navigation_modal";

type ModalLifecycleEvent = CustomEvent<{ modalId: string }>;

export default function NavigatorModal() {
  const router = useRouter();
  const { closeModal } = useModal(NAVIGATION_MODAL_ID);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [openRenderKey, setOpenRenderKey] = useState(0);
  const modalBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = document.querySelector<HTMLDialogElement>(
      `#${NAVIGATION_MODAL_ID}`,
    );

    queueMicrotask(() => {
      if (!modal?.open) return;

      setIsOpen(true);
      setOpenRenderKey((key) => key + 1);
    });

    const handleOpen = (event: Event) => {
      const { modalId } = (event as ModalLifecycleEvent).detail;
      if (modalId !== NAVIGATION_MODAL_ID) return;

      setIsOpen(true);
      setOpenRenderKey((key) => key + 1);
    };

    const handleExternalClose = (event: Event) => {
      const { modalId } = (event as ModalLifecycleEvent).detail;
      if (modalId !== NAVIGATION_MODAL_ID) return;

      setIsOpen(false);
    };

    globalThis.addEventListener(MODAL_OPEN_EVENT, handleOpen);
    globalThis.addEventListener(MODAL_CLOSE_EVENT, handleExternalClose);

    return () => {
      globalThis.removeEventListener(MODAL_OPEN_EVENT, handleOpen);
      globalThis.removeEventListener(MODAL_CLOSE_EVENT, handleExternalClose);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const focusTimeout = globalThis.setTimeout(() => {
      const input = modalBoxRef.current?.querySelector(
        'input[type="search"]',
      ) as HTMLInputElement | null;
      input?.focus();
    }, SEARCH_INPUT_FOCUS_DELAY_MS);

    return () => globalThis.clearTimeout(focusTimeout);
  }, [isOpen, openRenderKey]);

  const handleClose = () => {
    setIsOpen(false);

    setTimeout(() => {
      setQuery("");
    }, QUERY_RESET_DELAY_MS);
  };

  const moveFocus = (direction: 1 | -1) => {
    const modalBox = modalBoxRef.current;
    if (!modalBox) return;

    const items = [
      ...modalBox.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    ];
    if (items.length === 0) return;

    const currentIndex = items.indexOf(document.activeElement as HTMLElement);
    const nextIndex = (currentIndex + direction + items.length) % items.length;
    items.at(nextIndex)?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    // Arrow keys move focus between rows regardless of where focus currently
    // is (including the search box), so the modal doesn't get "stuck" there.
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      moveFocus(e.key === "ArrowDown" ? 1 : -1);
      return;
    }

    // Shortcuts never fire while the search box has focus, so they can never
    // hijack a keystroke meant for the query (e.g. typing "home").
    const target = e.target as HTMLElement;
    if (target.tagName === "INPUT" || e.ctrlKey || e.metaKey || e.altKey) {
      return;
    }

    const key = e.key.toLowerCase();
    if (key.length !== 1) return;

    if (key === "c") {
      e.preventDefault();
      void navigator.clipboard.writeText(globalThis.location.href);
      closeModal();
      return;
    }

    const socialMatch = socialLinks.find((link) => link.kbd === key);
    if (socialMatch) {
      e.preventDefault();
      closeModal();
      globalThis.open(socialMatch.href, "_blank", "noopener,noreferrer");
      return;
    }

    const navMatch = shortcutLinks.find((link) => link.kbd === key);
    if (navMatch) {
      e.preventDefault();
      closeModal();

      if (navMatch.openInNewTab) {
        globalThis.open(navMatch.href, "_blank", "noopener,noreferrer");
        return;
      }

      router.push(navMatch.href);
    }
  };

  return (
    <dialog
      id={NAVIGATION_MODAL_ID}
      className="modal"
      onClose={handleClose}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={modalBoxRef}
        className="modal-box bg-base-300/40 overflow-hidden p-0 backdrop-blur-3xl"
      >
        {isOpen && (
          <div key={openRenderKey}>
            <NavigatorModalSearch query={query} setQuery={setQuery} />
            <NavigatorModalMenu query={query} />
          </div>
        )}
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
