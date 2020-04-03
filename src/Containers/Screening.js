import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { getAllSymptoms } from "../Services/Health/symptomService";
import { getAllConditions } from "../Services/Health/conditionService";
import { postPatient } from "../Services/Patient/patientService";
import FirstStepScreening from "../Components/FirstStepScreening";
import SecondStepScreening from "../Components/SecondStepScreening";
import PotentialSickCase from "../Components/PotentialSickCase";

import AllGood from "../Components/AllGood";
import Loader from "../Components/Loader";

const Screening = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [symptoms, setSymptoms] = useState([]);
  const [preConditions, setPreConditions] = useState([]);
  const [selectedSymptoms, setselectedSymptoms] = useState([]);
  const [info, setInfo] = useState({});
  let history = useHistory();
  let { path } = useRouteMatch();

  useEffect(() => {
    setIsLoading(true);

    Promise.all([getAllSymptoms(), getAllConditions()])
      .then(results => {
        setSymptoms(results[0]);
        setPreConditions(results[1]);
      })
      .then(() => setIsLoading(false))
      .catch(console.error);
  }, []);

  function handleSubmit(newSymptoms) {
    setselectedSymptoms(newSymptoms);
    history.push(`${path}/secondStep`);
  }
  function handleStepTwo(info) {
    setInfo(info);
    postPatient({
      ...info,
      symptoms: [...selectedSymptoms]
    });
    selectedSymptoms.length > 0
      ? history.push(`${path}/potential`)
      : history.push(`${path}/allGood`);
  }
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Switch>
          <Route exact path={`${path}`}>
            <FirstStepScreening symptoms={symptoms} onSubmit={handleSubmit} />
          </Route>

          <Route path={`${path}/secondStep`}>
            <SecondStepScreening
              preConditions={preConditions}
              onSubmit={handleStepTwo}
            />
          </Route>

          <Route path={`${path}/potential`}>
            <PotentialSickCase />
          </Route>

          <Route path={`${path}/allGood`}>
            <AllGood />
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default Screening;
