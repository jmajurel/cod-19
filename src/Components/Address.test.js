import React from "react";
import Address from "./Address";
import { render, screen } from "../test-units";

it("renders with an address", () => {
  const mockAddress = { address1: "192 burnaby road" };
  render(<Address existingAddress={mockAddress} />);
  const input = screen.getByDisplayValue(mockAddress.address1);
  expect(input).toBeTruthy();
});
