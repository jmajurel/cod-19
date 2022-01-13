import React from "react";
import Loader from "./Loader";
import { render, screen } from "../test-units";

it("displays content", () => {
  render(<Loader />);
  const loader = screen.getByRole("loader");
  expect(loader).toBeTruthy();
});
