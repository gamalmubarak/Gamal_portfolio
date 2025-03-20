import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#9e9e9e', fontSize: '1.25rem' }}>
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link 
              className="nav-link" 
              to="/" 
              style={{ color: location.pathname === '/' ? '#a5d8dd' : 'inherit' }} // highlight color
            >
              About Me
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
            <Link 
              className="nav-link" 
              to="/portfolio" 
              style={{ color: location.pathname === '/portfolio' ? '#a5d8dd' : 'inherit' }} // highlight color
            >
              Portfolio
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link 
              className="nav-link" 
              to="/contact" 
              style={{ color: location.pathname === '/contact' ? '#a5d8dd' : 'inherit' }} // highlight color
            >
              Contact
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/resume' ? 'active' : ''}`}>
            <Link 
              className="nav-link" 
              to="/resume" 
              style={{ color: location.pathname === '/resume' ? '#a5d8dd' : 'inherit' }} // highlight color
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;