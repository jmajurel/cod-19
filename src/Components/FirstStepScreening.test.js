import React from "react";
import FirstStepScreening from "./FirstStepScreening";
import { render, screen } from "../test-units";

it("displays symptoms", () => {
  const mockSymptoms = [
    { _id: 1, name: "Fever" },
    { _id: 2, name: "Sore throat" },
    { _id: 3, name: "Runny nose" },
  ];
  render(<FirstStepScreening symptoms={mockSymptoms} />);
  const symptom = screen.getByText(mockSymptoms[1].name);
  expect(symptom).toBeTruthy();
});
