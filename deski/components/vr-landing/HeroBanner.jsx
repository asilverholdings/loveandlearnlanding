import React from "react";

const HeroBanner = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h1 className="hero-heading" data-aos="fade-right">
          Let’s explore the virtual world.
        </h1>
        <p
          className="hero-sub-heading"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Deski delivered blazing performance, striking word solution lorem.
        </p>
        <div
          className="d-lg-flex align-items-center justify-content-between pe-xl-5"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="info">
            Virtual Reality Glass{" "}
            <span className="d-block">
              20% <span>SALE ON</span>
            </span>
          </div>
          <div className="price">$49.</div>
        </div>
        <a
          href="#"
          className="explore-btn mt-5 md-mt-40"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Explore more & Shop
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
