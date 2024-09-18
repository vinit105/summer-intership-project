import React, { useState } from 'react';
import signUpBackgroundImage from '../assets/signup_background.png';
import Home from './Home';


const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  height: '45vh',
  marginBottom: '30px',
};

function SignUp() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  
  const [isSignUp, setIsSignUp] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSignUp(true);
  };

  {/* confirm password and password validation */}

  if (isSignUp) {
    return <Home />;
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <div style={containerStyle}>
        <img
          src={signUpBackgroundImage}
          alt="Sign Up Background"
          style={imageStyle}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength={8}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            minLength={8}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className='buttonStyle'>
          <button type="submit" onClick={handleChange}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
