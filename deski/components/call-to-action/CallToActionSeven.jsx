import React from "react";
import Link from "next/link";
import Image from "next/image";

const CallToActionSeven = () => {
  return (
    <div className="fancy-short-banner-fourteen mt-150 md-mt-80">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up" data-aos-duration="1200">
            <div className="title-style-thirteen">
              <h2>
                200k+ Customers <br />
                have our deski.Try it now!
              </h2>
            </div>
            <p>Try it risk free — we don’t charge cancellation fees.</p>
            <Link     href="/signup" className="theme-btn-twelve">
              Let’s Get Started
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- /.container --> */}
      <Image width="72" height="141"
        src="/images/shape/239.svg"
        alt="shape"
        className="shapes shape-one"
      />
      <Image width="90" height="150"
        src="/images/shape/240.svg"
        alt="shape"
        className="shapes shape-two"
      />
      <Image  width="13" height="12" 
        src="/images/shape/232.svg"
        alt="shape"
        className="shapes shape-three"
      />
      <Image  width="17" height="20"
        src="/images/shape/233.svg"
        alt="shape"
        className="shapes shape-four"
      />
      <Image  width="13" height="16"
        src="/images/shape/234.svg"
        alt="shape"
        className="shapes shape-five"
      />
      <Image  width="14" height="14"
        src="/images/shape/235.svg"
        alt="shape"
        className="shapes shape-six"
      />
      <Image width="36" height="30"
        src="/images/shape/236.svg"
        alt="shape"
        className="shapes shape-seven"
      />
      <Image  width="13" height="12" 
        src="/images/shape/232.svg"
        alt="shape"
        className="shapes shape-eight"
      />
    </div>
  );
};

export default CallToActionSeven;
