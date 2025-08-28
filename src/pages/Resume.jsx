import React from 'react';

const Resume = () => {
  return (
    <section className="p-4" style={{
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '20px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      margin: '20px 0',
      maxWidth: '800px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <h2 style={{
        color: '#333',
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '2.5rem',
        fontWeight: '600'
      }}>Resume</h2>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1rem' }}>
          Download my resume below:
        </p>
        <a 
          href="https://1drv.ms/b/c/3b216777a5c674e6/EUy-Wcvaa0FKpPr4Ny3ZnCkBNNAp0lFGlcS9sgXvnTqcLA?e=dKA7Qe" 
          download 
          className="btn btn-primary mb-3"
          style={{
            fontSize: '1.1rem',
            padding: '12px 30px',
            borderRadius: '25px'
          }}
        >
          <i className="bi bi-download me-2"></i>Download Resume
        </a>
      </div>
      <h3 style={{
        color: '#667eea',
        fontSize: '1.8rem',
        fontWeight: '600',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>Technical Skills</h3>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group" style={{ border: 'none' }}>
            <li className="list-group-item" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              margin: '5px 0',
              padding: '12px 20px',
              fontWeight: '500'
            }}>JavaScript</li>
            <li className="list-group-item" style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              margin: '5px 0',
              padding: '12px 20px',
              fontWeight: '500'
            }}>React</li>
            <li className="list-group-item" style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              margin: '5px 0',
              padding: '12px 20px',
              fontWeight: '500'
            }}>Node.js</li>
            <li className="list-group-item" style={{
              background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              margin: '5px 0',
              padding: '12px 20px',
              fontWeight: '500'
            }}>CSS</li>
            <li className="list-group-item" style={{
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              margin: '5px 0',
              padding: '12px 20px',
              fontWeight: '500'
            }}>HTML</li>
            <li className="list-group-item" style={{
              background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
              color: '#333',
              border: 'none',
              borderRadius: '10px',
              margin: '5px 0',
              padding: '12px 20px',
              fontWeight: '500'
            }}>Git & GitHub</li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="list-group" style={{ border: 'none' }}>
            <li className="list-group-item" style={{
              background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
              color: '#333',
              border: 'none',
              borderRadius: '10px',
              margin: '5px 0',
              padding: '12px 20px',
              fontWeight: '500'
            }}>Responsive Design</li>
            <li className="list-group-item" style={{
              background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              margin: '5px 0',
              padding: '12px 20px',
              fontWeight: '500'
            }}>RESTful APIs</li>
            <li className="list-group-item" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              margin: '5px 0',
              padding: '12px 20px',
              fontWeight: '500'
            }}>Express</li>
            <li className="list-group-item" style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              margin: '5px 0',
              padding: '12px 20px',
              fontWeight: '500'
            }}>SQL</li>
            <li className="list-group-item" style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              margin: '5px 0',
              padding: '12px 20px',
              fontWeight: '500'
            }}>Prompt Engineering</li>
            <li className="list-group-item" style={{
              background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              margin: '5px 0',
              padding: '12px 20px',
              fontWeight: '500'
            }}>TypeScript</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;