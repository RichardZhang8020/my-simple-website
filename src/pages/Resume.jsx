import React from 'react';
import '../css/resume.css';

function Resume() {
  return (
    <div className="resume">
      <h1>Richard Zhang</h1>
      <div className="info">
        <p>richardzhang085@gmail.com | 512-914-6785 | Austin, TX 78741</p>
      </div>
      
      <h3>Skills</h3>
      <ul>
        <li>Languages: SQL, Java, Javascript, Python, HTML, CSS</li>
        <li>Technologies: React, Git, CVS, Guidewire, SQL Developer, Informatica, SSIS, SSRS, SQL Server, Microsoft Office</li>
      </ul>
      <h3>Education</h3>
      <p>Bachelor of Engineering Mechatronics Engineering Co-op, McMaster University, Hamilton, ON (May 2019)</p>
      <h3>Experience</h3>
      <h5>Full-Stack Developer</h5>
      <p>The Co-operators (June 2020 – May 2024)</p>
      <ul>
        <li>Implemented solutions for the web application that insurance advisors use to 
            create, manage, quote, and bind insurance policies, using the Guidewire 
            framework and Gosu(Java) programming language</li>
        <li>Worked within the Auto team to streamline Auto processes that are used in 
        national call center and 662 offices</li>
        <li>Improved integrations used for insurance reporting using Informatica</li>
        <li>Currently contributing to the addition of the Atlantic provinces to the Risk Share 
        Pool, with an expected direct impact to 50,000 policies </li>
      </ul>
      <h5>Process Automation Analyst</h5>
      <p>ArcelorMittal Dofasco (June 2017 – August 2018)</p>
      <ul>
        <li>Wrote SQL scripts to perform database changes and automate processes</li>
        <li>Added and modified C code for tasks necessary for steel production</li>
      </ul>
      <h5>Programming Teacher</h5>
      <p>Real Programming 4 Kids (June – August 2015)</p>
      <ul>
        <li>Taught programming classes for children ages 8-16 in Visual Basic and Java</li>
      </ul>
      <a className='btn btn-success' href='Richard_Zhang_Resume.pdf' download='Richard_Zhang_Resume.pdf'>Download Resume</a>
    </div>
  );
}

export default Resume;
