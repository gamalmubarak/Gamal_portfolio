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
          src="/image/gamal.jpg"
          alt="Gamal Mubarak" 
          className="img-fluid rounded-circle mb-3" 
          style={{ 
            width: '100%', 
            maxWidth: '300px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '50%',
            padding: '8px',
            boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4), 0 5px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            filter: 'brightness(1.05) contrast(1.1)',
            position: 'relative',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.08) translateY(-5px)';
            e.target.style.boxShadow = '0 25px 50px rgba(102, 126, 234, 0.5), 0 10px 25px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)';
            e.target.style.filter = 'brightness(1.15) contrast(1.2)';
            e.target.style.border = '2px solid rgba(255, 255, 255, 1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1) translateY(0)';
            e.target.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4), 0 5px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
            e.target.style.filter = 'brightness(1.05) contrast(1.1)';
            e.target.style.border = '2px solid rgba(255, 255, 255, 0.8)';
          }}
        />
      </div>
      <p style={{
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#555',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'left',
        padding: '0 20px',
        letterSpacing: '0.3px',
        wordSpacing: '0.5px'
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