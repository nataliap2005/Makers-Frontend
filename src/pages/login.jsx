import React from 'react';
import '../style/login.css';

const Login = () => {
  return (
    <div className="login-body">
      <div className="login-wrapper">
        <h1>Hello Again!</h1>
        <p>Welcome back, you've been missed!</p>
        <form>
          <input type="text" placeholder="Enter username" />
          <input type="password" placeholder="Password" />
          <p className="login-recover">
            <a href="#">Recover Password</a>
          </p>
        </form>
        <button className="login-button">Sign in</button>
        <p className="login-or">
          ----- or continue with -----
        </p>
        <div className="login-icons">
          <i className="fab fa-google"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-facebook"></i>
        </div>
        <div className="login-not-member">
          Not a member? <a href="#">Register Now</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
