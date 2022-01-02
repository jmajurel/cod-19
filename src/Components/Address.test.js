import React from "react";
import Address from "./Address";
import { render, unmountComponentAtNode } from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with an address", () => {
  const mockAddress = { address1: "192 burnaby road" };
  act(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Address existingAddress={mockAddress} />
      </I18nextProvider>,
      container
    );
  });
  const input = container.querySelector("input");
  expect(input.value).toBe(mockAddress.address1);
});
