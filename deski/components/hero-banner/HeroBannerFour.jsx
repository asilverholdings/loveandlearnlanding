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

      <div className="container">
        <div className="header-text">
          <h2>
            Love and Learn Nanny Agency
          </h2>
          <p>
          Love and Learn is a nannying agency in <b>Gainesville, FL,</b> created to connect families with fully vetted, 
          professional nannies trained in their unique curriculum focused on holistic child development.  At Love and Learn, 
          their mission is to provide care that nurtures growth and fosters learning, ensuring every child thrives. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerFour;
