import React from "react";
import "./GraphSelector.css";

const GraphSelector = ({ label, options, handleChange }) => {
  return (
    <div className="graphSelector">
      <label>{label} </label>
      <select onChange={handleChange}>
        {options.map((data, idx) => (
          <option key={idx} value={data}>
            {data}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GraphSelector;
