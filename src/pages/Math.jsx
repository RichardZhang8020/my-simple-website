import React from 'react';
import SimpleLineChart from '../LineChart';
import { Link} from 'react-router-dom'
import CompoundInterest from './CompoundInterest';

function Math() {
  const chartData = [
    { x: 1, y: 5 },
    { x: 2, y: 8 },
    { x: 3, y: 3 },
    { x: 4, y: 12 },
  ];
  
  // In your React component:
  return (
    <div>
      <a href="https://richardzhang8020.github.io/lawOfLargeNumbers/" style={{ textDecoration: 'none' }}>
        <b>Law of Large Numbers visualization</b>
      </a>
      <Link to="/compoundInterest">Compound Interest</Link>
      {/* <SimpleLineChart data={chartData} /> */}
      
      {/* <LineChart/> */}
    </div>
  );
}

export default Math;