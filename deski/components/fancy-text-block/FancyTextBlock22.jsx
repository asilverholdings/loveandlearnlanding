'use client'

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";

const FancyTextBlock22 = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="row align-items-center">
        <div
          className="col-xl-5 col-lg-6 order-lg-last"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="text-wrapper md-pt-50">
            <a
              className="fancybox mb-20 md-mb-10"
              onClick={() => setOpen(true)}
            >
              <Image  width="66" height="66" src="/images/icon/71.svg" alt="icon" className="icon" />
            </a>
            <div className="title-style-seven">
              <h2>
                Why you should <span>choose</span> Deski?
              </h2>
            </div>
            {/* /.title-style-seven */}
            <p>
              So how does it work? Let’s check our Getting Started tutorial
              pre-made templates.
            </p>
            <Link     href="/product-customer-support" className="theme-btn-eight">
              Learn more
            </Link>
          </div>
          {/* /.text-wrapper */}
        </div>
        {/* End .col */}

        <div
          className="col-xl-7 col-lg-6 col-md-8 m-auto order-lg-first"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="illustration-holder">
            <Image  width="759" height="597" src="/images/assets/ils_21.svg" alt="about" />
          </div>
        </div>
        {/* End .col */}
      </div>

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

export default FancyTextBlock22;
