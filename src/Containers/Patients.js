import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import { useTranslation } from "react-i18next";
import { getAllPatient } from "../Services/Patient/patientService";
import { getAllSymptoms } from "../Services/Health/symptomService";
import Loader from "../Components/Loader";
import "./Patients.css";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [graphData, setGraphData] = useState([]);
  const [t, i18n] = useTranslation();

  const width = 800;
  const height = 450;

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getAllPatient(), getAllSymptoms()])
      .then((results) => {
        setPatients(results[0]);
        const rawSymptoms = results[1];
        const hashSymptomps = {};
        for (let i = 0; i < rawSymptoms.length; i++)
          hashSymptomps[rawSymptoms[i]._id] = rawSymptoms[i];
        setSymptoms(hashSymptomps);
        return { rawPatientsData: results[0], hashSymptomps };
      })
      .then(({ rawPatientsData, hashSymptomps }) => {
        let data = rawPatientsData.reduce((acc, curr) => {
          for (let i = 0; i < curr.symptoms.length; i++)
            acc[curr.symptoms[i]]
              ? acc[curr.symptoms[i]]++
              : (acc[curr.symptoms[i]] = 1);
          return acc;
        }, {});
        let label;
        data = Object.entries(data).map((entry) => {
          label = hashSymptomps[entry[0]]
            ? hashSymptomps[entry[0]].translation[i18n.language]
            : "Unknown";
          return { label, value: entry[1] };
        });

        setGraphData(data);
      })
      .then(() => setIsLoading(false))
      .catch((err) => console.log("error: " + err));
  }, []);

  useEffect(() => {
    const margin = 10;
    const padding = width * 0.06;
    const barPadding = 10;
    const barWidth = height / graphData.length - barPadding;
    // format the data
    const svg = d3
      .select("svg.graph")
      .attr("viewBox", [
        0,
        -(padding / 2),
        width - padding * 2,
        height + padding * 2,
      ]);

    const xScale = d3
      .scaleTime()
      .range([0, width - margin])
      .domain([0, d3.max(graphData, (d) => +d.value)])
      .nice();

    const yScale = d3
      .scaleLinear()
      .domain([0, graphData.length])
      .nice()
      .range([margin, height - margin]);

    var colorScale = d3
      .scaleOrdinal(d3.schemePastel2)
      .domain([...graphData.map((x) => x.label)]);
    var xAxis = d3
      .axisBottom()
      .scale(xScale)
      .tickFormat(d3.format(".2"))
      .tickSizeInner(5)
      .tickSizeOuter(5);

    var yAxis = d3.axisLeft().scale(yScale).ticks(0);

    svg
      .append("g")
      .selectAll("rect")
      .data(graphData)
      .enter()
      .append("rect")
      .attr("fill", (d) => colorScale(d.label))
      .attr("x", margin)
      .attr("width", (d) => xScale(+d.value))
      .attr("y", (d, idx) => yScale(idx))
      .attr("height", barWidth)
      .attr("stroke", "black")
      .attr("stroke-opacity", "0.2");

    svg
      .append("g")
      .selectAll("text")
      .data(graphData)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("width", (d) => xScale(+d.value))
      .attr("height", barWidth)
      .attr("x", (d) => xScale(+d.value) / 2)
      .attr("y", (d, idx) => yScale(idx) + barWidth / 2)
      .style("text-anchor", "middle")
      .attr("fill", "black")
      .text((d) => d.label);

    svg
      .append("g")
      .classed("yAxis", true)
      .attr("transform", `translate(${margin}, ${-margin / 2})`)
      .call(yAxis);

    svg
      .append("g")
      .classed("xAxis", true)
      .attr("transform", `translate(${margin}, ${height - margin} )`)
      .call(xAxis)
      .selectAll("text")
      .attr("x", -20)
      .attr("transform", "rotate(-40)");

    d3.select("svg .yAxis")
      .append("text")
      .classed("axisLabel", true)
      .attr(
        "transform",
        `translate(${-margin - padding}, ${height / 2}) rotate(-90)`
      )
      .style("text-anchor", "middle")
      .style("fill", "black")
      .text(t("patients.yAxisLabel"));

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
      .text(t("patients.xAxisLabel"));

    d3.select("svg")
      .append("text")
      .classed("title", true)
      .attr("transform", `translate(${width / 2},${-margin / 2})`)
      .style("text-anchor", "middle")
      .style("font-weight", "bold")
      .style("font-size", "20")
      .style("fill", "black")
      .text(t("patients.title"));

    return () => {
      const svg = d3.select("svg");
      svg.selectAll("g").remove();
      svg.selectAll("text").remove();

      svg.selectAll("path").remove();

      svg.selectAll("circle").remove();
      svg.selectAll("rect").remove();
      svg.selectAll("line").remove();
    };
  });

  return (
    <div className="patients">
      {isLoading && <Loader />}
      <svg fill="red" className="graph" width={width} height={height} />
    </div>
  );
};

export default Patients;
