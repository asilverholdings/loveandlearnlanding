import React from "react";
import Image from "next/image";

const HeroBannerFour = () => {
  return (
    <div className="hero-banner-four">
      {/* shapes and banner images */}
      <Image width="213" height="86" src="/images/shape/100.svg" alt="shape" className="shapes shape-four" />
      <Image width="10" height="19" src="/images/shape/101.svg" alt="shape" className="shapes shape-five" />
      <Image width="242" height="433" src="/images/shape/102.svg" alt="shape" className="shapes shape-six" />
      <Image width="246" height="400" src="/images/shape/103.svg" alt="shape" className="shapes shape-seven" />
    </div>
  );
};

export default HeroBannerFour;
