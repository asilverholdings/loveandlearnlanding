'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const LogoSlider = [
  {
    img: "logo-21",
    url: "",
  },
  {
    img: "logo-22",
    url: "",
  },
  {
    img: "logo-23",
    url: "",
  },
  {
    img: "logo-24",
    url: "",
  },
  {
    img: "logo-25",
    url: "",
  },
  {
    img: "logo-22",
    url: "",
  },
  {
    img: "logo-24",
    url: "",
  },
];

const BrandFour = () => {
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
              <Image width={163} height={150} style={{width:'100%',height:'fit-content'}}     src={`/images/logo/${val.img}.png`} alt="logo" />
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BrandFour;
