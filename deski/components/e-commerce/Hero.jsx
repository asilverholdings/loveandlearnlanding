import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="hero-banner-fifteen lg-container">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-xl-5 col-md-6">
              <h1 className="hero-heading font-recoleta" data-aos="fade-right">
                New Wineter Item.
              </h1>
              <p
                className="hero-sub-heading"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                We helping client to create websites with our talented expert.
              </p>
              <div
                className="d-sm-flex align-items-center"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <a href="#" className="shop-btn tran3s me-4">
                  Shop Now
                </a>
                <a href="#" className="cart-btn tran3s">
                  +
                </a>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="product-img-holder" data-aos="fade-left">
            <Image width={1009} height={955} style={{height:'fit-content'}}     src="/images/shop/img_03.png" alt="image" className="product-img" />
            <div className="offer-sticker d-flex flex-column align-items-center justify-content-center">
              <span className="sn1">30%</span>
              <span className="sn2">OFF</span>
            </div>
          </div>
          {/* End .product-img-holder */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
