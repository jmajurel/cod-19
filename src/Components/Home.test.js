import React from "react";
import Home from "./Home";
import { render, screen } from "../test-units";
import frenchTranslation from "../translations/french.json";

it("displays content", () => {
  render(<Home />);
  const title = screen.getByText(frenchTranslation.translation.home.title);
  expect(title.textContent).not.toBeNull();
});
