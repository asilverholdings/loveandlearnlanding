'use client'

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { TeamContentFive } from "@/data/team";

export default function TeamSlider() {


  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
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
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {TeamContentFive.map((item, i) => (
          <div
            className="item"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={item.animationDelay}
            key={i}
          >
            <Link      href={`/team-details-v2/${item.id}`}  className="team-member team-block-one">
              <div className="info">
                <div className="desig">{item.designation}</div>
                <div className="name">{item.name}</div>
              </div>
              <div className="img-meta">
                <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}     src={`/images/media/${item.img}.png`} alt="team" />
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
}
