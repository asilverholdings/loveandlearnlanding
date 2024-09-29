'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const LogoSlider = [
  {
    img: "logo-1",
    url: "",
  },
  {
    img: "logo-2",
    url: "",
  },
  {
    img: "logo-3",
    url: "",
  },
  {
    img: "logo-4",
    url: "",
  },
  {
    img: "logo-6",
    url: "",
  },
  {
    img: "logo-3",
    url: "",
  },
];

const BrandFive = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {LogoSlider.map((val, i) => (
        <div className="item" key={i}>
          <div className="img-meta d-flex align-items-center justify-content-center">
            <a href={val.url}>
              <Image width={122} height={38} style={{objectFit:'contain'}}     src={`/images/logo/${val.img}.png`} alt="logo" />
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BrandFive;
