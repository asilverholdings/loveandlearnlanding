



import React from "react";

import FancyFeatureTen from "../../../components/features/FancyFeatureTen";
import HeaderLanding from "../../../components/header/landing/HeaderLanding";
import HeroBannerFive from "../../../components/hero-banner/HeroBannerFive";
import FancyTextBlock21 from "../../../components/fancy-text-block/FancyTextBlock21";
import CounterTwo from "../../../components/counter/CounterTwo";
import FancyFeatureEleven from "../../../components/features/FancyFeatureEleven";
import Pricing from "../../../components/pricing/pricing-four/Pricing";
import TestimonialFour from "../../../components/testimonial/TestimonialFour";
import FooterFive from "../../../components/footer/FooterFive";
import Image from "next/image";
import dynamic from "next/dynamic";
const Scrollspy = dynamic(() => import('@/components/scrollpy/Scrollphy'), {
  ssr: false,

})



export const metadata = {
    title: 'Product Landing || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }



const ProductLanding = () => {
  return (
    <div className="main-page-wrapper font-gordita">
    
      {/* End Page SEO Content */}

      <HeaderLanding />
      {/* End HeaderLanding */}
      <Scrollspy>

      <div id="home">
        <HeroBannerFive />
      </div>
      {/* End HeaderBannerFive */}

      {/* 	=============================================
				Fancy Feature Ten
			==============================================  */}
      <div className="fancy-feature-ten pt-100 md-pt-70" id="features">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div
                className="col-md-6"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="title-style-six">
                  <h2>
                    The <span>Product</span> we work with.
                  </h2>
                </div>
                {/* /.title-style-six */}
              </div>
              {/* End .col */}

              <div
                className="col-lg-5 col-md-6"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <p className="sub-text pt-30 pb-30">
                  Commonly used in the graphic, print & publishing industris for
                  previewing visual mockups.
                </p>
              </div>
              {/* End .col */}
            </div>
            <FancyFeatureTen />
            {/* End Fancy Feature Ten */}
          </div>
          <Image width="92" height="84"
            src="/images/shape/137.svg"
            alt="shape"
            className="shapes shape-one"
          />
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-ten */}

      {/*   =============================================
				Fancy Text block Twenty One
			==============================================  */}
      <div className="fancy-text-block-twentyOne pt-170 md-pt-100" id="about">
        <div className="container">
          <FancyTextBlock21 />
        </div>
      </div>
      {/* /.fancy-text-block-twentyOne */}

      {/*  =====================================================
				Counter Style Two
			===================================================== */}
      <div className="counter-style-two mt-150 md-mt-60">
        <div className="border-bottom">
          <div className="container">
            <CounterTwo />
          </div>
        </div>
      </div>
      {/* /.counter-style-two */}

      {/*   =====================================================
				Fancy Feature Eleven
			===================================================== */}
      <div className="fancy-feature-eleven pt-130 md-pt-80" id="product">
        <div className="inner-container">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-9 m-auto">
                <div className="title-style-six text-center">
                  <h6>Our Product</h6>
                  <h2>
                    We’ve helping <span>customer</span> globally now.
                  </h2>
                </div>
                {/* /.title-style-six */}
              </div>
            </div>
          </div>
          {/* End .container */}
          <FancyFeatureEleven />
        </div>
        {/* /.inner-container */}
        <Image width="92" height="84"
          src="/images/shape/139.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width="111" height="106"
          src="/images/shape/140.svg"
          alt="shape"
          className="shapes shape-two"
        />
      </div>
      {/* /.fancy-feature-eleven */}

      {/*  =====================================================
				Pricing Section Four
			===================================================== */}
      <div className="pricing-section-four pt-200 md-pt-100" id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-xl-10  m-auto">
              <div className="title-style-six text-center">
                <h2>
                  Solo, Agency or Team? We’ve got you <span>covered.</span>
                </h2>
              </div>
              {/* /.title-style-six */}
            </div>
          </div>
        </div>
        {/* End .container */}

        <Pricing />
      </div>
      {/*  /.pricing-section-four */}

      {/*  =====================================================
				Client Feedback Slider Four
			===================================================== */}
      <div
        className="client-feedback-slider-four mt-200 md-mt-100"
        id="feedback"
      >
        <div className="inner-container">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9 col-md-8 m-auto">
                <div className="title-style-six text-center">
                  <h2>
                    <span>13,000+</span> Clients love Our product
                  </h2>
                </div>
                {/* /.title-style-six */}
              </div>
            </div>
          </div>
          <div className="clientSliderFour slick-nav-none">
            <TestimonialFour />
          </div>
          <Image width="133" height="140"
            src="/images/shape/141.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image width="88" height="94"
            src="/images/shape/142.svg"
            alt="shape"
            className="shapes shape-two"
          />
        </div>
        {/* /.inner-container */}
      </div>
      {/* /.client-feedback-slider-four */}

      {/*  =====================================================
				Fancy Short Banner Six
			===================================================== */}
      <div className="fancy-short-banner-six mt-150 md-mt-80">
        <Image width="125" height="252"
          src="/images/shape/143.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <div className="container">
          <div className="row">
            <div
              className="col-xl-9 col-lg-11 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-six text-center">
                <h2>
                  love our product? <br />
                  <span>Save $20</span> by grab it today.
                </h2>
              </div>
              {/* /.title-style-six */}
            </div>
          </div>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            Try it risk free — we don’t charge cancellation fees.
          </p>
          <a
            href="https://themeforest.net/item/deski-saas-software-react-template/33799794"
            className="theme-btn-seven"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="150"
          >
            Purchase Now
          </a>
        </div>
        {/* /.container */}
      </div>
      </Scrollspy>
      {/* /.fancy-short-banner-six */}

      {/* =====================================================
				Footer Style Five
			===================================================== */}
      <footer className="theme-footer-five mt-130 md-mt-100">
        <div className="inner-container">
          <div className="container">
            <FooterFive />
          </div>
        </div>
        {/* /.inner-container */}
        <p className="copyright">
          {" "}
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
      </footer>
      {/*  /.theme-footer-five */}
    </div>
  );
};

export default ProductLanding;
