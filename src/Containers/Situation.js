import React, { useState, useEffect } from "react";
import situationService from "../Services/situationService";
import * as d3 from "d3";

const Situation = () => {
  const [situations, setSituations] = useState([]);
  const width = 800;
  const height = 400;
  useEffect(() => {
    function handleSituationsChange(newSituations) {
      setSituations([...newSituations]);
    }

    situationService
      .getAllSituation()
      .then(handleSituationsChange)
      .catch(err => console.log("error: " + err));
  }, []);

  useEffect(() => {
    const margin = 10;
    const padding = width * 0.05;
    const barPadding = 5;
    const barWidth = width / situations.length - barPadding;
    // format the data
    console.log("d3");
    const svg = d3
      .select("svg.graph")
      .attr("viewBox", [0, 0, width - padding * 2, height + padding * 2]);

    const dataXRange = d3.extent(situations, d => Date.parse(d.timeStamp));

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(situations, d => d.activeCase)])
      .nice()
      .range([height - margin, margin]);

    var xScale = d3
      .scaleTime()
      .range([margin, width - margin])
      .domain(dataXRange)
      .nice();

    var yAxis = d3.axisLeft().scale(yScale);

    var xAxis = d3
      .axisBottom(xScale)
      .ticks(d3.timeDay.every(5))
      .tickFormat(d3.timeFormat("%b %d, %Y"))
      .tickSizeInner(5)
      .tickSizeOuter(5);

    svg
      .append("g")
      .attr("fill", "purple")
      .selectAll("rect")
      .data(situations)
      .enter()
      .append("rect")
      .attr("x", (d, idx) => xScale(Date.parse(d.timeStamp)))
      .attr("width", barWidth)
      .attr("y", d => yScale(d.activeCase))
      .attr("height", d => yScale(0) - yScale(d.activeCase));

    svg
      .append("g")
      .classed("xAxis", true)
      .attr("transform", `translate(${0}, ${height - margin} )`)
      .call(xAxis)
      .selectAll("text")
      .attr("x", -30)
      .attr("transform", "rotate(-40)");

    svg
      .append("g")
      .classed("yAxis", true)
      .attr("transform", `translate(${margin}, ${-margin / 2})`)
      .call(yAxis);

    svg
      .append("text")
      .classed("axisLabel", true)
      .attr(
        "transform",
        "translate(" +
          (width / 2 - margin / 2) +
          " ," +
          (height + margin * 7) +
          ")"
      )
      .style("text-anchor", "middle")
      .style("fill", "black")
      .text("Date");

    d3.select("svg .yAxis")
      .append("text")
      .classed("axisLabel", true)
      .attr(
        "transform",
        `translate(${-margin - padding * 2}, ${height / 2}) rotate(-90)`
      )
      .style("text-anchor", "middle")
      .style("fill", "black")
      .text("People");

    d3.selectAll("svg text").attr("font-size", 13);

    d3.selectAll("svg .axisLabel")
      .attr("font-size", 20)
      .attr("font-weight", "bold");

    d3.select("svg")
      .append("text")
      .classed("title", true)
      .attr("transform", `translate(${width / 2},${margin + padding / 6})`)
      .style("text-anchor", "middle")
      .style("font-weight", "bold")
      .style("font-size", "20")
      .style("fill", "black")
      .text("Number of active cases in the world over time");

    return () => {
      const svg = d3.select("svg");
      svg.selectAll("g").remove();
      svg.selectAll("text").remove();
    };
  });

  return (
    <div>
      <svg fill="red" className="graph" width={width} height={height} />
    </div>
  );
};

export default Situation;
