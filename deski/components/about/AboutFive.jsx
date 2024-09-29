import Image from "next/image";
import React from "react";

const AboutFive = () => {
  return (
    <div className="row">
      <div className="col-lg-6 order-lg-last">
        <div className="text-wrapper">
          <div className="title-style-two mb-35 md-mb-20">
            <h2>
              <span>
                Exclusive fetures{" "}
                <Image  width="448" height="48" src="/images/shape/line-shape-5.svg" alt="shape" />
              </span>
              with great offers everytime.
            </h2>
          </div>
          {/* /.title-style-two */}
          <p>
            With Benefits from deski Pro, Earn rewards & Score discounts on
            purchases* Foryourself and your customers.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 order-lg-first">
        <div className="img-gallery">
          <Image width={400} height={484} style={{height:'fit-content'}}     src="/images/media/img_35.png" alt="media" />
          <Image width={292} height={309} style={{height:'fit-content'}}    
            src="/images/media/img_36.png"
            alt="media"
            className="overlay-img"
          />
          <Image width={100} height={129}
            src="/images/shape/49.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image width={198} height={198}
            src="/images/shape/50.svg"
            alt="shape"
            className="shapes shape-two"
          />
        </div>
        {/*  /.img-gallery */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default AboutFive;
