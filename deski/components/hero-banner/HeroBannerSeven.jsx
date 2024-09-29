'use client'

import React from "react";
import FormDemo from "../../components/form/FormDemo";
import BrandFour from "../brand/BrandFour";
import Image from "next/image";
const HeroBannerSeven = () => {
  return (
    <div className="hero-banner-seven lg-container">
      <div className="container">
        <div className="illustration-container">
          <Image width="773" height="543" src="/images/assets/ils_20.svg" alt="ils" />
        </div>
        {/* End .illustration-container */}

        <div className="row">
          <div className="col-lg-6">
            <h1 className="hero-heading">
              <span>Capture</span> Idea & find it later.
            </h1>
            <p className="hero-sub-heading">
              Deski delivered blazing fast, striking soludtion
            </p>
            <FormDemo />
            <p className="term-text">
              For teams & individuals — web, mobile, Mac, Windows
            </p>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}

      <div className="partner-slider-two mt-130 md-mt-80">
        <div className="container">
          <p className="text-center">
            Over <span>32K+</span> software businesses growing with Deski.
          </p>
          <div className="partnerSliderTwo">
            <BrandFour />
          </div>
        </div>
      </div>
      {/* End .partner-slider-two */}

      {/* /.partner-slider-two  */}
    </div>
  );
};

export default HeroBannerSeven;
