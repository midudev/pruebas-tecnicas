import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Title } from "../AppTitles";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Library />);

  // ACT
  await userEvent.click(screen.getByText("Load Greeting"));
  await screen.findByRole("heading");

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});
