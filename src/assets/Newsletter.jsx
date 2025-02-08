import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating an API call to submit the email
    setTimeout(() => {
      setSuccessMessage("Thank you for subscribing!");
      setEmail('');
    }, 1000);
  };

  return (
    <section className="newsletter-section" style={sectionStyle}>
      <div className="container" style={containerStyle}>
        <h2 style={headingStyle}>Stay Updated with Our Latest News!</h2>
        <p style={descriptionStyle}>Subscribe to our newsletter and never miss out on new updates, products, and offers!</p>
        {successMessage ? (
          <p style={successMessageStyle}>{successMessage}</p>
        ) : (
          <form onSubmit={handleSubmit} style={formStyle}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
            <button type="submit" style={buttonStyle}>Subscribe</button>
          </form>
        )}
      </div>
      <style>{`
        @keyframes vibrate {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(5px); }
        }

        button:hover {
          background-color: #0056b3;
          animation: vibrate 0.3s linear infinite;
        }
      `}</style>
    </section>
  );
};

const sectionStyle = {
  backgroundColor: '#f5f5f5',
  padding: '50px 0',
  textAlign: 'center',
  borderRadius: '8px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const containerStyle = {
  maxWidth: '700px',
  margin: '0 auto',
};

const headingStyle = {
  fontSize: '2rem',
  fontWeight: '700',
  marginBottom: '20px',
};

const descriptionStyle = {
  fontSize: '1rem',
  color: '#555',
  marginBottom: '30px',
};

const formStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '300px',
  transition: 'all 0.3s ease', // Smooth transition on hover
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'all 0.3s ease', // Smooth transition on hover
};

const successMessageStyle = {
  color: 'green',
  fontSize: '1.2rem',
};

export default Newsletter;
