import React from "react";
import BrandFour from "../brand/BrandFour";
import FormAppoint from "../form/FormAppoint";
import Link from "next/link";
import Image from "next/image";

const HeroBannerNine = () => {
  return (
    <div className="hero-banner-nine lg-container">
      <Image width="1039" height="973" src="/images/shape/190.svg" alt="shape" className="shapes bg-shape" />
      <div className="container">
        <div className="illustration-container">
          <Image width={845} height={593} style={{height:'fit-content'}}     src="/images/assets/screen_17.png" alt="screen" />
        </div>
        {/* illustration-container */}

        <div className="row">
          <div className="col-lg-6">
            <h1 className="hero-heading">
              Simplified{" "}
              <span>
                Scheduling <Image  width="430" height="67"  src="/images/shape/189.svg" alt="shape" />
              </span>{" "}
              app for all.
            </h1>
            <p className="hero-sub-heading">
              Deski is your hub for scheduling & meetings professionally and
              efficiently.
            </p>
            <FormAppoint />
            <p className="term-text">
              Already using Deski? <Link     href="/login">Sign in.</Link>
            </p>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}

      <div className="partner-slider-two mt-130 md-mt-100">
        <div className="container">
          <p>
            Simplified scheduling for more than <span>200,000,000</span>{" "}
            meetings
          </p>
          <div className="partnerSliderTwo">
            <BrandFour />
          </div>
        </div>
      </div>
      {/* /.partner-slider-two */}
    </div>
    //   /.hero-banner-nine
  );
};

export default HeroBannerNine;
