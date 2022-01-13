import React from "react";
import Footer from "./Footer";
import { render, screen } from "../test-units";
import frenchTranslation from "../translations/french.json";

it("displays right info", () => {
  render(<Footer />);
  const note = screen.getByText(frenchTranslation.translation.footer.note);
  expect(note).toBeTruthy();
});
