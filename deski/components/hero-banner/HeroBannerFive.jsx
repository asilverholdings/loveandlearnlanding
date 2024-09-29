'use client'

import React, { useState } from "react";
import BrandTwo from "../brand/BrandTwo";
import Modal from "react-modal";
import HeaderPopupForm from "../form/HeaderPopupForm";
import Image from "next/image";

// Modal.setAppElement("#root");

const HeroBannerFive = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="hero-banner-five">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-11 col-md-10 m-auto">
            <h1
              className="font-recoleta hero-heading"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Build your <span>Product</span> with Deski pro app.
            </h1>
            <p
              className="hero-sub-heading"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              Deski delivered blazing fast performance, striking word soludtion
            </p>
          </div>
        </div>
        {/* End .row */}

        <div className="d-sm-flex align-items-center justify-content-center button-group">
          <a
            href="#"
            className="d-flex align-items-center ios-button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <Image  width="25" height="32"  src="/images/icon/apple.svg" alt="brand" className="icon" />
            <div>
              <span>Download on the</span>
              <strong>App store</strong>
            </div>
          </a>
          <a
            href="#"
            className="d-flex align-items-center windows-button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Image  width="26" height="26"  src="/images/icon/windows.svg" alt="icon" className="icon" />
            <div>
              <span>Get it on</span>
              <strong>Windows pc</strong>
            </div>
          </a>
        </div>
        {/* End button group */}

        <p
          className="sing-in-call"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          Different Platform? <span onClick={toggleModalOne}>Contact us</span>
        </p>
        {/* End sign-in-call */}
      </div>
      {/* End .container */}

      <div
        className="img-gallery"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="400"
      >
        <div className="container text-center">
          <div className="screen-container">
            <Image width={1162} height={645}
            style={{height:'fit-content'}}
              src="/images/assets/screen_01.png"
              alt="shape"
              className="main-screen"
            />
            <Image width={219} height={253}
            style={{height:'fit-content'}}
              src="/images/assets/screen_01.1.png"
              alt="shape"
              className="shapes screen-one"
            />
            <Image width={360} height={144}
            style={{height:'fit-content'}}
              src="/images/assets/screen_01.2.png"
              alt="shape"
              className="shapes screen-two"
            />
          </div>
          {/* /.screen-container */}
        </div>
      </div>
      {/* /.img-gallery */}

      <Image width="179" height="397"
        src="/images/shape/133.svg"
        alt="shape"
        className="shapes shape-one"
      />
      <Image width="91" height="241"
        src="/images/shape/134.svg"
        alt="shape"
        className="shapes shape-two"
      />
      <Image width="134" height="140"
        src="/images/shape/135.svg"
        alt="shape"
        className="shapes shape-three"
      />
      <Image width="84" height="92"
        src="/images/shape/136.svg"
        alt="shape"
        className="shapes shape-four"
      />

      <div className="partner-slider-two mt-110 md-mt-80">
        <div className="container">
          <p className="text-center">
            Over <span>32K+</span> software businesses growing with Deski.
          </p>
          <div className="partnerSliderTwo">
            <BrandTwo />
          </div>
          {/* End .partner slider two */}
        </div>
      </div>
      {/* /.partner-slider-two */}

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal  modal-contact-popup-one"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="box_inner ">
          <main className="main-body box_inner modal-content clearfix">
            <button className="close" onClick={toggleModalOne}>
              <Image  width="14" height="14"  src="/images/icon/close.svg" alt="close" />
            </button>
            {/* End close icon */}

            <div className="left-side">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="row">
                  <div className="col-xl-10 col-lg-8 m-auto">
                    <blockquote>
                      “I never dreamed about success. I worked for it.”
                    </blockquote>
                    <span className="bio">—Estée Lauder</span>
                  </div>
                </div>
                <Image width="649" height="466"
                  src="/images/assets/ils_18.svg"
                  alt="image"
                  className="illustration mt-auto"
                />
              </div>
            </div>
            {/* /.left-side */}

            <div className="right-side">
              <h2 className="form-title">Contact us</h2>
              <HeaderPopupForm />
            </div>
            {/*  /.right-side */}
          </main>
          {/* /.main-body */}
        </div>
      </Modal>
      {/* End  Modal For Request a demo */}
    </div>
    // /.hero-banner-five
  );
};

export default HeroBannerFive;
