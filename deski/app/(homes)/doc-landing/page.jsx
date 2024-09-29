
import React from "react";

import HeaderThree from "../../../components/header/HeaderThree";
import HeroBannerThree from "../../../components/hero-banner/HeroBannerThree";
import FancyFeatureEight from "../../../components/features/FancyFeatureEight";
import DocSlickAsNav from "../../../components/block-slider/DocSlickAsNav";
import TestimonialTwo from "../../../components/testimonial/TestimonialTwo";
import BrandThree from "../../../components/brand/BrandThree";
import FaqClassic from "../../../components/faq/FaqClassic";
import CopyRight from "../../../components/footer/CopyRight";
import FooterThree from "../../../components/footer/FooterThree";
import CallToActionTwo from "../../../components/call-to-action/CallToActionTwo";
import Image from "next/image";
export const metadata = {
    title: 'Doc Landing || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const DocLanding = () => {
  return (
    <div className="main-page-wrapper">
      
    
      <HeaderThree />
      {/* End Header */}

      <HeroBannerThree />
      {/* End Hero Banner Three */}

      {/* 
     =============================================
				Fancy Feature Eight
		============================================== */}
      <div className="fancy-feature-eight mt-110 md-mt-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 m-auto">
              <div className="title-style-four text-center mb-80 md-mb-30">
                <h2 data-aos="fade-up" data-aos-duration="1200">
                  Create documentation with technical-free writing,
                  <span>
                    {" "}
                    & effortless{" "}
                    <Image width={375} height={44} src="/images/shape/line-shape-2.svg" alt="shape" />
                  </span>
                  hosting.
                </h2>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xl-11 m-auto">
              <FancyFeatureEight />
            </div>
          </div>
          {/* End .row */}
        </div>
      </div>
      {/*  /.fancy-feature-eight */}

      {/* 
     =============================================
				Document Slide As Nav
		============================================== */}
      <div className="fancy-text-block-sixteen mt-200 md-mt-80">
        <div className="container">
          <DocSlickAsNav />
        </div>
      </div>
      {/* End text block based image slide */}

      {/* 
     =============================================
				Fancy Three Text Blokc
		============================================== */}
      <div className="fancy-feature-eight pt-150 md-pt-100">
        <div className="container">
          <div className="title-style-four text-center mb-60 md-mb-40">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <h6>How it works</h6>
                <h2>
                  Awesome place to start creating your{" "}
                  <span>
                    first doc with{" "}
                    <Image width={375} height={44} src="/images/shape/line-shape-2.svg" alt="shape" />
                  
                  </span>
                  deski
                </h2>
              </div>
            </div>
          </div>

          <div className="block-style-twelve">
            <div className="row">
              <div
                className="col-lg-6 col-md-8 ms-auto order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="illustration-holder">
                  <Image  width="635" height="373" src="/images/assets/ils_10.svg" alt="illustration" />
                </div>
              </div>
              <div
                className="col-lg-5 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>Documentation</h6>
                  <h2 className="font-rubik title">
                    A home for your team, best-practices & thoughts.
                  </h2>
                  <p>
                    With deksi docs, you can write, edit, let it collaborate
                    wherever you are lorem dumy text introduction.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twelve */}

          <div className="block-style-twelve">
            <div className="row">
              <div
                className="col-lg-6 col-md-8 me-auto"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="illustration-holder">
                  <Image  width="646" height="425" src="/images/assets/ils_11.svg" alt="illustration" />
                </div>
              </div>
              <div
                className="col-lg-5"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>User Guides</h6>
                  <h2 className="font-rubik title">
                    Docs for your APIs, products, FAQs and user guides,
                  </h2>
                  <p>
                    With deksi docs, you can write, edit, let it collaborate
                    wherever you are lorem dumy text introduction.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twelve */}

          <div className="block-style-twelve">
            <div className="row">
              <div
                className="col-lg-6 col-md-8 ms-auto order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="illustration-holder">
                  <Image  width="624" height="449" src="/images/assets/ils_12.svg" alt="illustration" />
                </div>
              </div>
              <div
                className="col-lg-5 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>Combine Idea</h6>
                  <h2 className="font-rubik title">
                    A place to think and track ideas for you & your team
                  </h2>
                  <p>
                    With deksi docs, you can write, edit, let it collaborate
                    wherever you are lorem dumy text introduction.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twelve */}
        </div>
      </div>
      {/* /.fancy-feature-eight */}

      {/* 
     =============================================
			Client Feedback Slider Two
		============================================== */}
      <div className="client-feedback-slider-two mt-180 md-mt-100">
        <Image width="40" height="36"
          src="/images/shape/78.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width="36" height="37"
          src="/images/shape/79.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <Image  width="152" height="83"
          src="/images/shape/80.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <Image width="27" height="28"
          src="/images/shape/81.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <Image width="34" height="45"
          src="/images/shape/82.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <Image width="39" height="40"
          src="/images/shape/83.svg"
          alt="shape"
          className="shapes shape-six"
        />
        <Image width="120" height="75"
          src="/images/shape/84.svg"
          alt="shape"
          className="shapes shape-seven"
        />
        <Image width="28" height="28"
          src="/images/shape/85.svg"
          alt="shape"
          className="shapes shape-eight"
        />
        <div className="container">
          <div className="title-style-four text-center mb-100 md-mb-60">
            <div className="row">
              <div className="col-lg-7 col-md-9 m-auto">
                <h6>Feedback</h6>
                <h2>
                  What’s Our Client Say <br />
                  <span>
                    About Us{" "}
                    <Image width={375} height={44} src="/images/shape/line-shape-2.svg" alt="shape" />
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-content">
          <div className="clientSliderTwo slick-nav-none">
            <TestimonialTwo />
          </div>
        </div>
        {/* /.slider-content */}
      </div>
      {/* /.client-feedback-slider-two */}

      <div className="useable-tools-section-three pt-200 pb-200 md-pt-100 md-pb-80 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-four">
                <h2>
                  <span>
                    Who is using ours
                    <Image width="462" height="50" src="/images/shape/line-shape-10.svg" alt="shape" />
                  </span>
                  deski docs?
                </h2>
              </div>
              <p className="sub-text">
                Deski ties into your existing tools, services, & workflow. Get
                notifications or create story with others tools.
              </p>
              <a href="#" className="all-button">
                See all partners <i className="flaticon-right-arrow"></i>
              </a>
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* /.container */}

        <div
          className="
        logo-wrapper
        d-flex
        flex-wrap
        justify-content-center
        align-items-center
      "
        >
          <BrandThree />
        </div>
        {/*  /.logo-wrapper */}
      </div>

      {/* End who use deski section */}

      {/* 
     =============================================
			Faq Classic
		============================================== */}
      <div className="faq-classic with-bg">
        <Image width="28" height="28"
          src="/images/shape/86.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width="33" height="45"
          src="/images/shape/87.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <Image width="135" height="83"
          src="/images/shape/88.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <Image width="45" height="36"
          src="/images/shape/89.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <Image width="30" height="31"
          src="/images/shape/90.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <Image width="142" height="75"
          src="/images/shape/91.svg"
          alt="shape"
          className="shapes shape-six"
        />
        <div className="container">
          <div className="title-style-four text-center mb-100 md-mb-70">
            <div className="row">
              <div className="col-lg-7 m-auto">
                <h6>FAQ’s</h6>
                <h2>
                  <span>
                    Questions & Answers
                    <Image width={375} height={44} src="/images/shape/line-shape-2.svg" alt="shape" />
                  
                  </span>
                </h2>
              </div>
              {/* End .col */}
            </div>
          </div>
          {/* End title */}
          <FaqClassic />
        </div>
      </div>
      {/* /.faq-classic */}

      {/* 
     =============================================
				Call to Action
		============================================== */}
      <div className="fancy-short-banner-four">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionTwo />
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-short-banner-four */}

      {/* 
     =============================================
				Footer
		============================================== */}
      <footer className="theme-footer-three pt-100">
        <div className="top-footer">
          <div className="container">
            <FooterThree />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <div className="row">
              <div className="col-lg-8 ms-auto">
                <CopyRight />
              </div>
            </div>
          </div>
          {/* /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-three */}
    </div>
  );
};

export default DocLanding;
