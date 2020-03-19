import React, { useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import FirstStepScreening from "../Components/FirstStepScreening";
import SecondStepScreening from "../Components/SecondStepScreening";
import PotentialSickCase from "../Components/PotentialSickCase";

import AllGood from "../Components/AllGood";

const Screening = () => {
  const [symptopms, setSymptopms] = useState([]);
  const [info, setInfo] = useState({});
  let history = useHistory();
  let { path } = useRouteMatch();
  function handleSubmit(newSymptopms) {
    setSymptopms(newSymptopms);
    history.push(`${path}/secondStep`);
  }
  function handleStepTwo(info) {
    setInfo(info);
    symptopms.length > 0
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
