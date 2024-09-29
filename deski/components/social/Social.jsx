'use client'

import Image from "next/image";
import React from "react";

const Social = () => {
  return (
    <ul className="clearfix">
      <li data-aos="fade-up" data-aos-duration="1200">
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={51} height={51}  src="/images/logo/09.png" alt="logo" />
        </div>
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={35} height={35}  src="/images/logo/10.png" alt="logo" />
        </div>
      </li>
      {/* End li */}

      <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={50} height={50}  src="/images/logo/11.png" alt="logo" />
        </div>
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={51} height={47}  src="/images/logo/12.png" alt="logo" />
        </div>
      </li>
      {/* End li */}

      <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={48} height={49}  src="/images/logo/13.png" alt="logo" />
        </div>
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={37} height={42}  src="/images/logo/14.png" alt="logo" />
        </div>
      </li>
      {/* End li */}

      <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={75} height={27}  src="/images/logo/15.png" alt="logo" />
        </div>
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={55} height={55}  src="/images/logo/18.png" alt="logo" />
        </div>
      </li>
      {/* End li */}

      <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={60} height={58}  src="/images/logo/16.png" alt="logo" />
        </div>
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={45} height={45}  src="/images/logo/17.png" alt="logo" />
        </div>
      </li>
      {/* End li */}

      <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={64} height={64}  src="/images/logo/19.png" alt="logo" />
        </div>
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={80} height={45}  src="/images/logo/20.png" alt="logo" />
        </div>
      </li>
      {/* End li */}

      <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="700">
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={47} height={47}  src="/images/logo/21.png" alt="logo" />
        </div>
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={41} height={35}  src="/images/logo/22.png" alt="logo" />
        </div>
      </li>
      {/* End li */}

      <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800">
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={57} height={54}  src="/images/logo/23.png" alt="logo" />
        </div>
        <div className="icon-box d-flex align-items-center justify-content-center">
          <Image width={37} height={37}  src="/images/logo/24.png" alt="logo" />
        </div>
      </li>
      {/* End li */}
    </ul>
  );
};

export default Social;
