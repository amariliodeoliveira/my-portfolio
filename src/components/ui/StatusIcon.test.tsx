// @vitest-environment jsdom

import { act, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";

import StatusIcon from "./StatusIcon";

vi.mock("@iconify/react", () => ({
  Icon: ({ icon, ...props }: { icon: string }) => (
    <span data-testid="status-icon" data-icon={icon} {...props} />
  ),
}));

afterEach(() => {
  vi.useRealTimers();
});

it("plays the animated icon only during the entrance period", () => {
  vi.useFakeTimers();

  render(
    <StatusIcon
      icon="line-md:alert-circle"
      animatedIcon="line-md:alert-circle-loop"
      className="text-warning"
    />,
  );

  const icon = screen.getByTestId("status-icon");

  expect(icon).toHaveAttribute("data-icon", "line-md:alert-circle");

  act(() => {
    vi.advanceTimersByTime(0);
  });

  expect(icon).toHaveAttribute("data-icon", "line-md:alert-circle-loop");

  act(() => {
    vi.advanceTimersByTime(1000);
  });

  expect(icon).toHaveAttribute("data-icon", "line-md:alert-circle");
});
