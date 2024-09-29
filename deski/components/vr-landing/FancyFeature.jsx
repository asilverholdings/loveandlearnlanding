import React from "react";
import Image from "next/image";
const FancyFeature = () => {
  const rating = ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"];
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-11 m-auto" data-aos="fade-up">
          <div className="title-style-fifteen text-center">
            <div className="upper-title">FEATURES</div>
            <h2>Complete Headset Filled with Unique Experiences.</h2>
          </div>
        </div>
      </div>
      <div
        className="img-meta mt-80 mb-65 md-mt-50 md-mb-50"
        data-aos="fade-up"
      >
        <Image width={1320} height={597} style={{width:'100%',height:'fit-content'}}     src="/images/media/img_118.jpg" alt="media" className="w-100" />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <ul className="d-flex justify-content-center rating">
          {rating.map((star, i) => (
            <li key={i}>
              <i className={`fa ${star}`} aria-hidden="true"></i>
            </li>
          ))}
        </ul>
        <div className="rating-count">5,638 REVIEWS</div>
      </div>
      <div className="row">
        <div className="col-xl-11 m-auto">
          <p className="text-lg text-center mt-30">
            DeskiVr is non-stop fun. The biggest titles and multi-player
            games—we have them. New ways to workout, socialize or lose track of
            time—we have those too. And our library keeps growing every day.
            Discover what’s possible on janovr.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FancyFeature;
