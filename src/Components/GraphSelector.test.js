import React from "react";
import GraphSelector from "./GraphSelector";
import { render, screen } from "../test-units";

it("displays label", () => {
  const mockLabel = "Selection label";
  render(<GraphSelector label={mockLabel} />);
  const label = screen.getByText(mockLabel);
  expect(label).toBeTruthy();
});

/*it("reacts to userEvent", () => {
  const onChange = jest.fn();
  const container = document.createElement("div");
  act(() => {
    render(<GraphSelector handleChange={onChange} />, container);
  });
});
*/
