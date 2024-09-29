'use client'

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { topItemContent } from "@/data/products";

const TopItem = () => {
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
        {topItemContent.map((item) => (
          <div className="item" key={item.id}>
            <div className="product-block-one">
              <div className="img-holder">
                <Link
                      href={`/products/${item.id}`}
                  className="d-flex align-items-center justify-content-center h-100"
                >
                  <Image width={305} height={370} style={{objectFit:'contain'}}    
                    src={`/images/shop/${item.img}.png`}
                    alt="shop product"
                    className="product-img tran4s"
                  />
                </Link>
                <Link     href="/cart" className="cart-icon" title="Add To Cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </Link>
                <div className="tag-one">{item.tag}</div>
              </div>
              {/* <!-- /.img-holder --> */}

              <div className="product-meta">
                <div className="d-lg-flex align-items-center justify-content-between">
                  <Link     href={`/products/${item.id}`} className="product-title">
                    {item.title}
                  </Link>
                  <ul className="style-none d-flex rating">{item.ratings}</ul>
                </div>
                <div className="price">${item.price.toFixed(2)}</div>
              </div>
              {/* <!-- /.product-meta --> */}
            </div>
            {/* <!-- /.product-block-one --> */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TopItem;
