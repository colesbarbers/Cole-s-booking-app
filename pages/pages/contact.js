// pages/contact.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        'service_2hpthb5',          // Your Service ID
        'template_xbvkjuq',        // Your Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
          title: 'New contact form submission'
        },
        'RVNb5wh-HhbS4iRBB'        // Your Public Key
      );
      setSent(true);
    } catch (err) {
      setError('Failed to send. Please try again.');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 600, margin: 'auto' }}>
      <h1>Contact Us</h1>
      {sent ? (
        <p>Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input name="name" onChange={handleChange} required />

          <label>Your Email</label>
          <input type="email" name="email" onChange={handleChange} required />

          <label>Message</label>
          <textarea name="message" onChange={handleChange} required />

          <button type="submit">Send Message</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
    </div>
  );
}
