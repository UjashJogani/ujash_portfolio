import React from 'react';
import './../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>📬 Contact Me</h1>
        <p className="subtitle">
          I'd love to connect with you! Feel free to reach out for opportunities, collaborations, or tech talk.
        </p>

        <div className="contact-card">
          <p><strong>📞 Phone:</strong> <a href="tel:+918511933193">+91 85119 33193</a></p>
          <p><strong>📧 Email:</strong> <a href="mailto:ujashbjogani@gmail.com">ujashbjogani@gmail.com</a></p>
          <p><strong>📍 Address:</strong> 56, Paramhans Society, Katargam, Surat, Gujarat - 395004</p>
          <p><strong>🌍 Currently In:</strong> Bengaluru, Karnataka</p>
          <p><strong>🏢 Company:</strong> Applaunch.io</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
