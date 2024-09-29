'use client'
import Image from "next/image";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    margin: 30,
  };

  const TestimonilContent = [
    {
      desc: ` Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost. I know you have looked answer everywhere.`,
      reviewerImg: "img_20",
      reviewerName: "Jannatul Ekra",
      designation: "Designer",
    },
    {
      desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost. I know you have looked answer everywhere.`,
      reviewerImg: "img_20",
      reviewerName: "Bostami Hasan",
      designation: "Front-end Engineer",
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div
          className="item"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <p className="font-rubik">{val.desc}</p>
          <div className="d-lg-flex align-items-center">
            <Image  width={51} height={51}
              src={`/images/media/${val.reviewerImg}.png`}
              alt="image"
              className="c_img"
            />
            <div className="info">
              <strong>{val.reviewerName}</strong> <span>{val.designation}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
