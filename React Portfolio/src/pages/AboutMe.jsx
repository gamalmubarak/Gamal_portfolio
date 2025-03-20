import React from 'react';

const AboutMe = () => {
  return (
    <section className="text-center p-3">
      <h2>About Me</h2>
      <img 
        src="/image/gamal1.jpg" 
        alt="Gamal Mubarak" 
        className="img-fluid rounded-circle mb-3" 
        style={{ width: '100%', maxWidth: '300px' }} // updated styling
      />
      <p>
        Hello! I'm [Gamal pronounced Jamal], a passionate Full Stack developer, currently studying full stack with a focus on web development and applications using React. I'm highly detail-oriented and innovative in extending functionality, designing, developing, and executing based on requirements, and accomplishing several projects. I enjoy creating user-friendly interfaces and solving complex problems through code. In my spare time, I love to explore new technologies and work on personal projects.
      </p>
    </section>
  );
};

export default AboutMe;