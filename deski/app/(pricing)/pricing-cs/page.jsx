import React from "react";
import Link from "next/link";
import HeaderTwo from "../../../components/header/HeaderTwo";
import Social from "../../../components/social/Social";
import FaqThree from "../../../components/faq/FaqThree";
import CopyRightTwo from "../../../components/footer/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import Pricing from "../../../components/pricing/pricing-one/Pricing";
import CallToActionThree from "../../../components/call-to-action/CallToActionThree";
import Image from "next/image";


export const metadata = {
    title: 'Pricing Customer Support || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 


const PricingCustomerSupport = () => {
  return (
    <div className="main-page-wrapper p0">
    
      {/* End Page SEO Content */}

      <HeaderTwo />
      {/* End Header */}

      {/* =============================================
				Pricing Section Two
			==============================================  */}
      <div className="pricing-section-two pricing-section-two-custom">
        <div className="fancy-hero-four">
          <div className="shapes shape-one"></div>
          <div className="shapes shape-two"></div>
          <div className="shapes shape-three"></div>
          <div className="shapes shape-four"></div>
          <div className="shapes shape-five"></div>
          <div className="shapes shape-six"></div>
          <div className="bg-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-xl-10 col-lg-11 m-auto">
                  <h2>Choose package match your budget</h2>
                </div>
                <div className="col-12 m-auto">
                  <p className="font-rubik sub-heading">
                    5 minute installation · Try Team plan features for 14 days ·
                    No credit card required
                  </p>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </div>
          {/*  /.bg-wrapper */}
        </div>
        {/* /.fancy-hero-four */}

        <div className="container">
          <div className="pricing-table-area">
            <div className="tab-content">
              <Pricing />
            </div>
            <Image width={187} height={187}
              src="/images/shape/64.svg"
              alt="shape"
              className="shapes shape-one"
            />
            <Image width={196} height={196}
              src="/images/shape/65.svg"
              alt="shape"
              className="shapes shape-two"
            />
          </div>
          {/*  /.pricing-table-area  */}
        </div>
      </div>
      {/* /.pricing-section-two  */}

      {/* 	=============================================
				Fancy Text block Seven
			==============================================  */}
      <div className="fancy-text-block-seven mt-130 md-mt-80">
        <div className="bg-wrapper no-bg">
          <Image  width={9} height={9}
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
            <div className="row">
              <div
                className="col-lg-5 col-md-6 col-sm-10 m-auto"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="img-holder">
                  <Image width={441} height={550} style={{height:'fit-content'}}     src="/images/media/img_19.png" alt="media" />
                  <Image width={179} height={179}
                    src="/images/shape/34.svg"
                    alt="shape"
                    className="shapes shape-six"
                  />
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-7 ms-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="quote-wrapper pt-60">
                  <Image width="60" height="43" src="/images/icon/26.svg" alt="icon" className="icon" />
                  <blockquote className="font-rubik">
                    Deski combines excellent live chat, ticketing and automation
                    that allow us to provide quality.
                  </blockquote>
                  <h6 className="mt-20">
                    Mike Lucas. <span>CEO & Founder deksi</span>
                  </h6>
                </div>
                {/* /.quote-wrapper */}
              </div>
            </div>
          </div>
        </div>
        {/*  /.bg-wrapper */}
      </div>
      {/* /.fancy-text-block-seven */}

      {/*=====================================================
				Useable Tools
			===================================================== */}
      <div className="useable-tools-section-two bg-shape mb-200 mt-150 md-mt-50 md-mb-120">
        <div className="bg-wrapper">
          <div className="shapes shape-one"></div>
          <div className="shapes shape-two"></div>
          <div className="shapes shape-three"></div>
          <div className="shapes shape-four"></div>
          <div className="container">
            <div className="title-style-two text-center mb-70 md-mb-10">
              <div className="row">
                <div
                  className="col-lg-10 col-md-11 m-auto"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>Integrates with your tools</p>
                  <h2>
                    Connect deski with the software you
                    <span>
                      use every
                      <Image width={375} height={44} src="/images/shape/line-shape-2.svg" alt="shape" />
                    </span>
                    day.
                  </h2>
                  <a href="#" className="theme-btn-two mt-60 md-mt-40">
                    Try out now
                  </a>
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
				FAQ Section
			===================================================== */}
      <div className="faq-section">
        <div className="container">
          <div className="title-style-two text-center mb-100 md-mb-80">
            <p>FAQ</p>
            <h2>Question & Answer</h2>
          </div>
          {/* /.title-style-one */}

          <div className="row">
            <div className="col-xl-9 col-lg-10 m-auto">
              <FaqThree />
            </div>
          </div>
          {/* /.row */}

          <div
            className="text-center more-faq-meta mt-75 md-mt-50"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h3 className="mb-35 font-rubik">Don’t find your answer?</h3>
            <Link href="/contact-cs">Contact us</Link>
          </div>
        </div>
      </div>
      {/* End .faq-section */}

      {/* 	=====================================================
			Fancy Short Banner Three
			===================================================== */}
      <div className="fancy-short-banner-three mt-200 md-mt-150">
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

export default PricingCustomerSupport;
