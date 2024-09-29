import React from "react";
import Link from "next/link";
import Image from "next/image";
const HeroBannerThirteen = () => {
  return (
    // <!--
    // =============================================
    //     Theme Hero Banner
    // ==============================================
    // -->
    <div className="hero-banner-thirteen lg-container" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Link     href="/pricing-pm" className="slogan tran3s">
              <strong>Offer</strong> is going on till friday, $1.99/mo.{" "}
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </Link>
            <h1 className="hero-heading">Ask your customer in a better way.</h1>
            <p className="hero-sub-heading">
              Deski delivered blazing fast performance, striking word soludtion
            </p>
            <a href="#" className="theme-btn-fourteen">
              Get Started - It’s Free
            </a>
            <div className="info">No credit card required</div>
          </div>
        </div>

        <div className="screen-holder">
          <Image  width="812" height="689" 
            src="/images/assets/ils_22.svg"
            alt="illustration"
            className="img-meta"
          />
          <Image width="333" height="297"
            src="/images/assets/ils_22.1.svg"
            alt="illustration"
            className="shapes shape-one"
          />
          <Image  width="604" height="190" 
            src="/images/assets/ils_22.2.svg"
            alt="illustration"
            className="shapes shape-two"
          />
        </div>
        {/* <!-- /.screen-holder --> */}
      </div>
    </div>
    // <!-- /.hero-banner-thirteen -->
  );
};

export default HeroBannerThirteen;
