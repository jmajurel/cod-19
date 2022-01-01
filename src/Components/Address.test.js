import React from "react";
import Address from "./Address";
import renderer from "react-test-renderer";
import { render, unmountComponentAtNode } from "react-dom";
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

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

test("display", () => {
  const component = renderer.create(<Address />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders with an address", () => {
  const mockAddress = { address1: "192 burnaby road" };
  act(() => {
    render(<Address existingAddress={mockAddress} />, container);
  });
  const label = container.querySelector("label");
  console.log("label.textContent: ", label.textContent);
  expect(label.textContent).toContain("Address");
});
