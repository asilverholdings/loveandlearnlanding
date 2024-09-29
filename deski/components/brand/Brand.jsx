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
    img: "logo-5",
    url: "",
  },
  {
    img: "logo-6",
    url: "",
  },
  {
    img: "logo-7",
    url: "",
  },
  {
    img: "logo-3",
    url: "",
  },
];

const brand = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {LogoSlider.map((val, i) => (
        <div className="item" key={i}>
          <a href={val.url}>
            <Image  width={140} height={38} style={{height:'38px',width:'fit-content'}} src={`/images/logo/${val.img}.png`} alt="logo" />
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default brand;
