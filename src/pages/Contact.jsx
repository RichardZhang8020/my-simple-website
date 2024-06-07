import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/contact.css';

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const serviceId = 'service_ltcsnys';
  const templateId = 'template_s1vj32u'; 
  const publicKey = '7iIxNbCFPV6JMDONl'; 

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey, 
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitMessage('Email sent successfully!');
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitMessage('There was an error sending your message. Please try again later.');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Write your message" required />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {submitMessage && <p className="submit-message">{submitMessage}</p>}
      </form>
    </div>
  );
}

export default Contact;
