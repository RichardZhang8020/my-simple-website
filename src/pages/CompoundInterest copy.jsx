import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CompoundInterest = () => {
  const principal = 10000;
  const interestRate = 0.05;
  const years = 20;
  const svfRef = useRef();

  useEffect(() => {
    const dataArray = [];
    for (let i = 0; i <= years; i++) {
      const amount = principal * (1 + interestRate) ** i;
      dataArray.push({ year: i, amount: amount });
    }

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3
      .select('#compound-interest-graph')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const xScale = d3
      .scaleBand()
      .domain(dataArray.map((d) => d.year))
      .range([0, width])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataArray, (d) => d.amount)])
      .range([height, 0]);

    svg
      .selectAll('rect')
      .data(dataArray)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.year))
      .attr('y', (d) => height - yScale(d.amount))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => yScale(d.amount));
  });

  return (
    <div id="compound-interest-graph">
      <h1>Compound Interest Graph</h1>
      <svg ref={svfRef}></svg>
    </div>
  );
};

export default CompoundInterest;