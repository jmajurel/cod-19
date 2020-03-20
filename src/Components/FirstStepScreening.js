import React from "react";
import "./FirstStepScreeming.css";

class FirstStepScreening extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.symptoms);
  };

  handleChange = event => {
    const newSymptom = event.target.value;
    const isActive = event.target.checked;
    let symptoms = [...this.state.symptoms];
    const foundItemIdx = symptoms.findIndex(symptom => symptom === newSymptom);
    if (isActive) {
      if (foundItemIdx < 0) symptoms.push(newSymptom);
    } else {
      if (foundItemIdx >= 0)
        symptoms = symptoms.filter(symptom => symptom !== newSymptom);
    }
    this.setState({
      symptoms
    });
  };

  render() {
    return (
      <div className="card firstStepScreening">
        <h1>First Step </h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Choose your symptoms (if any):</h3>
          <ul className="symptoms">
            <li>
              <span aria-label="fever" role="img">
                🤒
              </span>{" "}
              Fever
              <input
                className="symptom"
                type="checkbox"
                name="fever"
                value="fever"
                onChange={this.handleChange}
              />
            </li>
            <li>
              <span aria-label="tired" role="img">
                😫
              </span>{" "}
              Tiredness
              <input
                className="symptom"
                type="checkbox"
                name="tiredness"
                value="tiredness"
                onChange={this.handleChange}
              />
            </li>
            <li>
              <span aria-label="headache" role="img">
                🤯
              </span>{" "}
              Headache
              <input
                className="symptom"
                type="checkbox"
                name="headache"
                value="headache"
                onChange={this.handleChange}
              />
            </li>
            <li>
              <span aria-label="breathing issue" role="img">
                😤
              </span>{" "}
              Breathing issue
              <input
                className="symptom"
                type="checkbox"
                name="breathingIssue"
                value="breathingIssue"
                onChange={this.handleChange}
              />
            </li>
            <li>
              <span aria-label="cough sore throat" role="img">
                🤧
              </span>{" "}
              Coughing/sore throat
              <input
                className="symptom"
                type="checkbox"
                name="coughingSoreThroat"
                value="coughingSoreThroat"
                onChange={this.handleChange}
              />
            </li>
          </ul>
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}
export default FirstStepScreening;
