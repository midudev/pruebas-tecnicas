import { render } from "@testing-library/react";
import Badge from "./Badge";

describe(Badge, () => {
  it("badge should not be display if show prop is disabled", () => {
    const {} = render(<Badge number={5} show={false} />);
  });
});
