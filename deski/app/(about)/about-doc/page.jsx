import React from "react";

import HeaderThree from "../../../components/header/HeaderThree";
import CallToActionTwo from "../../../components/call-to-action/CallToActionTwo";
import CounterFiveColored from "../../../components/counter/CounterFiveColored";
import TeamSlider from "../../../components/team/TeamSlider";
import SocialTwo from "../../../components/social/SocialTwo";
import CopyRight from "../../../components/footer/CopyRight";
import FooterThree from "../../../components/footer/FooterThree";
import Image from "next/image";
export const metadata = {
    title: 'About Documentation || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const Documentation = () => {
  return (
    <div className="main-page-wrapper p0">
    
      {/* End Page SEO Content */}

      <HeaderThree />
      {/* End Header */}

      {/* =============================================
				Fancy Hero Five
			============================================== */}
      <div className="fancy-hero-five">
        <Image
        width={220}
        height={502}
          src="/images/shape/93.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width={200} height={408}
          src="/images/shape/94.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-8 col-sm-10">
                <h1 className="heading">
                  <span>
                    The Truste Docs{" "}
                    <Image width={577} height={58} src="/images/shape/line-shape-11.svg" alt="shape" />
                  </span>
                  site ever.
                </h1>
                <p className="sub-heading">
                  GitBook started mid-2014 as an open-source tool for developers
                  to build documentation. Today we empower teams of all sizes to
                  build great internal & external doc
                </p>
              </div>
              <div className="col-lg-5 col-md-4">
                <Image width={451} height={590}
                  src="/images/media/img_52.png"
                  alt="media"
                  className="img-meta"
                />
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-five */}

      {/* =============================================
				Fancy Text block Seventeen
			============================================== */}
      <div className="fancy-text-block-seventeen mt-250 pt-20 md-mt-80">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 ms-auto order-lg-last"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="title-style-four">
                <h6>Our Story</h6>
                <div className="row">
                  <div className="col-lg-12 col-md-8">
                    <h2>
                      We’r providing quality service
                      <span>
                        since 2010!
                        <Image width={375} height={43} src="/images/shape/line-shape-2.svg" alt="shape" />
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}
            <div
              className="col-xl-6 col-lg-7 order-lg-first"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <p className="text-meta">
                Lorem ipsum dolor sit amet, consectetur adipiscing ed do eiusmod
                tempor inciddunt ut labore et dolore magna aliqua.{" "}
              </p>
              <p className="text-meta">
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor reprehen derit in
                voluptae velit esse cillum dolor fugia nul pariatur lorem itu.
              </p>
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/*  /.fancy-text-block-seventeen */}

      {/* =============================================
				Fancy Text block Eighteen
			============================================== */}
      <div className="fancy-text-block-eighteen mt-170 md-mt-80">
        <Image width={1590} height={851}
          src="/images/assets/ils_13.svg"
          alt="illustration"
          className="illustration"
          data-aos="fade-up"
          data-aos-duration="1200"
        />

        <div className="counter-info pt-90 pb-45 md-pt-60">
          <div className="container">
            <CounterFiveColored />
          </div>
        </div>
        {/*  /.counter-info */}
      </div>
      {/* /.fancy-text-block-eighteen */}

      {/* 	=============================================
				Team Section Three
			============================================== */}
      <div className="team-section-three">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between mb-50">
            <div className="title-style-four">
              <h2>
                <span>
                  Our Members
                  <Image width={375} height={43} src="/images/shape/line-shape-2.svg" alt="shape" />
                </span>
              </h2>
            </div>
          </div>
          {/* End .d-sm-flex */}
        </div>
        {/* End .container */}
        <div className="clearfix">
          <div className="teamSliderOne arrow-top-right">
            <TeamSlider />
          </div>
          {/* /.teamSliderOne */}
        </div>
      </div>
      {/* /.team-section-three */}

      {/* =====================================================
				Useable Tools
			===================================================== */}
      <div className="useable-tools-section bg-transparent mt-140 md-mt-80">
        <div className="container">
          <div className="title-style-three text-center mb-60 md-mb-50 sm-mb-30">
            <h6>Our Partners</h6>
            <h2>
              Who is
              <span>
                using deski{" "}
                <Image width={375} height={43} src="/images/shape/line-shape-2.svg" alt="shape" />
              </span>
              docs?
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 m-auto">
              <p className="sub-text pb-80 md-pb-50">
                Deski ties into your existing tools, services, & workflow. Get
                notifications or create story with others tools.
              </p>
            </div>
          </div>
          {/* End .row */}
          <SocialTwo />
        </div>
        {/* /.container */}
      </div>
      {/* /.useable-tools-section */}

      {/* =====================================================
				Map Area One
			===================================================== */}
      <div className="map-area-one mt-170 md-mt-80">
        <div className="si-content">
          <h3>Come say Hi!</h3>
          <p>
            We're based in Gazipur, a beautiful city just hours from the Dhaka!
          </p>
          <span>10 Rue Dugas-Montbel, 69002 Lyon</span>
        </div>
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"
          ></iframe>
        </div>
      </div>
      {/* /.map-area-one */}

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

export default Documentation;
