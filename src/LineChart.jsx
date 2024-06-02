import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function SimpleLineChart({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 300;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };

    const x = d3.scaleLinear()
      .domain(d3.extent(data, d => d.x)) // Input
      .range([margin.left, width - margin.right]); // Output

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y)]) // Input 
      .range([height - margin.bottom, margin.top]); // Output

    const line = d3.line()
      .x(d => x(d.x))
      .y(d => y(d.y));

    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  }, [data]); // Re-render if data changes

  return <svg ref={svgRef} />;
}

export default SimpleLineChart;