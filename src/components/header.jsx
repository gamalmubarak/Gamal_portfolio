import React from 'react';
import Navigation from './navigation';

const Header = () => {
  return (
    <header className="mb-4">
      <h1 style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '1.5rem',
        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        fontSize: '3.5rem',
        fontWeight: '800'
      }}>
        Gamal Mubarak
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;