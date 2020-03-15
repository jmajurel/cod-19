import React, { useState } from "react";
import "./SecondStepScreening.css";

const SecondStepScreening = ({ onSubmit }) => {
  const [gender, setGender] = useState("men");
  const [age, setAge] = useState();
  const [travel, setTravel] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ gender, age, travel });
  }
  return (
    <div className="secondStepScreeming card">
      <form onSubmit={handleSubmit}>
        <ul className="formGroup">
          <li className="formItem">
            <label forhtml="genders">Gender:</label>
            <select id="genders" onChange={e => setGender(e.target.value)}>
              <option value="men">Men</option>
              <option value="woman">Woman</option>
              <option value="other">Other</option>
            </select>
          </li>
          <li className="formItem">
            <label forhtml="age">Age:</label>
            <input
              id="age"
              type="number"
              min="0"
              onChange={e => setAge(e.target.value)}
            />
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
