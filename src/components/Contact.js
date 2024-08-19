import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setStatus('Sending...');
  
    try {
      const response = await fetch('/api/submitContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setStatus('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Failed to send message');
    }
  };
  

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <div className="button-container">
          <button type="submit">Send</button>
        </div>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
};

export default Contact;
