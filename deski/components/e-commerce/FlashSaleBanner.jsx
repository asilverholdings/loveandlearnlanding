import React from "react";

const FlashSaleBanner = () => {
  return (
    <div className="banner-bg row no-gutters" data-aos="fade-up">
      <div className="col-lg-6 right-half position-relative order-lg-2">
        <div className="fancy-text font-recoleta">45% Off</div>
        <div className="sale-text">FLASH SALE</div>
        <h3>
          Summer hit <br /> collection sale go on...
        </h3>
        <p className="pt-20 pb-35">Event will be continue till 23 Aug</p>
        <a href="#" className="shop-btn-two tran3s">
          Shop Now
        </a>
      </div>
      <div
        className="col-lg-6 left-half position-relative order-lg-1"
        style={{ background: "url(../images/media/img_125.jpg)" }}
      ></div>
    </div>
  );
};

export default FlashSaleBanner;
