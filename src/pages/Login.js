import React, { useState } from 'react';
import loginBackgroundImage from '../assets/login_background.png';
import SignUp from './signup';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  height: '45vh',
  marginBottom: '30px',
};

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = (e) => {
    e.preventDefault();
    setIsSignUp(true);
  };

  if (isSignUp) {
    return <SignUp />;
  }

  return (
    <div>
      <h1>Login</h1>
      <div style={containerStyle}>
        <img
          src={loginBackgroundImage}
          alt="Placeholder"
          style={imageStyle}
        />
      </div>
      <form>
        <div>
          <label htmlFor="username">User Name:</label>
          <input type="text" id="name" name="name" required/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required/>
        </div>
        <div className='buttonStyle'>
          <button type="submit" >Login</button>
          <button type="button" onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
