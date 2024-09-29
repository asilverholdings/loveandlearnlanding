'use client'

import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";

export default function DocSlickAsNavTwo() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  var settings = {
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider
        {...settings}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        swipeToSlide={true}
        focusOnSelect={true}
        className="slick-nav-custom "
      >
        <div className="d-flex item_content">
          <div className="icon d-flex align-items-center justify-content-center">
            <Image width="11" height="15" src="/images/icon/81.svg" alt="icon" />
          </div>
          <p>
            Create task for any <br />
            team person
          </p>
        </div>
        {/* /.d-flex */}
        <div className="d-flex item_content">
          <div className="icon d-flex align-items-center justify-content-center">
            <Image width="11" height="15" src="/images/icon/81.svg" alt="icon" />
          </div>
          <p>
            Make timeframe for <br />
            do the task
          </p>
        </div>
        {/* /.d-flex */}
        <div className="d-flex item_content">
          <div className="icon d-flex align-items-center justify-content-center">
            <Image width="11" height="15" src="/images/icon/81.svg" alt="icon" />
          </div>
          <p>
            Get task complated by <br />
            your member
          </p>
        </div>
        {/* /.d-flex */}
      </Slider>
      {/* Bottom text slide */}

      <div className="position-relative">
        <Slider
          className="slick-nav-none carousel-inner"
          asNavFor={nav2}
          fade={true}
          speed={600}
          ref={(slider1) => setNav1(slider1)}
        >
          <div className="carousel-item">
            <Image width={1160} height={700} style={{height:'fit-content'}}     src="/images/assets/screen_07.png" alt="feature" />
          </div>
          <div className="carousel-item">
            <Image  width={1160} height={700} style={{height:'fit-content'}}    src="/images/assets/screen_08.png" alt="feature" />
          </div>
          <div className="carousel-item">
            <Image  width={1160} height={700} style={{height:'fit-content'}}   src="/images/assets/screen_09.png" alt="feature" />
          </div>
        </Slider>
        {/* Top Image slide */}
        <Image width="151" height="151"
          src="/images/shape/152.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width={292} height={292}
          src="/images/shape/153.png"
          alt="shape"
          className="shapes shape-two"
        />
      </div>
    </>
  );
}
