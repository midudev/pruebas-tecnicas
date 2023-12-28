import { test, expect } from "vitest";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import App from "./App";

test("App should render without crashing", () => {
  const container = document.createElement("div");
  act(() => {
    createRoot(container).render(<App />);
  });

  expect(container.querySelector("header")).toBeDefined();
  expect(container.querySelector("main")).toBeDefined();
});
