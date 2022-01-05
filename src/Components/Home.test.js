import React from "react";
import Home from "./Home";
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
let container = null;

beforeEach(() => {
  container = document.createElement(
    <I18nextProvider i18n={i18n}>
      <MemoryRouter></MemoryRouter>
    </I18nextProvider>
  );
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

/*it("renders correctly", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});*/

it("displays content", () => {
  act(() => {
    render(<Home />, container);
  });
  const title = container.querySelector("h1");
  console.log(title.textContent);
  expect(title.textContent).not.toBeNull();
});
