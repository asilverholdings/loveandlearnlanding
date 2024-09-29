import React from "react";

import Header from "../../../components/header/HeaderFour";
import FancyVideoOne from "../../../components/video/FancyVideoOne";
import AboutTabs from "../../../components/block-slider/AboutTabs";
import CounterThree from "../../../components/counter/CounterThree";
import TeamFive from "../../../components/team/TeamFive";
import Faq from "../../../components/faq/Faq";
import CallToActionFive from "../../../components/call-to-action/CallToActionFive";
import FooterFour from "../../../components/footer/FooterFour";
import BlogStyle5 from "../../../components/blog/BlogStyle5";
import Image from "next/image";
export const metadata = {
    title: 'About Event Organizer || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const EventOrganizer = () => {
  return (
    <div className="main-page-wrapper p0">
  
      {/* End Page SEO Content */}

      <Header />
      {/* End HeaderFour */}

      {/* =============================================
				Fancy Text block Twenty
			============================================== */}
      <div className="fancy-text-block-twenty">
        <Image width={232} height={477}
          src="/images/shape/124.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width={217} height={396}
          src="/images/shape/125.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="container">
          <h1 className="title font-slab">About us</h1>
          <div className="fancy-video-box-one mb-130 md-mb-70">
            <FancyVideoOne />
          </div>
          {/* /.fancy-video-box-one */}

          <div className="row">
            <div
              className="col-lg-5"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="client-info font-rubik">
                Over <span>150,000+ client</span>
              </div>
              <div className="title-style-five">
                <h2>
                  <span>Best event</span>
                  <br /> & ticket platform platform.
                </h2>
              </div>
            </div>
            <div
              className="col-lg-6 ms-auto"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <AboutTabs />
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-text-block-twenty */}

      {/* =====================================================
				Counter With Icon One
			===================================================== */}
      <div className="counter-with-icon-one">
        <div className="container">
          <div className="border-top pt-50 md-pt-10">
            <CounterThree />
          </div>
        </div>
      </div>
      {/* /.counter-with-icon-one */}

      {/* =============================================
				Team Section
			==============================================  */}
      <div className="team-section-four mt-250 md-mt-150">
        <Image width={148} height={440}
          src="/images/shape/129.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width={187} height={426}
          src="/images/shape/130.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="container">
          <div className="title-style-five text-center mb-90 md-mb-60">
            <h6>Our Team</h6>
            <h2>The team behind deski </h2>
          </div>

          <div className="team-wrapper">
            <div className="row">
              <TeamFive />
            </div>
            <Image width={92} height={107}
              src="/images/shape/126.svg"
              alt="shape"
              className="shapes shape-one"
            />
          </div>
          {/*  /.team-wrapper */}
        </div>
      </div>
      {/* /.team-section-four */}

      {/* 
     =============================================
				Fqa Text Block
		============================================== */}
      <div className="fancy-text-block-six mt-250 pt-50 md-mt-130">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="title-style-five mb-35">
                <h6>Why choose us</h6>
                <h2>
                  <span>Why you should</span> choose us?
                </h2>
              </div>
              {/* End title */}
              <Faq />
            </div>

            <div
              className="col-lg-6 col-md-8 m-auto"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="illustration-holder d-flex justify-content-end md-mt-50">
                <Image width={509} height={633} style={{height:'fit-content'}} src="/images/media/img_58.png" alt="media" />
                <Image width={179} height={397}
                  src="/images/shape/113.svg"
                  alt="media"
                  className="shapes shape-one"
                />
              </div>
              {/* /.illustration-holder */}
            </div>
          </div>
        </div>
      </div>
      {/* /.why should you choose us */}

      {/* =====================================================
				Feature Blog Four
			===================================================== */}
      <div className="feature-blog-four mt-250 md-mt-200">
        <div className="container">
          <div className="title-style-five text-center mb-70 md-mb-50">
            <h6>News & Updates</h6>
            <h2>Latest news & articles</h2>
          </div>
          {/* End .title */}
          <div className="row">
            <BlogStyle5 />
          </div>
        </div>
      </div>
      {/* /.feature-blog-four */}

      {/* 
      =============================================
			Call To Action
		  ============================================== */}
      <div className="fancy-short-banner-five pt-150 pb-150 md-pt-100 md-pb-100">
        <div className="container">
          <CallToActionFive />
        </div>
      </div>
      {/* End .fancy-short-banner-five */}

      {/* 
     =============================================
			Footer Four
		  ============================================== */}
      <footer className="theme-footer-four">
        <div className="top-footer">
          <div className="container">
            <FooterFour />
          </div>
          {/* /.container */}
        </div>

        <div className="container">
          <div className="bottom-footer-content">
            <p>
              Copyright @{new Date().getFullYear()}{" "}
              <a
                href="https://themeforest.net/user/ib-themes/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                ib-themes
              </a>{" "}
              inc.
            </p>
          </div>
          {/* /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-four */}
    </div>
  );
};

export default EventOrganizer;
