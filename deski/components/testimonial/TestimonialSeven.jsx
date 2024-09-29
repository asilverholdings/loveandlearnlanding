'use client'

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSeven() {
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
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
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
      bgColor: "#FF47E2",
    },
    {
      img: "img_78",
      desc: ` Already closed 1 deal from Accelerator and in the process of
      closing 2 more now. Have “a few others” that will be closing
      in the near future!`,
      reviewerName: "Bostami Hasan",
      country: "USA",
      bgColor: "#00E5F3",
    },
    {
      img: "img_79",
      desc: ` Already closed 1 deal from Accelerator and in the process of
      closing 2 more now. Have “a few others” that will be closing
      in the near future!`,
      reviewerName: "Kuyeti Krima",
      country: "USA",
      bgColor: "#FFCF24",
    },
    {
      img: "img_80",
      desc: ` Already closed 1 deal from Accelerator and in the process of
      closing 2 more now. Have “a few others” that will be closing
      in the near future!`,
      reviewerName: "Zibaiya Reian",
      country: "USA",
      bgColor: "#8F6BF6",
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div className="item" key={i}>
          <div className="feedback-wrapper">
            <span className="ribbon" style={{ background: val.bgColor }}></span>
            <p>{val.desc}</p>
            <div className="d-flex align-items-center">
              <Image width={43} height={43}
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
