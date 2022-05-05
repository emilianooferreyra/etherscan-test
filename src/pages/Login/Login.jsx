import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <section className="login-container">
      <div className="login-form">
        <div className="text-content">
          <h1 className="text-primary">
            Welcome
            <span className="text-back">back</span>
          </h1>
          <p className="text-account">Login to your account</p>
        </div>
        <div className="name-box">
          <div className="name-label">
            <p>Username</p>
          </div>
          <input className="input-name" type="text" placeholder="Username" />
        </div>
        <div className="password-box">
          <div className="password-label">
            <div className="block">
              <span className="block-text-primary">Password</span>
              <a className="block-text-secondary" href="#">Forgot your password</a>
            </div>
          </div>
          <input className="input-password" placeholder="Password" />
        </div>
        <div className="btn-checkbox">
          <div className="check">
            <input type="checkbox" id="" name="" value="" />
            <label className="text-checkbox" htmlFor="vehicle1">Remember & Auto Login</label>
          </div>
        </div>
        <div className="have-account">
          <div className="account-text">
            <p>Don't have an account? 
              <span className="sign-up" href="#">Click to sign up</span>
            </p>
          </div>
          <div className="get-started">
            <button type="button" className="login">LOGIN</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
