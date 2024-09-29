import React from "react";
import FormEvent from "../../components/form/FormEvent";
import Link from "next/link";

const CallToActionFive = () => {
  return (
    <>
      <div className="title-style-five text-center">
        <h2>
          <span>Sign up & get started</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-xl-7 col-lg-8 col-md-9 m-auto">
          <p className="font-rubik sub-heading">
            Our ticketing platform is made for you - & loved by everyone lorem
            ipsum.
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
      <div className="row">
        <div className="col-xl-7 col-lg-8 col-md-10 m-auto">
          <FormEvent />
          <p className="info-text">
            Already a member? <Link     href="login">Sign in.</Link>
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default CallToActionFive;
