import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <div className="button-container">
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
