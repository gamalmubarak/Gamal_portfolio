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
      title: 'Online_Trivia_Game',
      image: '/image/Trivia2.jpg',
      deployedLink: 'https://onlinetriviagame-2qkt.onrender.com/',
      repoLink: 'https://github.com/Liz-Melcher/OnlineTriviaGame'
    },
      {
      title: 'Social_Network_API',
      image: '/image/coding1.jpg',
      deployedLink: 'https://drive.google.com/file/d/1lAw5l_4pq7zVt32BplvSkp3osO9SpH6D/view',
      repoLink: 'https://github.com/gamalmubarak/Social_Network_API'
    },
      {
      title: 'Book_Search_Engine',
      image: '/image/book.jpg',
      deployedLink: 'https://book-search-engine-f5u2.onrender.com/',
      repoLink: 'https://github.com/gamalmubarak/Book_Search_Engine'
    },
      {
      title: 'Task_Manager_App',
      image: '/image/task-manager.jpg',
      deployedLink: 'https://task-manager-app-qfzm.onrender.com/',
      repoLink: 'https://github.com/lobungen/Task-Manager-App'
    },
  ];

  return (
    <section className="container p-4" style={{
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '20px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      margin: '20px auto'
    }}>
      <h2 className="my-4 text-center" style={{
        color: '#333',
        fontSize: '2.5rem',
        fontWeight: '600',
        marginBottom: '3rem'
      }}>Portfolio</h2>
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