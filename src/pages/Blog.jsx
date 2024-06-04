import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h1>Philosophy</h1>
      <Link to="/blog/honesty">The Case for Radical Honesty</Link>
    </div>
  );
}

export default AboutPage;