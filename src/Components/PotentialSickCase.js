import React from "react";

const PotentialSickCase = () => (
  <div className="card">
    <h2>
      <i className="fas fa-clipboard-list" />
      Result
    </h2>
    <p>Based on your screening result, you might have some chance to get it</p>
    <p>Please keep calm and goes through the following steps</p>
    <p>Firsly, please do no go straight to your local GP </p>
    <p>Contact the free help numbers dedicated to the coronavirus</p>
    <p>
      In france: <strong>+33 (0) 800 130 000</strong> (please note this number
      cannot give any medical advice) For medical advice, Call the{" "}
      <strong>15</strong> or <strong>114</strong>.
    </p>
    <p>
      Secondly, to protect other people please stay at home and limitate any
      contact with others.
    </p>
    <p>
      If possible, please wear a medical mask{" "}
      <span role="img" aria-label="face mask">
        😷
      </span>{" "}
      especially if you are coughing
    </p>
  </div>
);

export default PotentialSickCase;
