"use client";

import { useRouter } from "next/navigation";
import {
  type Dispatch,
  type KeyboardEvent,
  type RefObject,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

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

type ModalOpenState = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setOpenRenderKey: Dispatch<SetStateAction<number>>;
};

type ShortcutActions = {
  closeModal: () => void;
  navigate: (href: string) => void;
};

function markModalAsOpen({ setIsOpen, setOpenRenderKey }: ModalOpenState) {
  setIsOpen(true);
  setOpenRenderKey((key) => key + 1);
}

function isNavigationModalEvent(event: Event) {
  return (event as ModalLifecycleEvent).detail.modalId === NAVIGATION_MODAL_ID;
}

function useModalLifecycle(
  setIsOpen: ModalOpenState["setIsOpen"],
  setOpenRenderKey: ModalOpenState["setOpenRenderKey"],
) {
  useEffect(() => {
    const openModal = { setIsOpen, setOpenRenderKey };
    const modal = document.querySelector<HTMLDialogElement>(
      `#${NAVIGATION_MODAL_ID}`,
    );

    queueMicrotask(() => {
      if (modal?.open) markModalAsOpen(openModal);
    });

    const handleOpen = (event: Event) => {
      if (isNavigationModalEvent(event)) markModalAsOpen(openModal);
    };

    const handleExternalClose = (event: Event) => {
      if (isNavigationModalEvent(event)) openModal.setIsOpen(false);
    };

    globalThis.addEventListener(MODAL_OPEN_EVENT, handleOpen);
    globalThis.addEventListener(MODAL_CLOSE_EVENT, handleExternalClose);

    return () => {
      globalThis.removeEventListener(MODAL_OPEN_EVENT, handleOpen);
      globalThis.removeEventListener(MODAL_CLOSE_EVENT, handleExternalClose);
    };
  }, [setIsOpen, setOpenRenderKey]);
}

function useSearchInputFocus(
  isOpen: boolean,
  openRenderKey: number,
  modalBoxRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const focusTimeout = isOpen
      ? globalThis.setTimeout(() => {
          const input = modalBoxRef.current?.querySelector<HTMLInputElement>(
            'input[type="search"]',
          );
          input?.focus();
        }, SEARCH_INPUT_FOCUS_DELAY_MS)
      : undefined;

    return () => {
      if (focusTimeout !== undefined) globalThis.clearTimeout(focusTimeout);
    };
  }, [isOpen, modalBoxRef, openRenderKey]);
}

function getFocusDirection(key: string): 1 | -1 | null {
  if (key === "ArrowDown") return 1;
  if (key === "ArrowUp") return -1;
  return null;
}

function moveFocus(modalBox: HTMLDivElement | null, direction: 1 | -1) {
  const items = modalBox
    ? [...modalBox.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)]
    : [];

  if (items.length > 0) {
    const currentIndex = items.indexOf(document.activeElement as HTMLElement);
    const nextIndex = (currentIndex + direction + items.length) % items.length;
    items.at(nextIndex)?.focus();
  }
}

function isShortcutAllowed(event: KeyboardEvent<HTMLDialogElement>) {
  const target = event.target as HTMLElement;
  const hasModifier = [event.ctrlKey, event.metaKey, event.altKey].some(
    Boolean,
  );

  if (target.tagName === "INPUT") return false;
  if (hasModifier) return false;

  return event.key.length === 1;
}

function handleShortcut(
  event: KeyboardEvent<HTMLDialogElement>,
  { closeModal, navigate }: ShortcutActions,
) {
  const key = event.key.toLowerCase();
  const socialMatch = socialLinks.find((link) => link.kbd === key);
  const navMatch = shortcutLinks.find((link) => link.kbd === key);

  if (key === "c") {
    event.preventDefault();
    void navigator.clipboard.writeText(globalThis.location.href);
    closeModal();
  } else if (socialMatch) {
    event.preventDefault();
    closeModal();
    globalThis.open(socialMatch.href, "_blank", "noopener,noreferrer");
  } else if (navMatch) {
    event.preventDefault();
    closeModal();

    if (navMatch.openInNewTab) {
      globalThis.open(navMatch.href, "_blank", "noopener,noreferrer");
    } else {
      navigate(navMatch.href);
    }
  }
}

export default function NavigatorModal() {
  const router = useRouter();
  const { closeModal } = useModal(NAVIGATION_MODAL_ID);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [openRenderKey, setOpenRenderKey] = useState(0);
  const modalBoxRef = useRef<HTMLDivElement>(null);

  useModalLifecycle(setIsOpen, setOpenRenderKey);
  useSearchInputFocus(isOpen, openRenderKey, modalBoxRef);

  const handleClose = () => {
    setIsOpen(false);

    setTimeout(() => {
      setQuery("");
    }, QUERY_RESET_DELAY_MS);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    // Arrow keys move focus between rows regardless of where focus currently
    // is (including the search box), so the modal doesn't get "stuck" there.
    const focusDirection = getFocusDirection(event.key);

    // Shortcuts never fire while the search box has focus, so they can never
    // hijack a keystroke meant for the query (e.g. typing "home").
    if (focusDirection !== null) {
      event.preventDefault();
      moveFocus(modalBoxRef.current, focusDirection);
    } else if (isShortcutAllowed(event)) {
      handleShortcut(event, {
        closeModal,
        navigate: (href) => router.push(href),
      });
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
