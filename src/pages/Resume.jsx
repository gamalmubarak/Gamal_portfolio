import React from 'react';

const Resume = () => {
  return (
    <section className="p-3">
      <h2>Resume</h2>
      <p>Download my resume below:</p>
      <a href="https://1drv.ms/b/c/3b216777a5c674e6/EUy-Wcvaa0FKpPr4Ny3ZnCkBNNAp0lFGlcS9sgXvnTqcLA?e=dKA7Qe" download className="btn btn-primary mb-3">
        Download Resume
      </a>
      <h3>Skills</h3>
      <ul className="list-group">
        <li className="list-group-item">JavaScript</li>
        <li className="list-group-item">React</li>
        <li className="list-group-item">Node.js</li>
        <li className="list-group-item">CSS</li>
        <li className="list-group-item">HTML</li>
        <li className="list-group-item">Git & GitHub</li>
        <li className="list-group-item">Responsive Design</li>
        <li className="list-group-item">RESTful APIs</li>
        <li className="list-group-item">Express</li>
        <li className="list-group-item">SQL</li>
        <li className="list-group-item">Prompt Engineering</li>
        <li className="list-group-item">TypeScript</li>
      </ul>
    </section>
  );
};

export default Resume;