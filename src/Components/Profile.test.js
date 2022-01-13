import React from "react";
import Profile from "./Profile";
import { render, screen, fireEvent } from "../test-units";

it("displays content", () => {
  const mockProfile = { firstName: "John", lastName: "Doe" };
  render(<Profile existingProfile={mockProfile} />);
  const firsNameField = screen.getByDisplayValue(mockProfile.firstName);
  expect(firsNameField).toBeTruthy();
});

it("does submit form", () => {
  const onSubmit = jest.fn();
  const mockProfile = { firstName: "John", lastName: "Doe" };
  render(<Profile existingProfile={mockProfile} onSubmit={onSubmit} />);
  const submitBtn = screen.getByRole("button");
  fireEvent.click(submitBtn);
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit.mock.calls[0][0]).toMatchObject(mockProfile);
});
