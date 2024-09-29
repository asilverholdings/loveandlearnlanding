import Image from "next/image";
import React from "react";

const FancyTextBlockThree = () => {
  return (
    <div className="row no-gutters">
      <div className="col-lg-6">
        <div className="feature-content light-bg">
          <div className="header" data-aos="fade-up" data-aos-duration="1200">
            <h3>Individual</h3>
            <p className="font-rubik">
              Wzprenr Investor Network is a global community that extends the
              reach of leading
            </p>
          </div>
          {/* /.header */}

          <div
            className="feature-list d-flex"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="icon-box d-flex align-items-center justify-content-center">
              <Image width="24" height="24"  src="/images/icon/07.svg" alt="icon" />
            </div>
            <div className="text-meta">
              <h4>Time well spent</h4>
              <p>
                Facilitates access to capital entrepreneurs through road show
                preparation.
              </p>
            </div>
            {/* /.text-meta */}
          </div>
          {/* /.feature-list */}
          <div
            className="feature-list d-flex"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="icon-box d-flex align-items-center justify-content-center">
              <Image width="24" height="24" src="/images/icon/08.svg" alt="icon" />
            </div>
            <div className="text-meta">
              <h4>Quietly powerful</h4>
              <p>
                Let intuition be your guide. We get out of your way and fight
                the friction in your team’s workflow so you don’t have to.
              </p>
            </div>
            {/* /.text-meta */}
          </div>
          {/* /.feature-list  */}
        </div>
        {/* /.feature-content */}
      </div>
      <div className="col-lg-6">
        <div className="feature-content dark-bg">
          <div className="header" data-aos="fade-up" data-aos-duration="1200">
            <h3>Big Company</h3>
            <p className="font-rubik">
              Wzprenr Investor Network is a global community that extends the
              reach of leading
            </p>
          </div>
          {/*  /.header */}

          <div
            className="feature-list d-flex"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="icon-box d-flex align-items-center justify-content-center">
              <Image width="24" height="24" src="/images/icon/07.svg" alt="icon" />
            </div>
            <div className="text-meta">
              <h4>Make your work easy</h4>
              <p>
                Remove the fog. We don’t want to be another task to complete or
                a tool to decipher.
              </p>
            </div>
            {/* /.text-meta */}
          </div>
          {/* /.feature-list */}
          <div
            className="feature-list d-flex"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="icon-box d-flex align-items-center justify-content-center">
              <Image width="24" height="24" src="/images/icon/08.svg" alt="icon" />
            </div>
            <div className="text-meta">
              <h4>Build together</h4>
              <p>
                Software is made better together. From task completion to
                product launch, we celebrate team wins big and small.
              </p>
            </div>
            {/* /.text-meta */}
          </div>
          {/* /.feature-list  */}
        </div>{" "}
        {/* /.feature-content */}
      </div>
    </div>
  );
};

export default FancyTextBlockThree;
