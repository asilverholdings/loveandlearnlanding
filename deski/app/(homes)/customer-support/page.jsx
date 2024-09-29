import React from "react";

import HeaderTwo from "../../../components/header/HeaderTwo";
import HeroBannerTwo from "../../../components/hero-banner/HeroBannerTwo";
import FeatureFour from "../../../components/features/FeatureFour";
import Faq from "../../../components/faq/Faq";
import CounterThree from "../../../components/counter/CounterThree";
import AboutTwo from "../../../components/about/AboutTwo";
import Social from "../../../components/social/Social";
import Testimonial from "../../../components/testimonial/Testimonial";
import CallToActionThree from "../../../components/call-to-action/CallToActionThree";
import FooterTwo from "../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../components/footer/CopyRightTwo";
import Image from "next/image";


export const metadata = {
    title: 'Customer Support || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }


const CustomerSupport = () => {
  return (
    <div className="main-page-wrapper">
    
      {/* End Page SEO Content */}

      {/* =============================================
		   Start Header
		   ============================================== */}
      <HeaderTwo />
      {/* End HeaderTwo Variation Three */}

      {/* =============================================
			Hero Banner Two
		  ============================================== */}
      <HeroBannerTwo />
      {/* End HeroBannerTwo */}

      {/* =============================================
				Fancy Feature Four
		  ============================================== */}
      <div className="fancy-feature-four mt-20">
        <div className="bg-wrapper">
          <Image width={288} height={273}
            src="/images/shape/18.svg"
            alt="shape"
            className="shapes shape-right"
          />
          <Image width={289} height={277}
            src="/images/shape/19.svg"
            alt="shape"
            className="shapes shape-left"
          />
          <div className="container">
            <div className="title-style-two text-center mb-100 md-mb-50">
              <div className="row">
                <div className="col-xl-8 col-lg-9 col-md-10 m-auto">
                  <p>What we do</p>
                  <h2>
                    Use deski to drive growth at
                    <span>
                      your business.{" "}
                      <Image width={375} height={44} src="/images/shape/line-shape-2.svg" alt="shape" />
                    </span>
                  </h2>
                </div>
                {/* End .col */}
              </div>
            </div>
            {/* End .title */}

            <div className="inner-content">
              <Image width={144} height={144}
                src="/images/shape/20.svg"
                alt="shape"
                className="shapes shape-one"
              />
              <Image width={201} height={202}
                src="/images/shape/21.svg"
                alt="shape"
                className="shapes shape-two"
              />
              <FeatureFour />
            </div>
            {/* End .inner-content */}
          </div>
        </div>
      </div>
      {/* /.fancy-feature-four */}

      {/* 
     =============================================
				Fancy Text Block Six
		============================================== */}
      <div className="fancy-text-block-six mt-250 md-mt-130">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="title-style-three mb-35">
                <p>GET STARTED IN MINUTES</p>
                <h2>
                  <span>
                    3 Main Reaosn to{" "}
                    <Image width="440" height="46" src="/images/shape/line-shape-3.svg" alt="shape" />
                  </span>
                  Choose us.
                </h2>
              </div>
              {/* End title */}
              <Faq />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div
          className="img-meta-container"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <Image width={799} height={633} style={{height:'fit-content'}}     src="/images/assets/feature-img-08.png" alt="feature" />
          <Image width={20} height={20}
            src="/images/shape/22.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image width={8} height={8}
            src="/images/shape/23.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <Image width={10} height={10}
            src="/images/shape/24.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <Image width={17} height={17}
            src="/images/shape/25.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <Image width={234} height={234}
            src="/images/shape/26.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <Image width={13} height={14}
            src="/images/shape/27.svg"
            alt="shape"
            className="shapes shape-six"
          />
          <Image width={6} height={8}
            src="/images/shape/28.svg"
            alt="shape"
            className="shapes shape-seven"
          />
        </div>
      </div>
      {/* /.fancy-text-block-six  */}

      <div className="counter-with-icon-one pt-200 md-pt-80">
        <div className="container">
          <CounterThree />
        </div>
      </div>
      {/* /.counter-with-icon-one */}

      {/* 
     =============================================
				Fancy Text Block
		============================================== */}
      <div className="fancy-text-block-seven mt-150 md-mt-100">
        <div className="bg-wrapper" style={{background: `url(/images/shape/bg.png) no-repeat top`}}>
          <Image width={9} height={9}
            src="/images/shape/29.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image width={11} height={11}
            src="/images/shape/30.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <Image  width={8} height={8}
            src="/images/shape/31.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <Image width={17} height={17}
            src="/images/shape/32.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <Image width={8} height={8}
            src="/images/shape/33.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <div className="container">
            <AboutTwo />
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-text-block-seven */}

      {/* 
     =============================================
				Fancy Text block Eight
		============================================== */}
      <div className="fancy-text-block-eight pt-150 pb-200 md-pt-100 md-pb-150">
        <div className="container">
          <div className="title-style-two text-center mb-150 md-mb-70">
            <div className="row">
              <div className="col-xl-8 col-lg-9 col-md-10 m-auto">
                <p>Features</p>
                <h2>
                  Use deski to drive growth at
                  <span>
                    your business.
                    <Image width={375} height={44} src="/images/shape/line-shape-2.svg" alt="shape" />
                  </span>
                </h2>
              </div>
              {/* End .col */}
            </div>
          </div>
          {/* End .title */}

          <div className="block-style-six pb-150 md-pb-70">
            <div className="row">
              <div
                className="col-lg-5"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-details pt-35 md-pb-50">
                  <Image width="51" height="48" src="/images/icon/27.svg" alt="icon" className="icon" />
                  <h3 className="title font-gilroy-bold">
                    Make communication Fast & efficient.
                  </h3>
                  <p className="text-meta">
                    Our chatbots and live chat capture more ipsum of your best
                    leads and convert them while they’re hot dummy text.
                  </p>
                  <div className="quote-wrapper">
                    <div
                      className="
                        quote-icon
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                    >
                      <Image  width="40" height="28" src="/images/icon/28.svg" alt="icon" />
                    </div>
                    <blockquote>
                      “Our team really feels great to use deski apps specially
                      their quality”
                    </blockquote>
                    <div className="name">
                      <strong>Micle Duke,</strong> Product Manager <br />
                      Uber Inc.
                    </div>
                  </div>
                  {/* /.quote-wrapper */}
                </div>
                {/* /.text-details */}
              </div>
              {/* End .col */}

              <div
                className="col-lg-7 col-md-9 m-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="illustration-holder illustration-one">
                  <Image width={614} height={649} style={{height:'fit-content'}}    
                    src="/images/assets/feature-img-09.png"
                    alt="image"
                    className="ms-auto"
                  />
                  <div className="shapes shape-one"></div>
                  <div className="shapes shape-two"></div>
                  <div className="shapes shape-three"></div>
                  <div className="shapes shape-four"></div>
                  <div className="shapes shape-five"></div>
                  <Image width={104} height={104}
                    src="/images/shape/35.svg"
                    alt="shape"
                    className="shapes shape-six"
                  />
                  <Image width={143} height={143}
                    src="/images/shape/36.svg"
                    alt="shape"
                    className="shapes shape-seven"
                  />
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .title */}
          </div>
          {/* /.block-style-six */}

          <div className="block-style-six pt-150 md-pt-40">
            <div className="row">
              <div
                className="col-lg-5 order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-details pt-35 md-pb-50">
                  <Image  width="55" height="52"  src="/images/icon/29.svg" alt="image" className="icon" />
                  <h3 className="title font-gilroy-bold">
                    Friendly user interface & easy to use.
                  </h3>
                  <p className="text-meta">
                    Deski stand with friendly interface with lots of features
                    that help our team and csutomer to collbarate easily.
                  </p>
                  <div className="quote-wrapper">
                    <div
                      className="
                        quote-icon
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                    >
                      <Image  width="40" height="28" src="/images/icon/28.svg" alt="icon" />
                    </div>
                    <blockquote>
                      “Our team really feels great to use deski apps specially
                      their quality”
                    </blockquote>
                    <div className="name">
                      <strong>Micle Duke,</strong> Product Manager <br />
                      Uber Inc.
                    </div>
                  </div>
                  {/* /.quote-wrapper */}
                </div>
                {/* /.text-details */}
              </div>
              {/* End .col */}

              <div
                className="col-lg-7 col-md-9 m-auto order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="illustration-holder illustration-two">
                  <Image width={599} height={529} style={{height:'fit-content'}}    
                    src="/images/assets/feature-img-10.png"
                    alt="image"
                    className="me-auto"
                  />
                  <div className="shapes shape-one"></div>
                  <div className="shapes shape-two"></div>
                  <div className="shapes shape-three"></div>
                  <div className="shapes shape-four"></div>
                  <Image width={162} height={163}
                    src="/images/shape/40.svg"
                    alt="shape"
                    className="shapes shape-five"
                  />
                  <Image width={116} height={116}
                    src="/images/shape/41.svg"
                    alt="shape"
                    className="shapes shape-six"
                  />
                </div>
              </div>
              {/* End .col */}
            </div>
          </div>
          {/* /.block-style-six  */}
        </div>
      </div>
      {/* /.fancy-text-block-eight */}

      {/*=====================================================
				Useable Tools
			===================================================== */}
      <div className="useable-tools-section-two bg-shape mb-200 md-mb-90">
        <div className="bg-wrapper">
          <div className="shapes shape-one"></div>
          <div className="shapes shape-two"></div>
          <div className="shapes shape-three"></div>
          <div className="shapes shape-four"></div>
          <div className="container">
            <div className="title-style-two text-center mb-70 md-mb-10">
              <div className="row">
                <div className="col-lg-10 col-md-11 m-auto">
                  <p>Integrates with your tools</p>
                  <h2>
                    Connect deski with the software you
                    <span>
                      use every
                      <Image width={375} height={44} src="/images/shape/line-shape-2.svg" alt="shape" />
                  </span>
                    day.
                  </h2>
                </div>
              </div>
            </div>
            {/*  /.title-style-two */}

            <div className="icon-wrapper">
              <Social />
            </div>
            {/* /.icon-wrapper */}
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.useable-tools-section-two */}

      {/* 	=====================================================
				Client Feedback Slider One
			===================================================== */}
      <div className="client-feedback-slider-one pt-50 pb-170 md-pb-80">
        <div className="shapes-holder">
          <Image width={726} height={786} src="/images/shape/39.svg" alt="shape" />
          <Image width={175} height={175}
            src="/images/shape/42.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image width={61} height={61}
            src="/images/media/img_21.png"
            alt="shape"
            className="cp-img-one"
          />
          <Image width={76} height={76}
            src="/images/media/img_22.png"
            alt="shape"
            className="cp-img-two"
          />
          <Image width={51} height={51}
            src="/images/media/img_23.png"
            alt="shape"
            className="cp-img-three"
          />
          <Image width={82} height={82}
            src="/images/media/img_24.png"
            alt="shape"
            className="cp-img-four"
          />
          <div className="title-style-two">
            <h2>
              What’s <br />
              Our Client Say <br />
              About Us.
            </h2>
          </div>
        </div>
        {/* /.shapes-holder */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ms-auto">
              <div className="feedback-meta">
                <div className="watermark font-gilroy-bold">Feedback</div>
                <Image width="75" height="53" src="/images/icon/30.svg" alt="shape" className="icon" />
                <div className="clientSliderOne">
                  <Testimonial />
                </div>
              </div>
              {/* /.feedback-meta */}
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.client-feedback-slider-one */}

      {/* 	=====================================================
			Fancy Short Banner Three
			===================================================== */}
      <div className="fancy-short-banner-three mt-100 md-mt-40">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionThree />
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-short-banner-four */}

      {/* 	=====================================================
				Footer Style Two
			===================================================== */}
      <footer className="theme-footer-two pt-150 md-pt-80">
        <div className="top-footer">
          <div className="container">
            <FooterTwo />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRightTwo />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default CustomerSupport;
