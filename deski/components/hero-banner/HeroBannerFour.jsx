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

      {/* Full-width wrapper for the image */}
      <div>
        <Image
          src="https://placehold.co/900x400/png"
          alt="image"
          className="banner"
          layout="responsive"  // Use layout responsive
          width={900}
          height={400}
        />
      </div>


      <div className="fancy-feature-eight mt-160 md-mt-100">
        <div className="container">
          <h3>Our Story</h3>
        </div>
      </div>
      <div style={{ height: '500px' }}></div>
      <div>
        <Image
          src="https://placehold.co/600x175/png"
          alt="image"
          className="banner"
          layout="responsive"  // Use layout responsive
          width={600}
          height={175}
        />
      </div>
      {/* /.fancy-feature-eight */}
    </div>
  );
  //  {/* /.hero-banner-four */}
};

export default HeroBannerFour;
