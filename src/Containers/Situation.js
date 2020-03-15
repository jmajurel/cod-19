import React, { useState, useEffect } from "react";
import situationService from "../Services/situationService";
import * as d3 from "d3";

const Situation = () => {
  const [situations, setSituations] = useState([]);
  const width = 400;
  const height = width;
  const margin = 10;
  const padding = 10;
  useEffect(() => {
    const abortController = new AbortController();
    function handleSituationsChange(newSituations) {
      setSituations(newSituations);
    }

    situationService
      .getAllSituation(abortController.signal)
      .then(handleSituationsChange)
      .catch(err => console.log("error: " + err));
    return () => abortController.abort;
  }, [situations]);

  //useEffect(() => {
  const svg = d3.select("svg.graph").attr("viewBox", [0, 0, width, height]);
  const dataXRange = d3.extent(situations, d => d.timeStamp);
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(situations, d => d.activeCase)])
    .nice()
    .range([height - margin, margin]);

  const x = d3
    .scaleTime()
    .domain(dataXRange)
    .range([margin, width - margin])
    .nice();
  //.ticks(3);

  svg
    .append("g")
    .attr("fill", "steelblue")
    .selectAll("rect")
    .data(situations)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * (20 + 10))
    .attr("y", d => y(d.activeCase))
    .attr("height", d => y(0) - y(d.activeCase))
    .attr("width", 10);

  /*svg
      .append("g")
      .attr("fill", "steelblue")
      .selectAll("rect")
      .data(situations)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.value))
      .attr("height", d => y(0) - y(d.value))
      .attr("width", x.bandwidth());*/
  //});

  return (
    <div>
      {situations.length}
      <svg
        style={{ border: "2px solid orange" }}
        fill="red"
        className="graph"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Situation;
