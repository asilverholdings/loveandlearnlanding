import React from "react";
import Link from "next/link";
import FeaturesEight from "../features/FeaturesEight";
import Image from "next/image";

const HeroBannerFour = () => {
  return (
    <div className="hero-banner-four">
      <Image width="213" height="86"
        src="/images/shape/100.svg"
        alt="shape"
        className="shapes shape-four"
      />
      <Image width="10" height="19"
        src="/images/shape/101.svg"
        alt="shape"
        className="shapes shape-five"
      />
      <Image width="242" height="433"
        src="/images/shape/102.svg"
        alt="shape"
        className="shapes shape-six"
      />
      <Image width="246" height="400"
        src="/images/shape/103.svg"
        alt="shape"
        className="shapes shape-seven"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-last">
            <div className="illustration-holder">
              <Image
                src="/images/assets/ils_14.svg"
                alt="shape"
                className="illustration"
                width={660}
                height={471}
              />
              <Image
                src="/images/assets/ils_14.1.svg"
                width={83}
                height = {102}
                alt="shape"
                className="shapes shape-one"
              />
              <Image width="83" height="98"
                src="/images/assets/ils_14.2.svg"
                alt="shape"
                className="shapes shape-two"
              />
              <Image  width="88" height="107"
                src="/images/assets/ils_14.3.svg"
                alt="shape"
                className="shapes shape-three"
              />
            </div>
            <p className="review-text">
              Over <span>150,000+ client</span> all over the world.
            </p>
          </div>
          {/* End .col */}

          <div className="col-lg-6 order-lg-first">
            <div className="text-wrapper">
              <h1 data-aos="fade-up" data-aos-duration="1200">
                <span>Event ticket</span> organiser & seller.
              </h1>
              <p
                className="sub-text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                For hassale free event, we are here to help you by creating
                online ticket.
              </p>
              <Link
                    href="/login"
                className="theme-btn-five"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                {" "}
                Let’s get started
              </Link>
            </div>
            {/* /.text-wrapper */}
          </div>
          {/* End .col */}
        </div>
      </div>

      <div className="fancy-feature-eight mt-160 md-mt-100">
        <div className="container">
          <div className="bg-wrapper">
            <FeaturesEight />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-eight */}
    </div>
  );
  //  {/* /.hero-banner-four */}
};

export default HeroBannerFour;
