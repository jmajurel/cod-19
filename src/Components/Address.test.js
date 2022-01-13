import React from "react";
import Address from "./Address";
import { render, screen, fireEvent } from "../test-units";
import englishTranslations from "../translations/english.json";

it("renders with an address", () => {
  const mockAddress = { address1: "192 burnaby road" };
  render(<Address existingAddress={mockAddress} />);
  const input = screen.getByDisplayValue(mockAddress.address1);
  expect(input).toBeTruthy();
});

it("reacts when user makes an address update", () => {
  const onChange = jest.fn();
  const mockAddress = { address1: "192 burnaby road", country: "UK" };
  render(<Address existingAddress={mockAddress} onChange={onChange} />);
  const countryInput = screen.getByDisplayValue(mockAddress.country);
  const newCountry = "Australia";
  fireEvent.change(countryInput, { target: { value: newCountry } });
  expect(countryInput.value).toBe(newCountry);

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange.mock.calls[0][0]).toEqual({
    ...mockAddress,
    country: newCountry,
  });
});

/*it("displays in the right language", () => {
  const mockAddress = { address1: "192 burnaby road", country: "UK" };
  const languageGetter = jest.spyOn(window.navigator, "language", "get");
  languageGetter.mockReturnValue("en");
  render(<Address existingAddress={mockAddress} />);
  var cityLabel = screen.getByLabelText(
    englishTranslations.translation.profile.address.cityLabel
  );
  expect(cityLabel.textContent).toBeTruthy();
});*/
