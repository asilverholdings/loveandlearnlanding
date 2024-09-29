'use client'

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
export default function SlickAsNav() {
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
        className="slick-nav-none"
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        autoplay={true}
      >
        <div className="item">
          <Image width={1174} height={663} style={{height:'fit-content'}}     src="/images/assets/feature-img-12.png" alt="feature" />
        </div>
        <div className="item">
          <Image width={1174} height={663} style={{height:'fit-content'}}     src="/images/assets/feature-img-12.png" alt="feature" />
        </div>
        <div className="item">
          <Image width={1174} height={663} style={{height:'fit-content'}}     src="/images/assets/feature-img-12.png" alt="feature" />
        </div>
      </Slider>
      {/* Top Image slide */}

      <Slider
        {...settings}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        swipeToSlide={true}
        focusOnSelect={true}
        className="slick-nav-custom"
      >
        <div className="block-style-eleven mt-40">
          <div className="num font-rubik">01</div>
          <div className="title">Personal Notes</div>
          <p className="font-rubik">
            A place to think and track ideas for you and your team
          </p>
        </div>
        {/* /.block-style-eleven */}
        <div className="block-style-eleven mt-40">
          <div className="num font-rubik">02</div>
          <div className="title">Knowledge Base</div>
          <p className="font-rubik">
            A home for your team, best practices and thoughts.
          </p>
        </div>
        {/* /.block-style-eleven */}
        <div className="block-style-eleven mt-40">
          <div className="num font-rubik">03</div>
          <div className="title">Products Doc</div>
          <p className="font-rubik">
            Beautiful docs for your APIs, Products, FAQs, & User Guides,
          </p>
        </div>
        {/* /.block-style-eleven */}
      </Slider>
      {/* Bottom text slide */}
    </>
  );
}
