import React from 'react';
import '../css/about.css'
import { Link } from 'react-router-dom';
import Projects from '../components/Projects';

function AboutPage() {
  return (
    <div>
      <Projects/>
      {/* <Link to="/USPopulation">US Population</Link>
      <Link to="/StatePopulation">State Population</Link>
      <Link to="/debugging">Debugging</Link> */}
    </div>
  );
}

export default AboutPage;