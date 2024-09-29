'use client'


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialThree() {
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
      reviewerName: "Jannatul Ekra",
      designation: "Designer",
    },
    {
      desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost. I know you have looked answer everywhere.`,
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
          data-aos-delay="100"
        >
          <p>{val.desc}</p>
          <h6 className="name">{val.reviewerName}</h6>
          <span className="desig">{val.designation}</span>
        </div>
      ))}
    </Slider>
  );
}
