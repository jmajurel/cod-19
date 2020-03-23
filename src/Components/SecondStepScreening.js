import React, { useState } from "react";
import "./SecondStepScreening.css";

const SecondStepScreening = ({ onSubmit, preConditions }) => {
  const [gender, setGender] = useState("men");
  const [age, setAge] = useState();
  const [conditions, setConditions] = useState([]);
  const [travel, setTravel] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ gender, age, travel, conditions });
  }

  function handleConditionUpdate(event) {
    event.preventDefault();
    const options = event.target.options;
    const selectedConditions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) selectedConditions.push(options[i].value);
    }
    setConditions(selectedConditions);
  }

  return (
    <div className="secondStepScreeming card">
      <h2>Background information</h2>
      <form onSubmit={handleSubmit}>
        <ul className="formGroup">
          <li className="formItem">
            <label forhtml="genders">Gender:</label>
            <select id="genders" onChange={e => setGender(e.target.value)}>
              <option value="men">Men</option>
              <option value="woman">Woman</option>
              <option value="other">Other</option>
            </select>
            <label forhtml="age">Age:</label>
            <input
              id="age"
              type="number"
              min="0"
              onChange={e => setAge(e.target.value)}
            />
          </li>
          <li className="formItem">
            <label forhtml="conditions">
              Do you have any of these medical condition:
            </label>
            <select multiple id="conditions" onChange={handleConditionUpdate}>
              <option value="">None</option>
              {preConditions &&
                preConditions.map(precondition => (
                  <option key={precondition._id} value={precondition.name}>
                    {precondition.name}
                  </option>
                ))}
            </select>
          </li>
          <li className="formItem">
            <label forhtml="travel">
              Did you recently stay in any affected area?
            </label>
            <input
              id="travel"
              type="checkbox"
              name="travel"
              onChange={e => setTravel(e.target.checked)}
            />
          </li>
        </ul>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default SecondStepScreening;
