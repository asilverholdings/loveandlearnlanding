import React from "react";
import FormEvent from "../../components/form/FormEvent";
import Link from "next/link";

const CallToActionFive = () => {
  return (
    <>
      <div className="title-style-five text-center">
        <h2>
          <span>Contact Us</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-xl-7 col-lg-8 col-md-9 m-auto">
          <p className="font-rubik sub-heading">
            Have any questions? Reach out to us!
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <Link
            href="/contact-us"
            className="theme-btn-five"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
            style={{ width: '15%' }}
          >
            Contact Us
        </Link>
      </div>
    </>
  );
};

export default CallToActionFive;
