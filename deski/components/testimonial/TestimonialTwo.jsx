'use client'

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialTwo() {
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
      img: "logo-8",
      desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost. I know you have looked answer everywhere.`,
      reviewerName: "Jannatul Ekra",
      designation: "Designer",
    },
    {
      img: "logo-9",
      desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost. I know you have looked answer everywhere.`,
      reviewerName: "Bostami Hasan",
      designation: "Front-end Engineer",
    },
    {
      img: "logo-10",
      desc: ` Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost. I know you have looked answer everywhere.`,
      reviewerName: "Kuyeti Krima",
      designation: "Visual Designer",
    },
    {
      img: "logo-9",
      desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost. I know you have looked answer everywhere.`,
      reviewerName: "Zibaiya Reian",
      designation: "Motion Graphy Expert",
    },
    {
      img: "logo-10",
      desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost. I know you have looked answer everywhere.`,
      reviewerName: "Riana Sariya",
      designation: "Digital Photographer",
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div className="item" key={i}>
          <div className="bg-wrapper">
            <Image  width={158} height={49} style={{objectFit:'contain'}} src={`/images/logo/${val.img}.png`} alt="image" className="logo" />
            <p>{val.desc}</p>
            <div className="name">{val.reviewerName}</div>
            <div className="desig">{val.designation}</div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      ))}
    </Slider>
  );
}
