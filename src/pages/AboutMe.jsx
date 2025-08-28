import React from 'react';

const AboutMe = () => {
  return (
    <section className="text-center p-4" style={{
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '20px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      margin: '20px 0'
    }}>
      <h2 style={{
        color: '#333',
        marginBottom: '2rem',
        fontSize: '2.5rem',
        fontWeight: '600'
      }}>About Me</h2>
      <div style={{
        position: 'relative',
        display: 'inline-block',
        marginBottom: '2rem'
      }}>
        <img 
          src="/image/gamal1.jpg" 
          alt="Gamal Mubarak" 
          className="img-fluid rounded-circle mb-3" 
          style={{ 
            width: '100%', 
            maxWidth: '300px',
            border: '4px solid #667eea',
            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
      </div>
      <p style={{
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#555',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'justify',
        padding: '0 20px'
      }}>
        Hello! I'm <strong style={{color: '#667eea'}}>Gamal (pronounced Jamal)</strong>, a passionate Full Stack Developer with a strong focus on web development and application design using modern tools like React, Node.js, and TypeScript. I recently graduated from an intensive full-stack development bootcamp, where I built and deployed several real-world projects from scratch—both independently and in teams.
        <br/><br/>
        I'm highly detail-oriented and innovative, with a strong ability to translate user and business requirements into scalable, user-friendly applications. I enjoy building intuitive interfaces, solving complex problems with clean code, and continuously learning new technologies to expand my skill set.
        <br/><br/>
        In my spare time, I explore emerging tech, contribute to personal coding projects, and stay engaged with developer communities. I'm actively seeking junior or entry-level roles—remote or hybrid—where I can grow as a developer and make an impact.
      </p>
    </section>
  );
};

export default AboutMe;