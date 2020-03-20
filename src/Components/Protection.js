import React from "react";
import "./Protection.css";

const Protection = () => (
  <div className="protection card">
    <h2>Protect yourself and other from COVID-19</h2>
    <div className="actions">
      <h3>
        By doing these actions you participate in limitating the virus speading
        in our countries and save lives
      </h3>
      <ol>
        <li>
          Wash your hands using soap{" "}
          <span role="img" aria-label="soap">
            🧼
          </span>
          <span aria-label="hand" role="img">
            👏
          </span>{" "}
          and/or hydroalcoholic gel{" "}
          <span aria-label="hydroalcolic gel" role="img">
            🧴
          </span>
        </li>
        <li>
          When coughing/sneezing{" "}
          <span role="img" aria-label="sneezing/coughing">
            🤧
          </span>{" "}
          please do it in a tissue or in elbow
        </li>
        <li>Use disposable tissue and through it away after usage</li>
        <li>
          Do not shackhand{" "}
          <span aria-label="stop" role="img">
            🚫
          </span>
          <span role="img" aria-label="handshack">
            🤝
          </span>{" "}
          and avoid huges
        </li>
      </ol>
    </div>

    <div className="transmission">
      <h3>How the virus spreads</h3>
      <p>The CPVID-19 virus mainly spread from splutters</p>
      <p>
        It is adviced to keep a distance of 1 meter between people to limit the
        spreading
      </p>
    </div>
  </div>
);

export default Protection;
