import React from "react";
import Link from "next/link";

import Header from "../components/header/HeaderFour";
import HeroBannerFour from "../components/hero-banner/HeroBannerFour";
import About from "../components/about/About";
import FeatureNine from "../components/features/FeatureNine";
import Faq from "../components/faq/Faq";
import PricingThree from "../components/pricing/PricingThree";
import TestimonialThree from "../components/testimonial/TestimonialThree";
import FaqFour from "../components/faq/FaqFour";
import FooterFour from "../components/footer/FooterFour";
import CallToActionFive from "../components/call-to-action/CallToActionFive";
import Image from "next/image";


export const metadata = {
  title: 'Event Organizer || Deski-Saas & Software Nextjs Template',
  description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
}

export default function Home () {
  return (
    <div className="main-page-wrapper p0">



      <Header />
      {/* End HeaderFour */}

      <HeroBannerFour />
      {/* End Hero Banner Four */}

      {/* 
     =============================================
				Fancy Text Block
		============================================== */}
      <div className="fancy-text-block-nineteen mt-250 mb-200 md-mt-150 md-mb-150">
        <div className="container">
          <About />
        </div>
      </div>
      {/* End  .fancy-text-block-nineteen*/}

      <div className="fancy-feature-nine">
        <Image
        width={14}
        height={19}
          src="/images/shape/107.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image
        width={20}
        height={17}
          src="/images/shape/108.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <Image
        width={16}
        height={24}
          src="/images/shape/109.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <Image
        width={16}
        height={24}
          src="/images/shape/110.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <Image
        width={18}
        height={22}
          src="/images/shape/111.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <Image
        width={23}
        height={18}
          src="/images/shape/112.svg"
          alt="shape"
          className="shapes shape-six"
        />

        <div className="container">
          <div className="title-style-five text-center mb-60 md-mb-30">
            <h6>GET STARTED IN MINUTES</h6>
            <h2>
              <span>3 simple & easy step to launch.</span>
            </h2>
          </div>
          {/* End title */}

          <FeatureNine />
        </div>
      </div>
      {/* /.fancy-feature-nine */}

      {/* 
     =============================================
				Fqa Text Block
		============================================== */}
      <div className="fancy-text-block-six overflow-hidden mt-250 md-mt-200">
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
                <Image width={304} height={304}
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

      {/* 
     =============================================
				Pricing Section Three
		============================================== */}
      <div className="pricing-section-three mt-250 mb-200 md-mt-150 md-mb-150">
        <Image width={13}
        height={18}
          src="/images/shape/107.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image
        width={20}
        height={17}
          src="/images/shape/108.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <Image
        width={16}
        height={24}
          src="/images/shape/109.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <Image
        width={26}
        height={20}
          src="/images/shape/110.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <Image
        width={17}
        height={21}
          src="/images/shape/111.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <Image width={22}
        height={17}
          src="/images/shape/112.svg"
          alt="shape"
          className="shapes shape-six"
        />

        <div className="container">
          <div className="title-style-five text-center mb-50 md-mb-40">
            <h6>Our Pricing</h6>
            <div className="row">
              <div className="col-lg-9 m-auto">
                <h2>Unbeatable prices, no contracts, simple & easy</h2>
              </div>
            </div>
          </div>

          <div className="pricing-table-area-three">
            <PricingThree />
          </div>
          {/* /.pricing-table-area-three */}
        </div>
        {/* ./container */}
      </div>
      {/* /.pricing-section-three */}

      {/* 
     =============================================
				Client Feedback Slider
		============================================== */}
      <div className="client-feedback-slider-three mb-250 ">
        <div className="container">
          <div className="title-style-five text-center mb-80 md-mb-50">
            <div className="row">
              <div className="col-lg-7 col-md-9 m-auto">
                <h2 data-aos="fade-up" data-aos-duration="1200">
                  <span>Check what’s our client </span>say about us.
                </h2>
              </div>
            </div>
          </div>
          {/* End title */}
          <div className="row">
            <div className="col-xl-7 col-lg-9 m-auto">
              <div className="testimonial-slider-wrapper">
                <Image width={75} height={54} src="/images/icon/65.svg" alt="icon" className="m-auto" />
                <div className="clientSliderThree">
                  <TestimonialThree />
                </div>
              </div>
              {/* /.testimonial-slider-wrapper */}
            </div>
          </div>
        </div>
        {/* /.container */}
        <Image
        width={82} height={82}
          src="/images/media/img_59.png"
          alt="media"
          className="shapes shape_1"
        />
        <Image width={46} height={46}
          src="/images/media/img_60.png"
          alt="media"
          className="shapes shape_2"
        />
        <Image width={87} height={87}
          src="/images/media/img_61.png"
          alt="media"
          className="shapes shape_3"
        />
        <Image width={46} height={46}
          src="/images/media/img_62.png"
          alt="media"
          className="shapes shape_4"
        />
        <Image width={111} height={111}
          src="/images/media/img_63.png"
          alt="media"
          className="shapes shape_5"
        />
        <Image width={57} height={57}
          src="/images/media/img_64.png"
          alt="media"
          className="shapes shape_6"
        />
      </div>
      {/* /.client-feedback-slider-three */}

      <div className="faq-section-four">
        <Image width={182} height={397}
          src="/images/shape/120.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width={176} height={433}
          src="/images/shape/121.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="container">
          <div className="title-style-five text-center mb-80 md-mb-60">
            <h6>FAQ</h6>
            <h2>
              <span>Question & Answer</span>
            </h2>
          </div>

          <div className="row">
            <div className="col-xl-9 col-lg-10 m-auto">
              <FaqFour />
            </div>
          </div>
          <div
            className="text-center mt-60 md-mt-50"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h3 className="font-rubik pb-30">Don’t find your answer?</h3>
            <Link className="theme-btn-five"     href="/contact-eo">
              Contact us
            </Link>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* End Question and answer */}

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


