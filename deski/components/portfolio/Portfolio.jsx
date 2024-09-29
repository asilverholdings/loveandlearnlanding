'use client'


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { PortfolioImages } from "@/data/portfolios";
import Link from "next/link";


const Portfolio = () => {
  const settings = {
    dots: false,
    draggable: false,
    arrow: true,
    infinite: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {PortfolioImages.map((val, i) => (
          <Link href={`/portfolios/${val.id}`} className="item" key={i}>
            <div className="img-meta">
              <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}     src={val.img} alt={val.altName} />
            </div>
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default Portfolio;
