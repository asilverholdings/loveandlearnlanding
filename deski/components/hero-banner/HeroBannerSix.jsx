'use client'

import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const HeroBannerSix = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <h1
            className="font-recoleta hero-heading"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Build your Next <span>Product</span> with Deski.
          </h1>
          <p
            className="hero-sub-heading"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            Deski delivered blazing fast, striking soludtion
          </p>
          <div className="d-sm-flex align-items-center button-group">
            <div
              className="d-flex align-items-center video-button fancybox order-sm-last"
              onClick={() => setOpen(true)}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <Image width="19" height="19" 
                src="/images/icon/play-circle.svg"
                alt="icon"
                className="icon"
              />
              <span>See Intro Video</span>
            </div>
            <a
              href="#"
              className="d-flex align-items-center ios-button gr-bg-one hover-reverse-gr-bg-one order-sm-first"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Image  width="25" height="32"  src="/images/icon/apple.svg" alt="icon" className="icon" />
              <div>
                <span>Download on the</span>
                <strong>App store</strong>
              </div>
            </a>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="FDaF8_5dzzk"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default HeroBannerSix;
