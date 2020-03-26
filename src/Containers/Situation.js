import React, { useState, useEffect } from "react";
import situationService from "../Services/Situation/situationService";
import countryService from "../Services/Situation/countryService";
import GraphSelector from "../Components/GraphSelector";
import * as d3 from "d3";
import {useTranslation} from "react-i18next"

import Loader from "../Components/Loader";
import "./Situation.css";

const Situation = () => {
  const [t, i18n] = useTranslation();
  const items = ["activeCase", "newCase", "totalDeaths", "newDeaths"];
  const [isLoading, setIsLoading] = useState(true);
  const [situations, setSituations] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("World");
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const width = 800;
  const height = 450;
  useEffect(() => {
    setIsLoading(true);
    function handleCountriesChange(receivedCountries) {
      setCountries([{ name: "World" }, ...receivedCountries]);
    }
    countryService
      .getAllCountries()
      .then(countries =>
        countries.filter(country => country.situations.length > 0)
      )
      .then(handleCountriesChange)
      .then(() => setIsLoading(false))
      .catch(err => console.log("error: " + err));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    function handleSituationsChange(newSituations) {
      newSituations = newSituations.sort((a, b) =>
        d3.ascending(a.timeStamp, b.timeStamp)
      );
      setSituations([...newSituations]);
    }
    if (selectedCountry === "World") {
      situationService
        .getAllGlobalSituations()
        .then(handleSituationsChange)
        .then(() => setIsLoading(false))
        .catch(err => console.log("error: " + err));
    } else {
      countryService
        .getSituationByCountry(selectedCountry)
        .then(handleSituationsChange)
        .then(() => setIsLoading(false))
        .catch(err => console.log("error: " + err));
    }
  }, [selectedCountry]);

  useEffect(() => {
    const margin = 10;
    const padding = width * 0.06;
    //const barPadding = 5;
    //const barWidth = width / situations.length - barPadding;
    // format the data
    const svg = d3
      .select("svg.graph")
      .attr("viewBox", [
        0,
        -(padding / 2),
        width - padding * 2,
        height + padding * 2
      ]);

    const dataXRange = d3.extent(situations, d => Date.parse(d.timeStamp));
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(situations, d => +d[selectedItem])])
      .nice()
      .range([height - margin, margin]);

    var xScale = d3
      .scaleTime()
      .range([margin, width - margin])
      .domain(dataXRange)
      .nice();

    var yAxis = d3.axisLeft().scale(yScale);
    const daysInterval = selectedCountry === "World" ? 5 : 2;
    var xAxis = d3
      .axisBottom(xScale)
      .ticks(d3.timeDay.every(daysInterval))
      .tickFormat(d3.timeFormat("%b %d, %Y"))
      .tickSizeInner(5)
      .tickSizeOuter(5);

    /*svg
      .append("g")
      .attr("fill", "purple")
      .selectAll("rect")
      .data(situations)
      .enter()
      .append("rect")
      .attr("x", (d, idx) => xScale(Date.parse(d.timeStamp)))
      .attr("width", barWidth)
      .attr("y", d => yScale(d.activeCase))
      .attr("height", d => yScale(0) - yScale(+d.activeCase));*/

    const line = d3
      .line()
      .curve(d3.curveBasis)
      .x((d, idx) => xScale(Date.parse(d.timeStamp)))
      .y(function(d) {
        return yScale(+d[selectedItem]);
      });

    svg
      .append("path")
      .datum(situations)
      .attr("fill", "none")
      .attr("stroke", "#001f3f")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    svg
      .selectAll("circle")
      .data(situations)
      .enter()
      .append("circle")
      .attr("opacity", "0.7")
      .attr("cx", function(d) {
        return xScale(Date.parse(d.timeStamp));
      })
      .attr("cy", function(d) {
        return yScale(d[selectedItem]);
      })
      .attr("r", function(d, i) {
        return 4.5;
      })
      .attr("id", function(d) {
        return d.id;
      })
      .style("fill", "#001f3f")
      .on("mouseover touchenter", function(d) {
        d3.select(this)
          .transition()
          .duration(200)
          .style("opacity", "0.2");

        svg
          .selectAll("#tooltip")
          .data([d])
          .enter()
          .append("text")
          .attr("id", "tooltip")
          .attr("font-weight", "bold")
          .attr("fill", "#001f3f")
          .text(function(d, i) {
            return d[selectedItem] ? d[selectedItem].toLocaleString() : "";
          })
          .attr("y", function(d) {
            return yScale(d[selectedItem]) - 10;
          })
          .attr("x", function(d) {
            return xScale(Date.parse(d.timeStamp));
          });
      })
      .on("mouseout touchleave", function(d) {
        d3.select(this)
          .transition()
          .duration(200)
          .style("opacity", "0.8");

        d3.select("#tooltip").remove();
      });
    svg
      .selectAll("circle")
      .data(situations)
      .enter()
      .append("circle")
      .attr("opacity", "0.7")
      .attr("cx", function(d) {
        return xScale(Date.parse(d.timeStamp));
      })
      .attr("cy", function(d) {
        return yScale(d[selectedItem]);
      })
      .attr("r", function(d, i) {
        return 4.5;
      })
      .attr("id", function(d) {
        return d.id;
      })
      .style("fill", "#001f3f")
      .on("mouseover touchenter", function(d) {
        d3.select(this)
          .transition()
          .duration(200)
          .style("opacity", "0.2");

        svg
          .selectAll("#tooltip")
          .data([d])
          .enter()
          .append("text")
          .attr("id", "tooltip")
          .attr("font-weight", "bold")
          .attr("fill", "#001f3f")
          .text(function(d, i) {
            return d[selectedItem] ? d[selectedItem].toLocaleString() : "";
          })
          .attr("y", function(d) {
            return yScale(d[selectedItem]) - 10;
          })
          .attr("x", function(d) {
            return xScale(Date.parse(d.timeStamp));
          });
      })
      .on("mouseout touchleave", function(d) {
        d3.select(this)
          .transition()
          .duration(200)
          .style("opacity", "0.8");

        d3.select("#tooltip").remove();
      });

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
      .text(t('situation.graph.xAxisLabel'));

    d3.select("svg .yAxis")
      .append("text")
      .classed("axisLabel", true)
      .attr(
        "transform",
        `translate(${-margin - padding * 2}, ${height / 2}) rotate(-90)`
      )
      .style("text-anchor", "middle")
      .style("fill", "black")
      .text(t('situation.graph.yAxisLabel'));

    d3.selectAll("svg text").attr("font-size", 13);

    d3.selectAll("svg .axisLabel")
      .attr("font-size", 20)
      .attr("font-weight", "bold");

    /*d3.select("svg")
      .append("text")
      .classed("title", true)
      .attr("transform", `translate(${width / 2},${margin + padding / 6})`)
      .style("text-anchor", "middle")
      .style("font-weight", "bold")
      .style("font-size", "20")
      .style("fill", "black")
      .text("Number of active cases over time");*/

    return () => {
      const svg = d3.select("svg");
      svg.selectAll("g").remove();
      svg.selectAll("text").remove();

      svg.selectAll("path").remove();

      svg.selectAll("circle").remove();
    };
  });

  function handleSelectionChange(event) {
    setSelectedCountry(event.target.value);
  }

  function handleSelectionItemChange(event) {
    setSelectedItem(event.target.value);
  }

  return (
    <div>
      {isLoading && <Loader />}
      <div className="countrySelection">
        <GraphSelector
          label={t('situation.countryLabel')}
          options={countries.map(country => country.name)}
          handleChange={handleSelectionChange}
          value={selectedCountry}
        />
        <GraphSelector
          label={t('situation.dataLabel')}
          options={items}
          handleChange={handleSelectionItemChange}
        />
      </div>
      <svg fill="red" className="graph" width={width} height={height} />
      <p>
        {t('situation.note')}
        <a href="https://www.who.int/"> World Health Organization</a>
      </p>
    </div>
  );
};

export default Situation;
