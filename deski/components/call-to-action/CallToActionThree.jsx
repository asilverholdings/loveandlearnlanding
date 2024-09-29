'use client'


import React from "react";
import Link from "next/link";

const CallToActionThree = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="title-style-one">
          <h6 className="font-rubik" style={{ color: "#f96f60" }}>
            Start your free trial.
          </h6>
          <h2>New here? Start your free trial now.</h2>
        </div>
        {/* /.title-style-one */}
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <div className="form-wrapper">
          <form onClick={handleSubmit}>
            <input type="text" placeholder="Email address" />
            <button>Subscribe</button>
          </form>
          {/* End form */}
          <p className="font-rubik">
            Already a member? <Link     href="login">Sign in.</Link>
          </p>
        </div>
        {/* /.form-wrapper */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default CallToActionThree;
