// filepath: react-portfolio/src/components/Project.jsx
import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="d-flex justify-content-between mt-3">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">View Deployed App</a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View GitHub Repo</a>
        </div>
      </div>
    </div>
  );
};

export default Project;