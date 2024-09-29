'use client'

import React, { useState } from "react";

const LogIn = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="card">
      <p className="card-header">
        Already have an account?{" "}
        <button className="d-inline-block collapsed" onClick={handleClick}>
          Click here to login.
        </button>
      </p>

      <form
        onClick={handleSubmit}
        id="login-form"
        className={click ? "collapse show" : "collapse"}
      >
        <p>Please enter your details below.</p>
        <div className="row">
          <div className="col-md-6">
            <input type="text" placeholder="User name or email" required />
          </div>
          <div className="col-md-6">
            <input type="password" placeholder="Password" required />
          </div>
        </div>

        <button className="theme-btn-seven">Login</button>
        <a href="#" className="lost-passw">
          Lost your Password?
        </a>
      </form>
    </div>
  );
};

export default LogIn;
