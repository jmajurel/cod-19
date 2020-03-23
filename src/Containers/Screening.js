import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { getAllSymptoms } from "../Services/Health/symptomService";
import FirstStepScreening from "../Components/FirstStepScreening";
import SecondStepScreening from "../Components/SecondStepScreening";
import PotentialSickCase from "../Components/PotentialSickCase";

import AllGood from "../Components/AllGood";

const Screening = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setselectedSymptoms] = useState([]);
  const [info, setInfo] = useState({});
  let history = useHistory();
  let { path } = useRouteMatch();

  useEffect(() => {
    getAllSymptoms()
      .then(res => {
        console.log(res);
        setSymptoms(res);
      })
      .catch(err => console.error(err));
  }, []);

  function handleSubmit(newSymptoms) {
    setselectedSymptoms(newSymptoms);
    history.push(`${path}/secondStep`);
  }
  function handleStepTwo(info) {
    setInfo(info);
    symptoms.length > 0
      ? history.push(`${path}/potential`)
      : history.push(`${path}/allGood`);
  }
  return (
    <div>
      <Switch>
        <Route exact path={`${path}`}>
          <FirstStepScreening onSubmit={handleSubmit} />
        </Route>

        <Route path={`${path}/secondStep`}>
          <SecondStepScreening onSubmit={handleStepTwo} />
        </Route>

        <Route path={`${path}/potential`}>
          <PotentialSickCase />
        </Route>

        <Route path={`${path}/allGood`}>
          <AllGood />
        </Route>
      </Switch>
    </div>
  );
};

export default Screening;
