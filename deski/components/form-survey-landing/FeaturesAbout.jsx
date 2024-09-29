import React from "react";
import Image from "next/image";
const FeaturesAbout = () => {
  return (
    <div className="row align-items-center">
      <div
        className="col-xl-5 col-lg-6 ms-auto order-lg-last"
        data-aos="fade-left"
      >
        <div className="title-style-fourteen">
          <div className="upper-title">GREAT INTERFACE</div>
          <h2>First-class & smooth user experience.</h2>
        </div>
        <div className="tag-line pb-10">
          Deski responds to previous answers to show only the most relevant
          questions. A better experience for respondents better data for you.
        </div>
        <a href="#" className="theme-btn-fourteen">
          Create survay now{" "}
        </a>
      </div>
      <div
        className="col-lg-6 order-lg-first text-center text-lg-left"
        data-aos="fade-right"
      >
        <div className="illustration-holder-two d-inline-block ps-4 ps-md-5 md-mt-90">
          <Image width={582} height={520} style={{height:'fit-content'}}     src="/images/assets/screen_38.png" alt="image" className="w-100" />
          <Image width={582} height={210} style={{height:'fit-content'}}    
            src="/images/assets/screen_38.1.png"
            alt="image"
            className="shapes shape-one"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesAbout;
