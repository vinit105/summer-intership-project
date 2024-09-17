import React from 'react';
import aliceJohnsonImage from '../assets/alice-johnson.png';
import robertBrownImage from '../assets/robert-brown.png';

function DoctorDetails() {
  return (
    <div>
      <h1>Meet Our Doctors</h1>
      
        <section>
            <h2>Dr. Alice Johnson</h2>
            <img src={aliceJohnsonImage} alt="Dr. Alice Johnson"  style={{ height: 400, backgroundColor: "white"}}/>
            <p><strong>Specialty:</strong> Cardiology</p>
            <p><strong>Years of Experience:</strong> 15+</p>
            <p><strong>Board Certifications:</strong> Cardiology, Internal Medicine</p>
            <p><strong>Advanced Training:</strong> Interventional Cardiology</p>
            <p>Dr. Alice Johnson, with over 15 years of experience in cardiology, is highly regarded for her expertise in heart disease management and prevention. She holds board certifications in both cardiology and internal medicine, with advanced training in interventional cardiology. Dr. Johnson is dedicated to providing personalized, patient-centered care and is known for her compassionate approach, educating patients about their conditions and treatment options. She regularly speaks at health seminars and health fairs to promote heart disease awareness and prevention.</p>
        </section>

      
        <section>
            <h2>Dr. Robert Brown</h2>
            <img src={robertBrownImage} alt="Dr. Robert Brown" style={{ height: 400, backgroundColor: "white"}}/>
            <p><strong>Specialty:</strong> General Medicine</p>
            <p><strong>Years of Experience:</strong> 13+</p>
            <p><strong>Board Certifications:</strong> Internal Medicine</p>
            <p><strong>Focus Areas:</strong> Preventive Care, Chronic Disease Management</p>
            <p>Dr. Robert Brown offers comprehensive primary care services with extensive experience in diagnosing and treating a broad spectrum of medical conditions. Known for his thorough approach and commitment to patient well-being, Dr. Brown emphasizes preventive care and collaborates with patients to develop effective treatment plans tailored to their individual needs. His expertise in managing chronic diseases and preventive health makes him a trusted choice for comprehensive and proactive medical care.</p>
        </section>

    </div>
  );
}

export default DoctorDetails;
