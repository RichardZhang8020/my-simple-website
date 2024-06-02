import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/math">Math</Link></li>
        <li><Link to="/algorithms">Algorithms</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;