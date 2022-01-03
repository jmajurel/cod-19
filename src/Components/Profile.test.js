import React from "react";
import Profile from "./Profile";
import { render, unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import renderer from "react-test-renderer";
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

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Profile />
        </I18nextProvider>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders with a profile", () => {
  const mockProfile = { firstName: "John" };
  act(() => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Profile existingProfile={mockProfile} />
        </I18nextProvider>
      </MemoryRouter>,
      container
    );
  });
  const input = container.querySelector("input[name=firstName]");
  expect(input.value).toBe(mockProfile.firstName);
});

it("reacts on submit", () => {
  const onSubmit = jest.fn();
  const mockProfile = { email: "john.doe@gmail.com", firstName: "John" };
  act(() => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Profile existingProfile={mockProfile} onSubmit={onSubmit} />
        </I18nextProvider>
      </MemoryRouter>,
      container
    );
  });

  const submitBtn = document.querySelector("button[type=submit]");

  //simulate user click on save btn
  act(() => {
    submitBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
