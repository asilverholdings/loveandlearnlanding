'use client'


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const Portfolio = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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

  const portfolioContent = [
    {
      _id: 1,
      image: "img_110_1",
      editLink: "#",
      viewLink: "#",
    },
    {
      _id: 2,
      image: "img_111_1",
      editLink: "#",
      viewLink: "#",
    },
    {
      _id: 3,
      image: "img_112",
      editLink: "#",
      viewLink: "#",
    },
    {
      _id: 4,
      image: "img_112",
      editLink: "#",
      viewLink: "#",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {portfolioContent.map((item) => (
          <div className="item" key={item._id}>
            <div className="card-block">
              <Image width={444} height={440} style={{height:'fit-content'}}    
                src={`/images/media/${item.image}.jpg`}
                alt="image"
                className="w-100"
              />
              <div className="hover tran3s d-flex align-items-center justify-content-center flex-column">
                <a href={item.editLink} className="edit tran3s">
                  Edit
                </a>
                <a href={item.viewLink} className="view tran3s">
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Portfolio;
