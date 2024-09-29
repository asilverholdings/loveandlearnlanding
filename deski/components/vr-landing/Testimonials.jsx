'use client'


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const Testimonials = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    rtl: true,
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
          dots: true,
        },
      },
    ],
  };
  const reviewContent = [
    {
      _id: 1,
      name: "Bostami H.",
      region: "Lodon",
      avatar: "img_46",
      ratingDetails: `Pellentesque gravida sceleri pretium. Quisque ut lacus quis neque
      lac lacinia eget augue mauris at magna. some lorem quis.`,
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
    },
    {
      _id: 1,
      name: "Jannatul Ara",
      region: "United Kingdom",
      avatar: "img_47",
      ratingDetails: `Pellentesque gravida sceleri pretium. Quisque ut lacus quis neque
      lac lacinia eget augue mauris at magna. some lorem quis.`,
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
    },
    {
      _id: 1,
      name: "Reladia M.",
      region: "USA",
      avatar: "img_48",
      ratingDetails: `Pellentesque gravida sceleri pretium. Quisque ut lacus quis neque
      lac lacinia eget augue mauris at magna. some lorem quis.`,
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
    },
    {
      _id: 1,
      name: "Kiron Li",
      region: "Australia",
      avatar: "img_49",
      ratingDetails: `Pellentesque gravida sceleri pretium. Quisque ut lacus quis neque
      lac lacinia eget augue mauris at magna. some lorem quis.`,
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
    },
  ];
  return (
    <>
      <Slider {...settings}>
        {reviewContent.map((review) => (
          <div className="item" key={review._id}>
            <div className="bg-wrapper">
              <div className="d-flex align-items-center">
                <Image width={51} height={51} style={{height:'fit-content'}}    
                  src={`/images/media/${review.avatar}.png`}
                  alt="media"
                  className="avatar rounded-circle"
                />
                <div className="ps-4">
                  <h6 className="name">{review.name}</h6>
                  <span className="region">{review.region}</span>
                </div>
              </div>
              <p className="pt-25 pb-30">{review.ratingDetails}</p>
              <div className="d-flex align-items-center justify-content-between">
                <ul className="d-flex justify-content-center rating">
                  {review.rating.map((star, i) => (
                    <li key={i}>
                      <i className={`fa ${star}`} aria-hidden="true"></i>
                    </li>
                  ))}
                </ul>
                <Image  width="28" height="23" src="/images/icon/198.svg" alt="icon" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonials;
