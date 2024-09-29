'use client'


import React from "react";
import Brand from "../brand/Brand";
import Image from "next/image";
const HeroBannerTwo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero-banner-two">
      <div className="container">
        <div className="row align-items-start justify-content-between">
          <div className="col-lg-6 order-lg-last">
            <div className="illustration-holder">
              <Image width={655} height={644}
               style={{height:'fit-content'}}
                src="/images/assets/ils-01.png"
                alt="shape"
                className="illustration_01"
              />
              <Image  width={370} height={191}
              style={{height:'fit-content'}}
                src="/images/assets/ils-01.1.png"
                alt="shape"
                className="shapes shape-one"
              />
              <Image width={390} height={212}
               style={{height:'fit-content'}}
                src="/images/assets/ils-01.2.png"
                alt="shape"
                className="shapes shape-two"
              />
              <Image  width={380} height={185}
               style={{height:'fit-content'}}
                src="/images/assets/ils-01.3.png"
                alt="shape"
                className="shapes shape-three"
              />
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 order-lg-first">
            <div className="hero-text-wrapper md-mt-50">
              <h1>
                <span>
                  Great ticketing
                  <Image width="554" height="43"
                    src="/images/shape/line-shape-1.svg"
                    alt="shape"
                    className="cs-screen"
                  />
                </span>
                system for your customer.
              </h1>
              <p className="sub-text">
                For hassale free event, we are here to help you by creating
                online ticket.
              </p>
              <form onClick={handleSubmit}>
                <input type="email" placeholder="Enter your email" />
                <button>Get Started</button>
              </form>
              <ul className="list-item d-flex mt-20">
                <li>Live chat</li>
                <li>Ticketing</li>
                <li>14 days free trial</li>
              </ul>
            </div>
            {/* /.hero-text-wrapper */}
          </div>
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}

      <div className="mt-65 md-mt-50 trusted-companies">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <p>
                Over <span>13,000+ Client</span> all over the world.
              </p>
            </div>
            <div className="col-12">
              <div className="companies-logo-slider">
                <Brand />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </div>
      {/*  /.trusted-companies */}
    </div>
    // End .hero-banner-two
  );
};

export default HeroBannerTwo;
