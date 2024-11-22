import React, { useState } from 'react';

const SimpleFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Subscribed with email:', email);
    setEmail(''); // Clear the input field after submission
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        {/* Brand Section */}
        <div style={brandStyle}>
          <h1 style={brandTitleStyle}>AT-WIT</h1>
          <p style={brandDescriptionStyle}>Empowering through innovation and community.</p>
        </div>

        {/* Newsletter */}
        <div style={newsletterStyle}>
          <h3 style={newsletterTitleStyle}>Stay Updated</h3>
          <form onSubmit={handleSubmit} style={formStyle}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={footerBottomStyle}>
        <p>© {new Date().getFullYear()} Africa's Talking-WIT. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Inline styles for simplicity
const footerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
  paddingBottom: '30px',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  maxWidth: '800px',
  margin: '0 auto',
  gap: '30px',
  marginBottom: '50px',
};

const brandStyle = {
  flex: 1,
  textAlign: 'left',
};

const brandTitleStyle = {
  margin: 0,
  fontSize: '15px',
};

const brandDescriptionStyle = {
  margin: '5px 0',
};

const newsletterStyle = {
  flex: 1,
  textAlign: 'left',
};

const newsletterTitleStyle = {
  margin: '10px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column', // Stack input and button vertically
  gap: '10px', // Add space between the input and button
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '100%', // Ensure input spans full width
};

const buttonStyle = {
  padding: '10px 15px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: 'orange',
  color: '#282c34',
  cursor: 'pointer',
};

const footerBottomStyle = {
  marginTop: '20px',
};

export default SimpleFooter;
