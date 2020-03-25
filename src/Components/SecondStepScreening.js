import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./SecondStepScreening.css";

const SecondStepScreening = ({ onSubmit, preConditions }) => {
  const [t, i18n] = useTranslation();
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
      <h2>{t("secondStepScreening.title")}</h2>
      <form onSubmit={handleSubmit}>
        <ul className="formGroup">
          <li className="formItem">
            <label forhtml="genders">
              {t("secondStepScreening.genderSelection.label")} :
            </label>
            <select id="genders" onChange={e => setGender(e.target.value)}>
              <option value="men">
                {t("secondStepScreening.genderSelection.option1")}
              </option>
              <option value="woman">
                {t("secondStepScreening.genderSelection.option2")}
              </option>
              <option value="other">
                {t("secondStepScreening.genderSelection.option3")}
              </option>
            </select>
            <label forhtml="age">{t("secondStepScreening.ageLabel")} :</label>
            <input
              id="age"
              type="number"
              min="0"
              onChange={e => setAge(e.target.value)}
            />
          </li>
          <li className="formItem">
            <label forhtml="conditions">
              {t("secondStepScreening.conditionsSelection.label")}
            </label>
            <select multiple id="conditions" onChange={handleConditionUpdate}>
              <option value="">
                {t("secondStepScreening.conditionsSelection.option1")}
              </option>
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
              {t("secondStepScreening.travelLabel")}
            </label>
            <input
              id="travel"
              type="checkbox"
              name="travel"
              onChange={e => setTravel(e.target.checked)}
            />
          </li>
        </ul>
        <button type="submit">{t("secondStepScreening.nextBtn")}</button>
      </form>
    </div>
  );
};

export default SecondStepScreening;
