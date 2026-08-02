"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { navigationLinks } from "@/config/navigation";
import { socialLinks } from "@/config/social";
import useModal from "@/hooks/useModal";

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

// Selects every focusable row inside the modal box (search input + menu
// links/buttons), in the order they appear on screen.
const FOCUSABLE_SELECTOR = "input, a[href], button";

export default function NavigatorModal() {
  const router = useRouter();
  const { closeModal } = useModal("navigation_modal");
  const [query, setQuery] = useState("");
  const modalBoxRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    closeModal();

    setTimeout(() => {
      setQuery("");
    }, QUERY_RESET_DELAY_MS);
  };

  const moveFocus = (direction: 1 | -1) => {
    const modalBox = modalBoxRef.current;
    if (!modalBox) return;

    const items = Array.from(
      modalBox.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    );
    if (items.length === 0) return;

    const currentIndex = items.indexOf(document.activeElement as HTMLElement);
    const nextIndex = (currentIndex + direction + items.length) % items.length;
    items[nextIndex]?.focus();
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
      navigator.clipboard.writeText(window.location.href);
      closeModal();
      return;
    }

    const socialMatch = socialLinks.find((link) => link.kbd === key);
    if (socialMatch) {
      e.preventDefault();
      closeModal();
      window.open(socialMatch.href, "_blank", "noopener,noreferrer");
      return;
    }

    const navMatch = shortcutLinks.find((link) => link.kbd === key);
    if (navMatch) {
      e.preventDefault();
      closeModal();
      router.push(navMatch.href);
    }
  };

  return (
    <dialog
      id="navigation_modal"
      className="modal"
      onClose={handleClose}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={modalBoxRef}
        className="modal-box bg-base-300/40 overflow-hidden p-0 backdrop-blur-3xl"
      >
        <NavigatorModalSearch query={query} setQuery={setQuery} />
        <NavigatorModalMenu query={query} />
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
