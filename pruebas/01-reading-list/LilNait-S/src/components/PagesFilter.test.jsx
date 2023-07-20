/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { beforeEach, expect } from "vitest";
import PagesFilter from "./PagesFilter";

describe("PagesFilter", () => {
  beforeEach(() => {
    <PagesFilter
      progressPages=""
      handlePages=""
      setMinPages=""
      minPages=""
      maxPages=""
      setMaxPages=""
    >
      <input
        value="0"
        onChange="{}"
        type="range"
        min="0"
        max="1500"
      />
    </PagesFilter>;
  });

  test("should have 0", () => {
    expect(screen.getByText("0")).toBeDefined()
  });
});
