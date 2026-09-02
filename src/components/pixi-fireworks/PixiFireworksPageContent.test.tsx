// @vitest-environment jsdom

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, it, vi } from "vitest";

import PixiFireworksPageContent from "./PixiFireworksPageContent";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

it("renders the interactive demo before the iframe reports an error", () => {
  render(<PixiFireworksPageContent />);

  expect(
    screen.getByRole("heading", {
      name: "PixiJS Fireworks Presentation",
    }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "Demo unavailable" }),
  ).not.toBeInTheDocument();
});

it("shows the unavailable state when the iframe reports an error", async () => {
  render(<PixiFireworksPageContent />);

  fireEvent(
    screen.getByTitle("PixiJS fireworks interactive demo"),
    new Event("error", { bubbles: true }),
  );

  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: "Demo unavailable" }),
    ).toBeInTheDocument();
  });
});
