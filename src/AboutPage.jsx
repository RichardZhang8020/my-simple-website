import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">Go to Home Page</Link>
      <h1>DELETE</h1>
    </div>
  );
}

export default AboutPage;