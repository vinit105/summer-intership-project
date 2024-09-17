import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or need to schedule an appointment, please fill out the form below with your name, email address, phone number, and a brief message detailing your request or inquiry. Our team will get back to you as soon as possible. Alternatively, you can reach us directly through the following contact details: <strong>Phone:</strong> (123) 456-7890, <strong>Email:</strong> contact@mediciohospital.com, or visit us at our main office located at 123 Health Street, Wellness City, WC 45678. We look forward to assisting you!</p>

      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
