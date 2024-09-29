

import React from "react";

import HeaderLandingWebsiteBuilder from "../../../components/header/landing/HeaderLandingWebsiteBuilder";
import HeroBannerTwelve from "../../../components/hero-banner/HeroBannerTwelve";
import CounterSix from "../../../components/counter/CounterSix";
import FooterSeven from "../../../components/footer/FooterSeven";
import CopyRightThree from "../../../components/footer/CopyRightThree";
import FancyFeatureSeventeen from "../../../components/features/FancyFeatureSeventeen";
import FancyTextBlock29 from "../../../components/fancy-text-block/FancyTextBlock29";
import TestimonialSeven from "../../../components/testimonial/TestimonialSeven";
import CallToActionSeven from "../../../components/call-to-action/CallToActionSeven";
import FancyFeatureThirtyTwo from "../../../components/features/FancyFeatureThirtyTwo";
import Image from "next/image";
import dynamic from "next/dynamic";
const Scrollspy = dynamic(() => import('@/components/scrollpy/Scrollphy'), {
  ssr: false,

})
export const metadata = {
    title: 'Website Builder Landing || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }

const WebsiteBuilderLanding = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
    
      {/* End Page SEO Content */}

      <HeaderLandingWebsiteBuilder />
      {/* End Header for website builder landing */}

      {/* 	=============================================
        Theme Hero Banner
        ==============================================  */}
        <Scrollspy>
      <HeroBannerTwelve />

      {/* =============================================
        Counter Style Three
        ==============================================  */}
      <div className="counter-style-three lg-container mt-130">
        <div className="container">
          <div className="bottom-border">
            <CounterSix />
          </div>
        </div>
      </div>
      {/* <!-- /.counter-style-three --> */}

      {/* =====================================================
            Fancy Feature Seventeen
        ===================================================== */}
      <div
        className="fancy-feature-seventeen lg-container pt-150 md-pt-90"
        id="feature"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="title-style-thirteen text-center mb-130 md-mb-90">
                <div className="upper-title">Features</div>
                <h2>
                  {" "}
                  We’ve ton of features for give you
                  <span>
                    the best website
                    <Image width="391" height="36" 
                      src="/images/shape/line-shape-14.svg"
                      alt="line shape"
                    />
                  </span>
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="container">
          <div className="bottom-border pb-50">
            <div className="row">
              <FancyFeatureSeventeen />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-feature-seventeen --> */}

      {/* =============================================
            Fancy Feature Twenty Nine
        ==============================================  */}
      <div
        className="fancy-feature-twentyNine lg-container pt-150 mt-20 md-pt-70"
        id="p-tour"
      >
        <FancyTextBlock29 />
      </div>

      {/* =============================================
            Fancy Feature Thirty
        ==============================================  */}
      <div className="fancy-feature-thirty mt-180 md-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-9 m-auto">
              <div className="title-style-thirteen text-center mb-80 md-mb-60">
                <div className="upper-title">Others Features</div>
                <h2>
                  {" "}
                  Deski for every
                  <span>
                    business{" "}
                    <Image width="391" height="36" 
                      src="/images/shape/line-shape-14.svg"
                      alt="line shape"
                    />
                  </span>
                  You need.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="container">
            <FancyFeatureThirtyTwo />
          </div>
          <Image width="150" height="168"
            src="/images/shape/237.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image  width="150" height="150"
            src="/images/shape/238.svg"
            alt="shape"
            className="shapes shape-two"
          />
        </div>
        {/* <!-- /.wrapper --> */}
      </div>
      {/* <!-- /.fancy-feature-thirty --> */}

      {/* =====================================================
            Client Feedback Slider Six
        ===================================================== */}
      <div
        className="client-feedback-slider-six pt-200 md-pt-120"
        id="feedback"
      >
        <div className="inner-container">
          <div className="title-style-thirteen text-center mb-50 md-mb-20">
            <div className="upper-title">TESTimonials</div>
            <h2>
              Client
              <span>
                love us & we
                <Image width="391" height="36"  src="/images/shape/line-shape-14.svg" alt="line shape" />
              </span>
              love them
            </h2>
          </div>
          <div className="clientSliderSix style-two">
            <TestimonialSeven />
          </div>
        </div>
        {/* <!-- /.inner-container --> */}
      </div>
      {/* <!-- /.client-feedback-slider-six --> */}

      <CallToActionSeven />
      {/* End call to acion seven */}

      {/* =====================================================
        Footer Style Seven
        ===================================================== */}
        </Scrollspy>
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

export default WebsiteBuilderLanding;
