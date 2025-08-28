// filepath: react-portfolio/src/components/Project.jsx
import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    <div className="card h-100" style={{
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      cursor: 'pointer'
    }}>
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px 15px 0 0' }}>
        <img 
          src={image} 
          className="card-img-top" 
          alt={title} 
          style={{ 
            height: '200px', 
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }} 
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: '600'
        }} className="overlay">
          View Project
        </div>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{
          color: '#333',
          fontWeight: '600',
          fontSize: '1.3rem',
          marginBottom: '1rem'
        }}>{title.replace(/_/g, ' ')}</h5>
        <div className="d-flex justify-content-between mt-auto gap-2">
          <a 
            href={deployedLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary flex-fill"
            style={{ fontSize: '0.9rem', padding: '10px' }}
          >
            <i className="bi bi-eye me-1"></i>Live Demo
          </a>
          <a 
            href={repoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary flex-fill"
            style={{ fontSize: '0.9rem', padding: '10px' }}
          >
            <i className="bi bi-github me-1"></i>Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;