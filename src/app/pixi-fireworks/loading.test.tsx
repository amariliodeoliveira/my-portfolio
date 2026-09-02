// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import Loading from "./loading";

it("renders a non-interactive skeleton with an accessible loading status", () => {
  const { container } = render(<Loading />);

  expect(screen.getByRole("status")).toHaveTextContent(
    "Loading PixiJS portfolio project",
  );
  expect(container.querySelector("section")).toHaveAttribute(
    "aria-hidden",
    "true",
  );
  expect(container.querySelector("a")).not.toBeInTheDocument();
  expect(container.querySelector("iframe")).not.toBeInTheDocument();
});
