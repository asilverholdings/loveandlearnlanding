import Image from "next/image";
import React from "react";

const AboutFour = () => {
  return (
    <div className="row">
      <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
        <div className="text-wrapper">
          <div className="title-style-two">
            <p>About us</p>
            <h2>Best event & online ticket platform.</h2>
          </div>
          {/* /.title-style-two */}
          <p className="sub-text">
            Things go wrong. You’ll have questions. We understand. So we have
            real people, not bots, on hand to help, 7 days a week.
          </p>
          <p className="sub-text">
            We aim to answer any query in less than 10 minutes. Try now
          </p>
          <div className="name">
            Mr Rashed Kabir, <span>CEO</span>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
        <div className="img-holder md-mt-80">
          <Image width={450} height={560} style={{height:'fit-content'}}     src="/images/media/img_39.png" alt="media" />
          <Image width={122} height={108}
            src="/images/shape/60.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image width={152} height={152}
            src="/images/shape/61.svg"
            alt="shape"
            className="shapes shape-two"
          />
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default AboutFour;
