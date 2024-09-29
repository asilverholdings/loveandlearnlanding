'use client'

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSix() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
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

  const TestimonilContent = [
    {
      img: "img_79",
      desc: ` Already closed 1 deal from Accelerator and in the process of
      closing 2 more now. Have “a few others” that will be closing
      in the near future!`,
      reviewerName: "Jannatul Ekra",
      country: "USA",
    },
    {
      img: "img_78",
      desc: ` Already closed 1 deal from Accelerator and in the process of
      closing 2 more now. Have “a few others” that will be closing
      in the near future!`,
      reviewerName: "Bostami Hasan",
      country: "USA",
    },
    {
      img: "img_79",
      desc: ` Already closed 1 deal from Accelerator and in the process of
      closing 2 more now. Have “a few others” that will be closing
      in the near future!`,
      reviewerName: "Kuyeti Krima",
      country: "USA",
    },
    {
      img: "img_80",
      desc: ` Already closed 1 deal from Accelerator and in the process of
      closing 2 more now. Have “a few others” that will be closing
      in the near future!`,
      reviewerName: "Zibaiya Reian",
      country: "USA",
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div className="item" key={i}>
          <div className="feedback-wrapper">
            
            <p>{val.desc}</p>
            <div className="d-flex align-items-center">
              <Image  width={43} height={43}
                src={`/images/media/${val.img}.png`}
                alt="icon"
                className="avatar"
              />
              <h6 className="name">
                {val.reviewerName},<span>{val.country}</span>
              </h6>
            </div>
          </div>
          {/* End .feedback-wrapper */}
        </div>
      ))}
    </Slider>
  );
}
