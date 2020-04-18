import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import { getAllPatient } from "../Services/Patient/patientService";
import { getAllSymptoms } from "../Services/Health/symptomService";
import GraphSelector from "../Components/GraphSelector";
import Loader from "../Components/Loader";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [graphData, setGraphData] = useState([]);

  const width = 800;
  const height = 450;

  useEffect(() => {
    function handlePatientsChange(newPatients) {
      setPatients(newPatients);
    }
    setIsLoading(true);
    Promise.all([getAllPatient(), getAllSymptoms()])
      .then((results) => {
        console.log(results);
        setPatients(results[0]);
        setSymptoms(results[1].map((res) => res.name));

        return results[0];
      })
      .then((rawPatientsData) => {
        const data = rawPatientsData.reduce((acc, curr) => {
          for (let i = 0; i < curr.symptoms.length; i++)
            acc[curr.symptoms[i]]
              ? acc[curr.symptoms[i]]++
              : (acc[curr.symptoms[i]] = 1);
          return acc;
        }, {});

        setGraphData(data);
      })
      .then(() => setIsLoading(false))
      .catch((err) => console.log("error: " + err));
  }, []);

  useEffect(() => {
    const margin = 10;
    const padding = width * 0.06;
    const barPadding = 5;
    const barWidth = width / graphData.length - barPadding;
    // format the data
    const svg = d3
      .select("svg.graph")
      .attr("viewBox", [
        0,
        -(padding / 2),
        width - padding * 2,
        height + padding * 2,
      ]);

    /*const dataXRange = d3.extent(graphData, (d) => Date.parse(d.timeStamp));
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(situations, (d) => +d[selectedItem])])
      .nice()
      .range([height - margin, margin]);

    var xScale = d3
      .scaleTime()
      .range([margin, width - margin])
      .domain(dataXRange)
      .nice();*/

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
      Hello world Patients {patients.length}
      <GraphSelector
        label={"symptoms"}
        options={symptoms}
        handleChange={(e) => console.log(e)}
      />
      <svg fill="red" className="graph" width={width} height={height} />
    </div>
  );
};

export default Patients;
