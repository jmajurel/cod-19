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
    console.log("form submited: ", this.state);
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
              <span role="img">🤒</span> Fever
              <input
                className="symptom"
                type="checkbox"
                name="fever"
                value="fever"
                onChange={this.handleChange}
              />
            </li>
            <li>
              <span role="img">😫</span> Tiredness
              <input
                className="symptom"
                type="checkbox"
                name="tiredness"
                value="tiredness"
                onChange={this.handleChange}
              />
            </li>
            <li>
              <span role="img">🤯</span> Headache
              <input
                className="symptom"
                type="checkbox"
                name="headache"
                value="headache"
                onChange={this.handleChange}
              />
            </li>
            <li>
              <span role="img">😤</span> Breathing issue
              <input
                className="symptom"
                type="checkbox"
                name="breathingIssue"
                value="breathingIssue"
                onChange={this.handleChange}
              />
            </li>
            <li>
              <span role="img">🤧</span> Coughing/sore throat
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
