import React from "react";
import AllGood from "./AllGood";
import { render, screen } from "../test-units";
import frenchTranslation from "../translations/french.json";

it("renders some info", () => {
  render(<AllGood />);
  const title = screen.getByText(frenchTranslation.translation.allGood.title);
  expect(title.textContent).toBe(frenchTranslation.translation.allGood.title);
});
