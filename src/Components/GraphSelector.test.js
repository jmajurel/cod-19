import React from "react";
import GraphSelector from "./GraphSelector";
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import { render } from "react-dom";

it("renders correctly", () => {
  const tree = renderer.create(<GraphSelector />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("displays label", () => {
  const mockLabel = "Selection label";
  const container = document.createElement("div");
  act(() => {
    render(<GraphSelector label={mockLabel} />, container);
  });

  const label = container.querySelector("label");
  expect(label.textContent).toMatch(mockLabel);
});
