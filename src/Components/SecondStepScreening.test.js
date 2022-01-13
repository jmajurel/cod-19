import React from "react";
import SecondStepScreening from "./SecondStepScreening";
import { render, screen, fireEvent } from "../test-units";
import frenchTranslation from "../translations/french.json";

it("renders some info", () => {
  render(<SecondStepScreening />);
  const title = screen.getByText(
    frenchTranslation.translation.secondStepScreening.title
  );
  expect(title).toBeTruthy();
});

it("handles submitting", () => {
  const onSubmit = jest.fn();
  render(<SecondStepScreening onSubmit={onSubmit} />);
  const checkbox = screen.getByRole("checkbox");
  fireEvent.change(checkbox, { target: { value: true } });

  expect(checkbox.value).toBeTruthy();

  const submitBtn = screen.getByRole("button");
  fireEvent.click(submitBtn);
  expect(onSubmit).toHaveBeenCalledTimes(1);
  //console.dir(onSubmit.mock.calls[0][0]);
  //expect(onSubmit.mock.calls[0][0].travel).toBeTruthy();
});
