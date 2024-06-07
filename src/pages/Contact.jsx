import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const serviceId = 'service_ltcsnys'; // Replace with your EmailJS service ID
  const templateId = 'template_s1vj32u'; // Replace with your EmailJS template ID
  const publicKey = '7iIxNbCFPV6JMDONl'; // Replace with your EmailJS template ID
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: '7iIxNbCFPV6JMDONl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
