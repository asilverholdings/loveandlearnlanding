

import React from "react";
import CopyRightThree from "../../../components/footer/CopyRightThree";
import FooterSeven from "../../../components/footer/FooterSeven";
import BlockFeaturesOne from "../../../components/vr-landing/BlockFeaturesOne";
import BlockFeaturesTwo from "../../../components/vr-landing/BlockFeaturesTwo";
import FancyFeature from "../../../components/vr-landing/FancyFeature";
import FancyVideo from "../../../components/vr-landing/FancyVideo";
import FeatureCounter from "../../../components/vr-landing/FeatureCounter";
import HeaderLanding from "../../../components/vr-landing/Header";
import HeroBanner from "../../../components/vr-landing/HeroBanner";
import LatestProduct from "../../../components/vr-landing/LatestProduct";
import Testimonials from "../../../components/vr-landing/Testimonials";
import Image from "next/image";
import dynamic from "next/dynamic";
const Scrollspy = dynamic(() => import('@/components/scrollpy/Scrollphy'), {
  ssr: false,

})

export const metadata = {
    title: 'VR Landing || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const VrLanding = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <HeaderLanding />
      {/* End .Header */}

      {/* <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
      
			--> */}
      <Scrollspy>
      <div className="hero-banner-fourteen lg-container" id="home">
        <div className="container">
          <HeroBanner />
          <div className="screen-holder">
            <Image width="941" height="450" src="/images/shape/241.svg" alt="image" className="img-meta" />
            <Image width={803} height={824} style={{height:'fit-content'}}    
              src="/images/assets/ils-03.png"
              alt="illustration"
              className="shapes vr-image"
            />
            <Image  width="55" height="55"
              src="/images/shape/242.svg"
              alt="illustration"
              className="shapes shape-one"
            />
            <Image  width="45" height="55"
              src="/images/shape/242.svg"
              alt="illustration"
              className="shapes shape-two"
    
            />
            <Image  width="75" height="55"
              src="/images/shape/242.svg"
              alt="illustration"
              className="shapes shape-three"
     
            />
            <div className="rating-box">
              <Image  width="176" height="173" src="/images/shape/243.svg" alt="image" />
              <div className="rate">
                9.3 <br />
                <span>Rating</span>
              </div>
            </div>
          </div>
          {/* <!-- /.screen-holder --> */}
        </div>
      </div>
      {/* <!-- /.hero-banner-fourteen --> */}

      {/* <!-- 
			=============================================
				Fancy Feature Thirty Six
			============================================== 
			--> */}
      <div
        className="fancy-feature-thirtySix lg-container pt-170 pb-110 md-pt-120 md-pb-60"
        id="product"
      >
        <div className="container position-relative">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="title-style-eleven md-mb-40 text-center text-lg-left">
                <h2 className="text-white">Our latest Arrival.</h2>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="product_slider_one vr-landing-slider">
                <LatestProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-feature-thirtySix --> */}

      {/* <!-- 
			=============================================
				Fancy Feature Thirty Seven
			============================================== 
			--> */}
      <div
        className="fancy-feature-thirtySeven lg-container pt-120"
        id="feature"
      >
        <FancyFeature />
      </div>
      {/* <!-- /.fancy-feature-thirtySeven --> */}

      {/* <!-- 
			=============================================
				Fancy Feature Thirty Eight
			============================================== 
			--> */}
      <div className="fancy-feature-thirtyEight lg-container mt-75 pb-150 md-pb-80">
        <div className="container">
          <div className="top-border pt-70 md-pt-30">
            <div className="row justify-content-center">
              <FeatureCounter />
            </div>
          </div>
          {/* <!-- /.top-border --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.fancy-feature-thirtyEight --> */}

      {/* <!-- 
			=============================================
				Fancy Feature Thirty Nine
			============================================== 
			--> */}
      <div className="fancy-feature-thirtyNine lg-container position-relative">
        <div className="container">
          <div className="row">
            <FancyVideo />
          </div>
        </div>
        <div className="img-meta">
          <Image width={1322} height={740} style={{height:'fit-content'}}     src="/images/media/img_119.png" alt="vr" data-aos="fade-up" />
        </div>
      </div>
      {/* <!-- /.fancy-feature-thirtyNine --> */}

      {/* <!--
			=====================================================
				Fancy Feature Forty
			=====================================================
			--> */}
      <div
        className="fancy-feature-forty lg-container pt-225 md-pt-120"
        id="product-details"
      >
        <div className="container">
          <BlockFeaturesOne />
          {/* <!-- /.block-style-thirtyEight --> */}

          <BlockFeaturesTwo />
          {/* <!-- /.block-style-thirtyEight --> */}
        </div>
      </div>
      {/* <!-- /.fancy-feature-forty --> */}

      {/* <!--
			=====================================================
				Client Feedback Slider Nine
			=====================================================
			--> */}
      <div
        className="client-feedback-slider-nine lg-container position-relative mt-250 md-mt-150"
        id="testimonial"
      >
        <Image  width="116" height="131" 
          src="/images/shape/245.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <div className="container">
          <div className="title-style-sixteen text-center">
            <div className="upper-title">Testimonials</div>
            <h2 className="text-white">Client Feedback</h2>
          </div>
          <div className="main-content position-relative mt-60">
            <div className="clientSliderEight slick-arrow-none">
              <Testimonials />
            </div>
          </div>
          {/* <!-- /.main-content --> */}
        </div>
      </div>
      {/* <!-- /.client-feedback-slider-nine --> */}

      {/* <!--
			=====================================================
				Fancy Feature Forty One
			=====================================================
			--> */}
      <div className="fancy-feature-fortyOne lg-container mt-180 md-mt-120 ">
        <div className="container">
          <div className="border-bottom pb-150 md-pb-80">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-last" data-aos="fade-left">
                <div className="title-style-sixteen">
                  <h2>Get Your VR Headset & start Rocking.</h2>
                </div>
                <p className="pe-xl-5 mt-30 mb-50">
                  Enjoy exclusive premium concerts, movies, games and other
                  exciting item.
                </p>
                <a href="#" className="buy-btn tran3s">
                  BUY NOW
                </a>
              </div>
              {/* End .col */}

              <div className="col-lg-6" data-aos="fade-right">
                <Image width={523} height={523} style={{height:'fit-content'}}    
                  src="/images/media/img_124.png"
                  alt="image"
                  className="md-mt-70"
                />
              </div>
              {/* End .col */}
            </div>
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.fancy-feature-fortyOne --> */}

      {/* =====================================================
            Footer Style Seven
        ===================================================== */}</Scrollspy>
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">
          <div className="container inner-btn-black">
            <FooterSeven />
          </div>

          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default VrLanding;
