import React from "react";
import ReactDOM from "react-dom";
import AllGood from "./AllGood";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { render } from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <AllGood />
    </MemoryRouter>,
    div
  );
});

it("renders some info", () => {
  const container = document.createElement("div");
  act(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <AllGood />
        </MemoryRouter>
      </I18nextProvider>,
      container
    );
  });
  const generalSentence = container.querySelector("p");
  expect(generalSentence.textContent.length).toBeGreaterThan(0);
});
