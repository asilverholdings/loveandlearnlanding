'use client'


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function TestimonialFour() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
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
      img: "77",
      desc: `Latin derived from Cicero's 1st-century BC text De Finibus Bonoru et Malorum print demo version.`,
      reviewerName: "Jannatul Ekra",
      country: "USA",
      stars: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
    },
    {
      img: "77",
      desc: `Placeholder text commonly used in the graphic, print, and  industries for preview layouts & visual`,
      reviewerName: "Bostami Hasan",
      country: "USA",
      stars: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
    },
    {
      img: "77",
      desc: `From its medieval origins to the digital er, learn everything there is to know about the ubiquitous`,
      reviewerName: "Kuyeti Krima",
      country: "USA",
      stars: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
    },
    {
      img: "77",
      desc: `Latin derived from Cicero's 1st-century BC text De Finibus Bonoru et Malorum print demo version.`,
      reviewerName: "Zibaiya Reian",
      country: "USA",
      stars: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
    },
    {
      img: "77",
      desc: `Placeholder text commonly used in the graphic, print, and  industries for preview layouts & visual`,
      reviewerName: "Riana Sariya",
      country: "USA",
      stars: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div className="item" key={i}>
          <div className="feedback-wrapper">
            <Image  width={52} height={52}
              src={`/images/icon/${val.img}.svg`}
              alt="icon"
              className="icon"
            />
            <p>{val.desc}</p>
            <div className="d-sm-flex justify-content-between align-items-center">
              <h6 className="name">
                {val.reviewerName},<span>{val.country}</span>
              </h6>
              <ul className="d-flex">
                {val.stars.map((star, i) => (
                  <li key={i}>
                    <i className={`fa ${star}`} aria-hidden="true"></i>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
