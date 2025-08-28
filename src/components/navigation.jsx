import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#9e9e9e', fontSize: '1.25rem', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}>
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link 
              className="nav-link" 
              to="/" 
              style={{ 
                color: location.pathname === '/' ? '#a5d8dd' : 'inherit',
                textDecoration: 'none',
                borderBottom: location.pathname === '/' ? '2px solid #a5d8dd' : '2px solid transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== '/') {
                  e.target.style.borderBottom = '2px solid #a5d8dd';
                  e.target.style.color = '#a5d8dd';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== '/') {
                  e.target.style.borderBottom = '2px solid transparent';
                  e.target.style.color = 'inherit';
                }
              }}
            >
              About Me
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
            <Link 
              className="nav-link" 
              to="/portfolio" 
              style={{ 
                color: location.pathname === '/portfolio' ? '#a5d8dd' : 'inherit',
                textDecoration: 'none',
                borderBottom: location.pathname === '/portfolio' ? '2px solid #a5d8dd' : '2px solid transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== '/portfolio') {
                  e.target.style.borderBottom = '2px solid #a5d8dd';
                  e.target.style.color = '#a5d8dd';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== '/portfolio') {
                  e.target.style.borderBottom = '2px solid transparent';
                  e.target.style.color = 'inherit';
                }
              }}
            >
              Portfolio
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link 
              className="nav-link" 
              to="/contact" 
              style={{ 
                color: location.pathname === '/contact' ? '#a5d8dd' : 'inherit',
                textDecoration: 'none',
                borderBottom: location.pathname === '/contact' ? '2px solid #a5d8dd' : '2px solid transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== '/contact') {
                  e.target.style.borderBottom = '2px solid #a5d8dd';
                  e.target.style.color = '#a5d8dd';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== '/contact') {
                  e.target.style.borderBottom = '2px solid transparent';
                  e.target.style.color = 'inherit';
                }
              }}
            >
              Contact
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/resume' ? 'active' : ''}`}>
            <Link 
              className="nav-link" 
              to="/resume" 
              style={{ 
                color: location.pathname === '/resume' ? '#a5d8dd' : 'inherit',
                textDecoration: 'none',
                borderBottom: location.pathname === '/resume' ? '2px solid #a5d8dd' : '2px solid transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== '/resume') {
                  e.target.style.borderBottom = '2px solid #a5d8dd';
                  e.target.style.color = '#a5d8dd';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== '/resume') {
                  e.target.style.borderBottom = '2px solid transparent';
                  e.target.style.color = 'inherit';
                }
              }}
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