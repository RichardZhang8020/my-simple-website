import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const CompoundInterest = () => {
  const svgRef = useRef();
  const [principal, setPrincipal] = useState(10000);
  const [interestRate, setInterestRate] = useState(5);
  const [years, setYears] = useState(20);
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = [];
    for (let i = 0; i < years; i++) {
      const amount = principal * (1 + (interestRate/100)) ** i;
      newData.push({ year: (i+1), amount: amount });
    }
    setData(newData);
  }, [principal, interestRate, years]);

  useEffect(() => {
    const margin = { top: 70, right: 40, bottom: 60, left: 175 }
    const width = 800 - margin.left - margin.right
    const height = 400 - margin.top - margin.bottom

    const xScale = d3.scaleBand()  
      .domain(data.map((d) => d.year))     
      .range([0, width])        
      .padding(0.2);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.amount)])
      .range([height, 0]);

    d3.select(svgRef.current).select("g").remove()

    console.log(data)

    const graph = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const xAxis = d3.axisBottom(xScale);  
    const yAxis = d3.axisLeft(yScale);

    graph.append('g')
      .attr('class', 'x-axis')
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    graph.append('g')
      .attr('class', 'y-axis')
      .call(yAxis);

    graph.selectAll('rect')  
      .data(data)
      .enter()              
      .append('rect')
      .attr('x', (d) => xScale(d.year))
      .attr('y', (d) => yScale(d.amount))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d.amount));
  }, [data]); 

  return (
    <div>
      <div>
        <label>Principal:</label>
        <input 
          type="number" 
          value={principal} 
          onChange={e => {
            const newValue = e.target.value;
            if (newValue === "" || (!isNaN(newValue) && newValue >= 0 && newValue <= 9999999999)) {
              setPrincipal(newValue);
            }
          }}
        />
      </div>
      <div>
        <label>Interest Rate:</label>
        <input 
          type="number" 
          value={interestRate} 
          onChange={e => {
            const newValue = e.target.value;
            if (newValue === "" || (!isNaN(newValue) && newValue >= 0 && newValue <= 99)) {
              setInterestRate(newValue);
            }
          }}
          />
      </div>
      <div>
        <label>Years:</label>
        <input 
          type="number" 
          value={years}
          onChange={e => {
            const newValue = e.target.value === "" ? "" : parseInt(e.target.value, 10);
            if (newValue === "" || (!isNaN(newValue) && newValue >= 0 && newValue <= 999)) {
              setYears(newValue);
            }
          }}
        />
      </div>
      <svg ref={svgRef} />
    </div>
  );
}

export default CompoundInterest;