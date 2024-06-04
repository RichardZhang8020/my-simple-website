import React from 'react';
import { Link} from 'react-router-dom'
import '../css/math.css'; 

function Math() {
  return (
    <div className='links'>
      <a href="https://richardzhang8020.github.io/lawOfLargeNumbers/" style={{ textDecoration: 'none' }} target="_blank">
        <b>Law of Large Numbers visualization</b>
      </a>
      <Link to="/compoundInterest">Compound Interest</Link>
    </div>
  );
}

export default Math;