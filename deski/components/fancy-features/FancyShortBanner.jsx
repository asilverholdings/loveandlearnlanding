'use client'



import Tilt from "react-parallax-tilt";
import React from 'react'
import Image from "next/image";

export default function FancyShortBanner() {
  return (
    <div className="fancy-short-banner-seven mt-250 md-mt-100">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-11 m-auto">
          <div className="title-style-six text-center">
            <h2>
              love our product? <span>Save $20</span> by grab it today.
            </h2>
          </div>
          {/* /.title-style-six */}
          <a
            href="#"
            className="d-flex align-items-center ios-button gr-bg-one hover-reverse-gr-bg-one"
          >
            <Image  width="25" height="32"  src="/images/icon/apple.svg" alt="icon" className="icon" />
            <div>
              <span>Download on the</span>
              <strong>App store</strong>
            </div>
          </a>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
      <Tilt>
        <div className="screen-meta">
          <Image  width={1160} height={340} style={{height:'fit-content'}}   
            src="/images/assets/screen_10.png"
            alt="screen"
            className="m-auto"
          />
          <Image width="104" height="89"
            src="/images/shape/165.svg"
            alt="screen"
            className="shapes shape-four"
          />
          <Image width={324} height={324}
            src="/images/shape/166.png"
            alt="screen"
            className="shapes shape-five"
          />
        </div>
      </Tilt>
    </div>
    {/* /.container */}

    <Image width="12" height="12"
      src="/images/shape/162.svg"
      alt="shape"
      className="shapes shape-one"
    />
    <Image width="15" height="15"
      src="/images/shape/163.svg"
      alt="shape"
      className="shapes shape-two"
    />
    <Image width="15" height="15"
      src="/images/shape/164.svg"
      alt="shape"
      className="shapes shape-three"
    />
  </div>
  )
}
