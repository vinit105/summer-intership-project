import React from 'react';
import testimonialImage1 from '../assets/testimonial1.jpg';
import testimonialImage2 from '../assets/testimonial2.jpg';

function Home() {
  return (
    <div>
      <header>
        <h1>MediCio</h1>
        <p>Your health is our top priority. At MediCio, we are dedicated to providing exceptional medical care and personalized service to ensure your well-being.</p>
        <p>With state-of-the-art facilities and a compassionate team of healthcare professionals, we are here to support you and your family with all your medical needs.</p>
      </header>
      
      <div className="upper">
      <section>
        <h2>Our Services</h2>
        <div className="service">
          <h3>Emergency Care</h3>
          <p>Our emergency department is equipped to handle critical situations around the clock. Our experienced medical staff is ready to provide immediate and effective treatment in emergencies.</p>
          <ul>
            <li>24/7 availability for urgent medical needs</li>
            <li>Advanced diagnostic tools for quick assessments</li>
            <li>Experienced team of emergency specialists</li>
            <li>Comprehensive care for a wide range of emergencies</li>
          </ul>
        </div>
        <div className="service">
          <h3>General Medicine</h3>
          <p>Our general medicine services offer a holistic approach to healthcare, focusing on maintaining overall health and managing chronic conditions with personalized treatment plans.</p>
          <ul>
            <li>Routine check-ups and preventive care</li>
            <li>Management of chronic conditions like diabetes and hypertension</li>
            <li>Personalized treatment plans tailored to individual needs</li>
            <li>Health education and lifestyle counseling</li>
          </ul>
        </div>
      </section>
      </div>
      
      <div className="lower">
      <section>
        <h2>Testimonials</h2>
        <div className="testimonial">
          <img src={testimonialImage1} alt="Patient Testimonial"  style={{ width: 200 }}/>
          <blockquote>
            <p>"The care and professionalism at MediCio were outstanding. The staff went above and beyond to ensure my comfort and well-being. Highly recommended!"</p>
            <h3>— Jane Doe</h3>
          </blockquote>
        </div>
        <div className="testimonial">
          <img src={testimonialImage2} alt="Patient Testimonial"  style={{ width: 200 }}/>
          <blockquote>
            <p>"I was impressed by the level of attention and care I received at MediCio. The doctors were knowledgeable and the facilities were top-notch."</p>
            <h3>— John Smith</h3>
          </blockquote> 
        </div>
      </section>
      </div>
    </div>
  );
}

export default Home;
