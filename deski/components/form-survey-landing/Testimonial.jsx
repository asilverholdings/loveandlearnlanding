'use client'


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const Testimonial = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    fade: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: false,
    centerPadding: "0",
  };
  const testimonialContent = [
    {
      _id: 1,
      img: "img_113",
      name: "Sara Harsa",
      designation: "Head of Content Marketing",
      descriptions: ` Form builders are as old as the web, but Typeform elevates the
          medium substantially.`,
    },
    {
      _id: 1,
      img: "img_114",
      name: "Bostami Hasan",
      designation: "Front-end Lead",
      descriptions: `Whether you’re promoting your business, showcasing your work
          or opening your store.`,
    },
  ];
  return (
    <>
      <Slider {...settings}>
        {testimonialContent.map((review) => (
          <div className="item" key={review._id}>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="feedback-wrapper">
                  <div className="tag">Client Feefdback</div>
                  <p className="pe-xl-5">{review.descriptions}</p>
                  <h4 className="name">{review.name}</h4>
                  <div className="cr-position">{review.designation}</div>
                </div>
                {/* <!-- /.feedback-wrapper --> */}
              </div>
              {/* End .col */}
              <div className="col-lg-6 col-md-5">
                <div className="img-meta sm-mb-30">
                  <Image width={566} height={665} style={{width:'100%',height:'fit-content'}}     src={`/images/media/${review.img}.jpg`} alt="social" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
