import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import AvailableBooks from "./AvailableBooks";

test("renders content", () => {
  const alreadyRead = ["978-1542461690"];
});

const component = render(<AvailableBooks alreadyRead={alreadyRead} />);

console.log(component);
