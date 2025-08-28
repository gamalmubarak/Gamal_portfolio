import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send to an API or email)
      console.log('Form submitted:', { name, email, message });
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <section className="p-4" style={{
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '20px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      margin: '20px 0',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <h2 style={{
        color: '#333',
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '2.5rem',
        fontWeight: '600'
      }}>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control form-control-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control form-control-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            id="message"
            className="form-control form-control-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <p className="text-danger">{errors.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;