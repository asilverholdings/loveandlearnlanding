
'use client'


import React from "react";
import Video from "../../elements/Video";
import BrandFive from "../../components/brand/BrandFive";
import Image from "next/image";

const heroContent = {
  title: "Edit video & create great content",
  description: `Make stunning videos with animation, stock footage, and photos.`,
  buttonText: " Download - It’s free",
};

const HeroBannerEight = () => {
  return (
    <div className="hero-banner-eight">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <h1 className="hero-heading" data-aos="fade-up">
              {heroContent.title}
            </h1>
            <p
              className="hero-sub-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {heroContent.description}
            </p>
            <a
              href="#"
              className="theme-btn-nine"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {heroContent.buttonText}
            </a>
          </div>
        </div>

        <div className="video-wrapper">
          <Video />
        </div>
        {/* /.video-wrapper */}
      </div>

      <div className="partner-slider-two mt-130 md-mt-80">
        <div className="container">
          <div className="partnerSliderTwo">
            <BrandFive />
          </div>
        </div>
      </div>
      {/* /.partner-slider-two */}
      <Image width="488" height="809"
        src="/images/shape/173.svg"
        alt="shape"
        className="shapes shape-right"
      />
      <Image width="563" height="862"
        src="/images/shape/174.svg"
        alt="shape"
        className="shapes shape-left"
      />
    </div>
    //   /.hero-banner-eight
  );
};

export default HeroBannerEight;
