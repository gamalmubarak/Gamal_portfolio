import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ 
      background: 'rgba(255, 255, 255, 0.95)', 
      fontSize: '1.1rem', 
      fontFamily: 'Inter, sans-serif', 
      fontWeight: '500', 
      borderRadius: '20px', 
      padding: '15px 30px',
      backdropFilter: 'blur(15px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      margin: '0 auto',
      maxWidth: '600px',
      animation: 'slideInLeft 0.8s ease-out'
    }}>
      <div className="container-fluid">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ gap: '1rem' }}>
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link 
              className="nav-link" 
              to="/" 
              style={{ 
                textDecoration: 'none',
                borderRadius: '12px',
                padding: '8px 16px',
                background: location.pathname === '/' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
                color: location.pathname === '/' ? '#fff' : '#555',
                fontWeight: location.pathname === '/' ? '600' : '500',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== '/') {
                  e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  e.target.style.color = '#fff';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== '/') {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#555';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
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
                textDecoration: 'none',
                borderRadius: '12px',
                padding: '8px 16px',
                background: location.pathname === '/portfolio' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
                color: location.pathname === '/portfolio' ? '#fff' : '#555',
                fontWeight: location.pathname === '/portfolio' ? '600' : '500',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== '/portfolio') {
                  e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  e.target.style.color = '#fff';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== '/portfolio') {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#555';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
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
                textDecoration: 'none',
                borderRadius: '12px',
                padding: '8px 16px',
                background: location.pathname === '/contact' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
                color: location.pathname === '/contact' ? '#fff' : '#555',
                fontWeight: location.pathname === '/contact' ? '600' : '500',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== '/contact') {
                  e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  e.target.style.color = '#fff';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== '/contact') {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#555';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
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
                textDecoration: 'none',
                borderRadius: '12px',
                padding: '8px 16px',
                background: location.pathname === '/resume' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
                color: location.pathname === '/resume' ? '#fff' : '#555',
                fontWeight: location.pathname === '/resume' ? '600' : '500',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== '/resume') {
                  e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  e.target.style.color = '#fff';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== '/resume') {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#555';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
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