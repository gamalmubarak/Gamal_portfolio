import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-4">
      <ul className="list-inline text-center">
        <li className="list-inline-item">
          <a href="https://github.com/gamalmubarak" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <i className="bi bi-github me-2"></i>GitHub
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.linkedin.com/in/gamalmubarak87" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <i className="bi bi-linkedin me-2"></i>LinkedIn
          </a>
        </li>
        <li className="list-inline-item">
          <a href="mailto:gamalmubarak87@gmail.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <i className="bi bi-envelope me-2"></i>Email
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;