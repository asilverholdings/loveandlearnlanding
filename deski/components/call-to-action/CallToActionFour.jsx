import React from "react";
import FormEvent from "../form/FormEvent";
import Link from "next/link";

const CallToActionFour = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="title-style-one">
          <h6 className="font-rubik" style={{ color: "#787CFF" }}>
            Start your free trial.
          </h6>
          <h2>New here? Start your free trial now.</h2>
        </div>
        {/* /.title-style-one */}
      </div>
      <div className="col-lg-6">
        <div className="form-wrapper">
          <FormEvent />
          <p className="font-rubik">
            Already a member? <Link     href="login">Sign in.</Link>
          </p>
        </div>
        {/* /.form-wrapper */}
      </div>
    </div>
  );
};

export default CallToActionFour;
