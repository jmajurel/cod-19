import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FormattedMessage } from "react-intl";

const Home = () => (
  <div className="home card">
    <div className="cardContent">
      <h1>
        <FormattedMessage
          id="Home.mainMessage"
          defaultMessage="COVID-19 Screening website"
        />
      </h1>
      <h2>Keep calm and start the screening process</h2>
      <Link className="link" to="/screening">
        Let's do it
        <i className="fas fa-rocket" />
      </Link>
    </div>
  </div>
);

export default Home;
