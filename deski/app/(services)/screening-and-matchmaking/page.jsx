import React from "react";
import Link from "next/link";
import FancyTextBlockTen from "../../../components/fancy-text-block/FancyTextBlockTen";
import CounterFive from "../../../components/counter/CounterFive";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import FancyFeatureThirtyFour from "../../../components/features/FancyFeatureThirtyFour";
import FancyVideoSix from "../../../components/video/FancyVideoSix";
export const metadata = {
    title: 'Service Version 2 || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const ServiceV2 = () => {
  return (
    <div className="main-page-wrapper">
    
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
            Fancy Hero One
        ==============================================  */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 m-auto">
              <h2 className="font-rubik">Our Services</h2>
            </div>
            <div className="col-xl-9 m-auto">
              <p className="font-rubik">
                We are a creative company that focuses on establishing long-term
                relationships with customers.
              </p>
            </div>
          </div>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/* <!-- /.fancy-hero-one --> */}

      {/* =============================================
            Video Box Two
        ==============================================  */}
      <div className="container">
        <div className="fancy-video-box-two">
          <FancyVideoSix />
        </div>
      </div>

      {/* =====================================================
            Counter Info Standard
        ===================================================== */}
      <div className="pt-120 md-pt-100 pb-150 md-pb-100">
        <div className="container">
          <CounterFive />
        </div>
      </div>
      {/* <!-- /.counter-info-standard --> */}

      {/* =============================================
        Fancy Feature Thirty One
      ==============================================  */}
      <div className="fancy-feature-thirtyOne pt-120 pb-160 md-pt-80 md-pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="title-style-four text-center pb-50 md-pb-20">
                <h2>Our Services</h2>
                <p className="sub-text pt-20">
                  Duis aute irure dolor in reprehenderit in voluptate velit io
                  cillum dolore eu fugiat nulla pariatur non labrum.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}
          <FancyFeatureThirtyFour />
        </div>
      </div>
      {/* <!-- /.fancy-feature-thirtyOne --> */}

      {/*=============================================
            Fancy Text block Ten
        ==============================================  */}
      <div className="fancy-text-block-ten mt-170 md-mt-100 mb-50">
        <div className="container">
          <FancyTextBlockTen />
        </div>
      </div>
      {/* /.fancy-text-block-ten */}

      {/* 
      =============================================
            Footer
        ============================================== */}
      <div className="footer-bg-wrapper">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="fancy-short-banner-two">
          <div className="container">
            <div className="content-wrapper">
              <div
                className="
                  bg-wrapper
                  d-lg-flex
                  align-items-center
                  justify-content-between
                "
              >
                <h2 className="font-gilroy-bold">
                  Don’t find the answer? contact us for any query.
                </h2>
                <Link href="/contact-pm"> Contact us</Link>
                <div className="bubble-one"></div>
                <div className="bubble-two"></div>
                <div className="bubble-three"></div>
                <div className="bubble-four"></div>
                <div className="bubble-five"></div>
              </div>
              {/* /.bg-wrapper */}
            </div>
            {/*  /.content-wrapper */}
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-short-banner-two */}

        <footer className="theme-footer-one pt-130 md-pt-70">
          <div className="top-footer">
            <div className="container">
              <Footer />
            </div>
            {/* /.container */}
          </div>
          {/* /.top-footer */}

          <div className="container">
            <div className="bottom-footer-content">
              <CopyRight />
            </div>
            {/*  /.bottom-footer */}
          </div>
        </footer>
        {/* /.theme-footer-one */}
      </div>
    </div>
  );
};

export default ServiceV2;
