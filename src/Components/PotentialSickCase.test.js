import React from "react";
import PotentialSickCase from "./PotentialSickCase";
import { render, screen } from "../test-units";
import frenchTranslation from "../translations/french.json";

it("renders some info", () => {
  render(<PotentialSickCase />);
  const title = screen.getByText(
    frenchTranslation.translation.potentialSickCase.title
  );
  expect(title).toBeTruthy();
});
