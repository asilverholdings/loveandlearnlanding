'use client'


import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PortfolioContent } from "@/data/portfolios";
import Image from "next/image";


const Portfolio = () => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <>
      <Slider {...settings}>
        {PortfolioContent.map((val, i) => (
          <div className="item" key={i}>
            <div className="portfolio-block-three">
              <Link    href={`/portfolios/${val.id}`} className="img-holder">
                <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}    
                  src={val.img}
                  alt="portfolio"
                  className="w-100 tran5s"
                />
              </Link>
              <div className="text">
                <div className="tag">{val.meta}</div>
                <h4>
                  <Link    href={`/portfolios/${val.id}`}>{val.title}</Link>
                </h4>
              </div>
            </div>
            {/* /.portfolio-block-three  */}
          </div>
          //  End .item
        ))}
      </Slider>
    </>
  );
};

export default Portfolio;
