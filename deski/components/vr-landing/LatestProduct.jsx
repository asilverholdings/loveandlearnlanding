'use client'

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestProduct = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
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

  const vrProducts = [
    {
      _id: 1,
      image: "img_115",
      title: "Oculus Quest",
      productLink: "#",
      price: "72.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
    },
    {
      _id: 2,
      image: "img_116",
      title: "VR Controller",
      productLink: "#",
      price: "27.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
    },
    {
      _id: 3,
      image: "img_117",
      title: "Play Station 2",
      productLink: "#",
      price: "382.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
    },
    {
      _id: 4,
      image: "img_116",
      title: "VR Controller",
      productLink: "#",
      price: "27.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {vrProducts.map((product) => (
          <div className="item" key={product._id}>
            <div className="block-style-thirtySeven">
              <div className="img-meta d-flex align-items-center justify-content-center">
                <Image width={207} height={120} style={{objectFit:'contain'}}    
                  src={`/images/media/${product.image}.png`}
                  alt="vr product"
                />
              </div>
              <h4 className="p-title mt-25">
                <a href={product.productLink}>{product.title}</a>
              </h4>
              <div className="price mt-15 mb-15">${product.price}</div>
              <ul className="d-flex justify-content-center rating">
                {product.rating.map((star, i) => (
                  <li key={i}>
                    <i className={`fa ${star}`} aria-hidden="true"></i>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default LatestProduct;
