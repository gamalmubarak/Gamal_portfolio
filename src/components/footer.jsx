import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-4" style={{
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      padding: '20px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <ul className="list-inline text-center">
        <li className="list-inline-item">
          <a 
            href="https://github.com/gamalmubarak" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-decoration-none"
            style={{
              color: '#333',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              padding: '10px 15px',
              borderRadius: '25px',
              background: 'rgba(255, 255, 255, 0.8)',
              margin: '0 5px',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #333 0%, #555 100%)';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.8)';
              e.target.style.color = '#333';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <i className="bi bi-github me-2"></i>GitHub
          </a>
        </li>
        <li className="list-inline-item">
          <a 
            href="https://www.linkedin.com/in/gamalmubarak87" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-decoration-none"
            style={{
              color: '#333',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              padding: '10px 15px',
              borderRadius: '25px',
              background: 'rgba(255, 255, 255, 0.8)',
              margin: '0 5px',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #0077b5 0%, #005885 100%)';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.8)';
              e.target.style.color = '#333';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <i className="bi bi-linkedin me-2"></i>LinkedIn
          </a>
        </li>
        <li className="list-inline-item">
          <a 
            href="mailto:gamalmubarak87@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-decoration-none"
            style={{
              color: '#333',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              padding: '10px 15px',
              borderRadius: '25px',
              background: 'rgba(255, 255, 255, 0.8)',
              margin: '0 5px',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #ea4335 0%, #d33b2c 100%)';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.8)';
              e.target.style.color = '#333';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <i className="bi bi-envelope me-2"></i>Email
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;