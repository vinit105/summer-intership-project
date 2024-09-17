import React from 'react';
import './About.css'; // Make sure to include a separate CSS file for specific About page styling

function About() {
  return (
    <div className="about">
      <header>
        <h1>About Us</h1>
        <p>Welcome to MediCio Hospital. For over 20 years, we have been dedicated to providing the highest quality medical services to our community. Our mission is to ensure your well-being through compassionate care and advanced medical technology.</p>
      </header>
      
      <section>
        <h2>Our Mission</h2>
        <p>At MediCio, our mission is to deliver exceptional healthcare services through compassionate care, advanced technology, and professional expertise. We are committed to improving the health and well-being of our patients and the community we serve.</p>
      </section>
      
      <section>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Compassion:</strong> We approach every patient with empathy and understanding, prioritizing their comfort and care.</li>
          <li><strong>Excellence:</strong> We strive for excellence in every aspect of our work, from medical treatment to customer service.</li>
          <li><strong>Innovation:</strong> We embrace the latest medical advancements and technologies to provide cutting-edge care.</li>
        </ul>
      </section>
      
      <section>
        <h2>Our History</h2>
        <p>Founded in 2004, MediCio Hospital has evolved from a small clinic into a leading medical facility serving thousands of patients each year. Our commitment to quality care and continuous improvement has been the cornerstone of our growth and success.</p>
        <p>Over the years, we have expanded our services, upgraded our facilities, and enhanced our team’s expertise, always with the goal of providing outstanding patient care and support.</p>
      </section>
    </div>
  );
}

export default About;
