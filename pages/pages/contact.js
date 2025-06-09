import React from 'react';

export default function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contact Us</h1>
      <form method="POST">
        <label>
          Name:
          <input type="text" name="name" required />
        </label><br /><br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label><br /><br />
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label><br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
