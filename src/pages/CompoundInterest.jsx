import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function CompoundInterest(){
  // Set up the data
  const principal = 10000;
  const interestRate = 0.05;
  const years = 20;
  const data = [];

  for (let i = 0; i <= years; i++) {
    const amount = principal * (1 + interestRate) ** i;
    data.push({ year: i, amount: amount });
  }

  const svgRef = useRef();

  useEffect(() => {
    const xScale = d3.scaleBand()
  .domain(data.map((d) => d.year))
  .range([0, 500])
  .padding(0.2);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, (d) => d.amount)])
  .range([300, 0]);

// Set up the axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

// Set up the graph
const graph = d3.select(svgRef.current)
  .append('svg')
  .attr('width', 500)
  .attr('height', 300)
  .append('g')
  .attr('transform', `translate(50, 50)`);

// Add the axes
graph.append('g')
  .attr('class', 'x-axis')
  .call(xAxis);

graph.append('g')
  .attr('class', 'y-axis')
  .call(yAxis);

// Add the bars
graph.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', (d) => xScale(d.year))
  .attr('y', (d) => yScale(d.amount))
  .attr('width', xScale.bandwidth())
  .attr('height', (d) => 300 - yScale(d.amount));
  }, [data]); // Re-render if data changes

  return <svg ref={svgRef} />;
}

export default CompoundInterest;