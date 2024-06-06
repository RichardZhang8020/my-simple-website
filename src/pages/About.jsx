import React from 'react';
import '../css/about.css'
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div>
      <h1>Richard Zhang</h1>
      <h1>Engineer</h1>
      <Link to="/USPopulation">US Population</Link>
      <Link to="/StatePopulation">State Population</Link>
      <Link to="/debugging">Debugging</Link>
    </div>
  );
}

export default AboutPage;