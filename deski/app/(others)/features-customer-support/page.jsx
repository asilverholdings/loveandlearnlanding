import React from "react";

import HeaderTwo from "../../../components/header/HeaderTwo";
import Social from "../../../components/social/Social";
import AboutThree from "../../../components/about/AboutThree";
import AboutFive from "../../../components/about/AboutFive";
import CounterThree from "../../../components/counter/CounterThree";
import FooterTwo from "../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../components/footer/CopyRightTwo";
import FeatureSix from "../../../components/features/FeatureSix";
import CallToActionThree from "../../../components/call-to-action/CallToActionThree";
import Image from "next/image";
export const metadata = {
    title: 'Features Customer Support || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const FeaturesCustomerSupport = () => {
  return (
    <div className="main-page-wrapper p0">
    
      {/* End Page SEO Content */}

      <HeaderTwo />
      {/* End Header */}

      {/* 	=============================================
				Fancy Hero Three
			============================================== */}
      <div className="fancy-hero-three">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="shapes shape-five"></div>
        <div className="shapes shape-six"></div>
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-10 m-auto">
                <h1 className="heading">Check our features with details.</h1>
                <p className="sub-heading">
                  deski helps teams of all sizes get better at delivering
                  effortless customer
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper  */}
      </div>
      {/* /.fancy-hero-three */}

      {/*   =============================================
				Fancy Text block Eleven
			==============================================  */}
      <div className="fancy-text-block-eleven mt-225 md-mt-100">
        <div className="container">
          <AboutFive />
        </div>
      </div>
      {/* /.fancy-text-block-eleven */}

      {/* 	=====================================================
				Counter With Icon One
			===================================================== */}
      <div className="counter-with-icon-one pt-70 pb-45">
        <div className="container">
          <CounterThree />
        </div>
      </div>
      {/* /.counter-with-icon-one */}

      {/* =============================================
				Fancy Feature Six
			============================================== */}
      <div className="fancy-feature-six mt-140 md-mt-70">
        <div className="bg-wrapper">
          <div className="shapes shape-one"></div>
          <div className="shapes shape-two"></div>
          <div className="shapes shape-three"></div>
          <div className="shapes shape-four"></div>
          <div className="shapes shape-five"></div>
          <Image width={235} height={235}
            src="/images/shape/51.svg"
            alt="shape"
            className="shapes shape-six"
          />
          <div className="container">
            <div className="title-style-two text-center mb-85 md-mb-40">
              <h2>
                Our
                <span>
                  Features{" "}
                  <Image width={375} height={44} src="/images/shape/line-shape-2.svg" alt="shape" />
                  
                </span>
                list
              </h2>
              <div className="sub-text mt-15">
                Get to know all deski features, that are part of the complex
                multi-channel
              </div>
            </div>
            {/* End .title */}
            <FeatureSix />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-six */}

      {/*=====================================================
				Useable Tools
			===================================================== */}
      <div className="useable-tools-section-two bg-shape mb-250 mt-150 md-mt-100 md-mb-100">
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
				Fancy Text Block Eleven
			===================================================== */}
      <div className="fancy-text-block-eleven pt-50">
        <div className="container">
          <AboutThree />
        </div>
      </div>
      {/* /.fancy-text-block-eleven */}

      {/* 	=====================================================
			Fancy Short Banner Three
			===================================================== */}
      <div className="fancy-short-banner-three mt-225 md-mt-150">
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

export default FeaturesCustomerSupport;
