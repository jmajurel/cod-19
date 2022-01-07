import React from "react";
import Protection from "./Protection";
import { render, screen } from "../test-units";
import frenchTranslation from "../translations/french.json";

it("renders some info", () => {
  render(<Protection />);
  const title = screen.getByText(
    frenchTranslation.translation.protection.title
  );
  expect(title).toBeTruthy();
});
