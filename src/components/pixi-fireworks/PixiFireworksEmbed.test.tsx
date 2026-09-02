// @vitest-environment jsdom

import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";

import PixiFireworksEmbed from "./PixiFireworksEmbed";

afterEach(() => {
  vi.useRealTimers();
});

it("keeps the embedded demo unavailable until its iframe loads", () => {
  render(<PixiFireworksEmbed />);

  const frame = screen.getByTitle("PixiJS fireworks interactive demo");
  const container = frame.parentElement;

  expect(container).toHaveAttribute("aria-busy", "true");
  expect(frame).toHaveAttribute("tabindex", "-1");
  expect(screen.getByRole("status")).toHaveTextContent("Loading PixiJS demo");

  fireEvent.load(frame);

  expect(container).toHaveAttribute("aria-busy", "false");
  expect(frame).not.toHaveAttribute("tabindex");
  expect(screen.queryByRole("status")).not.toBeInTheDocument();
});

it("announces an iframe network error instead of leaving a broken embed", async () => {
  render(<PixiFireworksEmbed />);

  const frame = screen.getByTitle("PixiJS fireworks interactive demo");

  fireEvent(frame, new Event("error", { bubbles: true }));

  await waitFor(() => {
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Unable to load the embedded PixiJS demo",
    );
  });
  expect(
    screen.queryByTitle("PixiJS fireworks interactive demo"),
  ).not.toBeInTheDocument();
  expect(screen.queryByRole("status")).not.toBeInTheDocument();
});

it("stops waiting when the iframe never finishes loading", async () => {
  vi.useFakeTimers();
  render(<PixiFireworksEmbed />);

  act(() => {
    vi.advanceTimersByTime(10_000);
  });

  expect(screen.getByRole("alert")).toHaveTextContent(
    "Unable to load the embedded PixiJS demo",
  );
});
