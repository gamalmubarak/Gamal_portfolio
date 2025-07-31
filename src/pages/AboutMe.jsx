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
        Hello! I'm [Gamal pronounced Jamal], a passionate Full Stack Developer with a strong focus on web development and application design using modern tools like React, Node.js, and TypeScript. I recently graduated from an intensive full-stack development bootcamp, where I built and deployed several real-world projects from scratch—both independently and in teams.

I'm highly detail-oriented and innovative, with a strong ability to translate user and business requirements into scalable, user-friendly applications. I enjoy building intuitive interfaces, solving complex problems with clean code, and continuously learning new technologies to expand my skill set.

In my spare time, I explore emerging tech, contribute to personal coding projects, and stay engaged with developer communities. I'm actively seeking junior or entry-level roles—remote or hybrid—where I can grow as a developer and make an impact.

      </p>
    </section>
  );
};

export default AboutMe;