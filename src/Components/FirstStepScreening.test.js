import React from "react";
import FirstStepScreening from "./FirstStepScreening";
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import { render } from "react-dom";

it("renders correctly", () => {
  const tree = renderer.create(<FirstStepScreening />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("displays symptoms", () => {
  const container = document.createElement("div");
  const mockSymptoms = [
    { _id: 1, name: "Fever" },
    { _id: 2, name: "Sore throat" },
    { _id: 3, name: "Runny nose" },
  ];

  act(() => {
    render(<FirstStepScreening symptoms={mockSymptoms} />, container);
  });
  const symptomList = container.querySelector("li");
  expect(mockSymptoms.map((symptom) => symptom.name)).toContain(
    symptomList.textContent.slice(3)
  );
});
