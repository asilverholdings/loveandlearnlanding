'use client'


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { bestSellingItem } from "@/data/products";
const RelatedProducts = () => {
  const settings = {
    dots: false,
    arrows: false,
    centerPadding: "0",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
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



  return (
    <>
      <Slider {...settings}>
        {bestSellingItem.map((item) => (
          <div className="item" key={item.id}>
            <div className="product-block-two">
              <div className="img-holder">
                <Link
                     href={`/products/${item.id}`}
                  className="d-flex align-items-center justify-content-center h-100"
                >
                  <Image width={465} height={609} style={{height:'fit-content'}}    
                    src={`/images/shop/${item.img}.png`}
                    alt="shop"
                    className="product-img tran4s"
                  />
                </Link>
                <Link     href="/cart" className="cart-icon" title="Add To Cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </Link>
              </div>
              {/* <!-- /.img-holder --> */}
              <div className="product-meta">
                <ul className="style-none d-flex justify-content-center rating">
                  {item.ratings}
                </ul>
                <Link    href={`/products/${item.id}`} className="product-title">
                  {item.title}
                </Link>

                <div className="price">${item.price}</div>
              </div>
              {/* <!-- /.product-meta --> */}
            </div>
            {/* <!-- /.product-block-two --> */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default RelatedProducts;
