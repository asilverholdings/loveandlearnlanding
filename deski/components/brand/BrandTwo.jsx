'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const LogoSlider = [
  {
    img: "logo-12",
    url: "",
  },
  {
    img: "logo-13",
    url: "",
  },
  {
    img: "logo-14",
    url: "",
  },
  {
    img: "logo-15",
    url: "",
  },
  {
    img: "logo-16",
    url: "",
  },
  {
    img: "logo-13",
    url: "",
  },
];

const BrandTwo = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 600,
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
        <div
          className="img-meta d-flex align-items-center justify-content-center"
          key={i}
        >
          <a href={val.url}>
            <Image width={200} height={200} style={{width:'100%',height:'fit-content'}}     src={`/images/logo/${val.img}.png`} alt="logo" />
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default BrandTwo;
