// @vitest-environment jsdom

import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";

import { PIXI_FIREWORKS_REPOSITORY_URL } from "@/config/pixiFireworks";

import PixiFireworksUnavailable from "./PixiFireworksUnavailable";

it("exposes the recovery actions in the intended order", () => {
  render(<PixiFireworksUnavailable />);

  const actions = within(
    screen.getByRole("group", { name: "Demo recovery actions" }),
  ).getAllByRole("link");

  expect(actions).toHaveLength(2);
  expect(actions[0]).toHaveAccessibleName("View repository");
  expect(actions[0]).toHaveAttribute("href", PIXI_FIREWORKS_REPOSITORY_URL);
  expect(actions[0]).toHaveAttribute("target", "_blank");
  expect(actions[0]).toHaveAttribute("rel", "noopener noreferrer");
  expect(actions[1]).toHaveAccessibleName("Go back to home");
  expect(actions[1]).toHaveAttribute("href", "/");
});
