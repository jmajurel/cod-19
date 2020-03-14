import React, { useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import FirstStepScreening from "./FirstStepScreening";
import PotentialSickCase from "./PotentialSickCase";
import AllGood from "./AllGood";

const Screening = () => {
  const [symptopms, setSymptopms] = useState([]);
  let history = useHistory();
  let { path } = useRouteMatch();
  function handleSubmit(newSymptopms) {
    setSymptopms(newSymptopms);
    newSymptopms.length > 0
      ? history.push(`${path}/secondStep`)
      : history.push(`${path}/allGood`);
  }

  return (
    <div>
      <Switch>
        <Route exact path={`${path}`}>
          <FirstStepScreening onSubmit={handleSubmit} />
        </Route>
        <Route path={`${path}/secondStep`}>
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
