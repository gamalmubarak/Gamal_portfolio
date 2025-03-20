import React from 'react';
import Project from '../components/project';

const Portfolio = () => {
  const projects = [
    {
      title: 'README_generator',
      image: '/image/README.jpg',
      deployedLink: 'https://drive.google.com/file/d/1oLcNAZqvmxu2k0uRw09q5KG6XjeX6AQD/view',
      repoLink: 'https://github.com/gamalmubarak/README_generator'
    },
    {
      title: 'Vehicle_Builder',
      image: '/image/vehicle.jpg',
      deployedLink: 'https://drive.google.com/file/d/1fLLdEnz6Fz2GAWT-aCfQFBaNeUc2nZKk/view',
      repoLink: 'https://github.com/gamalmubarak/Vehicle_Builder'
    },
    {
      title: 'Weather_Dashboard',
      image: '/image/weather.jpg',
      deployedLink: 'https://weather-dashboard-5118.onrender.com/',
      repoLink: 'https://github.com/gamalmubarak/Weather_Dashboard'
    },
    {
      title: 'Employee_Tracker',
      image: '/image/employee.jpg',
      deployedLink: 'https://drive.google.com/file/d/1mCU-kLbB2AfBCu-4fGSkIClDxPufwD2A/view',
      repoLink: 'https://github.com/gamalmubarak/Employee_Tracker'
    },
    {
      title: 'Interactive_WD',
      image: '/image/coding.jpg',
      deployedLink: 'https://chicalauren.github.io/Interactive_WD/',
      repoLink: 'https://github.com/chicalauren/Interactive_WD'
    },
    {
      title: 'Interactive_WD',
      image: '/image/coding1.jpg',
      deployedLink: 'https://chicalauren.github.io/Interactive_WD/',
      repoLink: 'https://github.com/chicalauren/Interactive_WD'
    },
  ];

  return (
    <section className="container p-3">
      <h2 className="my-4 text-center">Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;