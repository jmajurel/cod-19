import React from "react";
import { withTranslation } from "react-i18next";
import "./FirstStepScreeming.css";

class FirstStepScreening extends React.Component {
  constructor(props) {
    super(props);
    //const { symptoms, t, i18n } = this.props;
    this.state = {
      selectedSymptoms: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.selectedSymptoms);
  };

  handleChange = event => {
    const newSymptom = event.target.value;
    const isActive = event.target.checked;
    let selectedSymptoms = [...this.state.selectedSymptoms];
    const foundItemIdx = selectedSymptoms.findIndex(
      symptom => symptom === newSymptom
    );
    if (isActive) {
      if (foundItemIdx < 0) selectedSymptoms.push(newSymptom);
    } else {
      if (foundItemIdx >= 0)
        selectedSymptoms = selectedSymptoms.filter(
          symptom => symptom !== newSymptom
        );
    }
    this.setState({
      selectedSymptoms
    });
  };

  render() {
    const smileys = {
      Fever: "🤒",
      "Sore throat": "😩",
      "Runny nose": "🤧",
      Vomiting: "🤮",
      Cough: "😤",
      "Shortness of breath": "😤",
      Nausea: "🤢",
      Diarrhoea: "😩"
    };
    return (
      <div className="card firstStepScreening">
        <h1>{this.props.t("firstStepScreening.title")} </h1>
        <form onSubmit={this.handleSubmit}>
          <h3>{this.props.t("firstStepScreening.subTitle")}</h3>
          <ul className="symptoms">
            {this.props.symptoms &&
              this.props.symptoms.map(symptom => (
                <li key={symptom._id}>
                  <span aria-label={symptom.name} role="img">
                    {smileys[symptom.name] ? smileys[symptom.name] : "😵"}
                  </span>{" "}
                  {symptom.name}
                  <input
                    className="symptom"
                    type="checkbox"
                    name={symptom.name}
                    value={symptom.name}
                    onChange={this.handleChange}
                  />
                </li>
              ))}
          </ul>
          <button type="submit">
            {this.props.t("firstStepScreening.nextBtn")}
          </button>
        </form>
      </div>
    );
  }
}
export default withTranslation()(FirstStepScreening);
