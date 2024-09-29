

import React from "react";
import dynamic from "next/dynamic";
const PricingFive = dynamic(() => import('../../../components/pricing/PricingFive'), {
    ssr: false,
  });
const FancyFeature = dynamic(() => import('@/components/fancy-features/FancyFeature'), {
    ssr: false,
  });
const FancyShortBanner = dynamic(() => import('@/components/fancy-features/FancyShortBanner'), {
    ssr: false,
  });
import HeaderLandingDark from "../../../components/header/landing/HeaderLandingDark";
import HeroBannerSix from "../../../components/hero-banner/HeroBannerSix";
import DocSlickAsNavTwo from "../../../components/block-slider/DocSlickAsNavTwo";
import FancyFeatureTwelve from "../../../components/features/FancyFeatureTwelve";
import Portfolio from "../../../components/portfolio/Portfolio";
import Testimonial from "../../../components/testimonial/TestimonialFive";

import FooterSix from "../../../components/footer/FooterSix";
import Image from "next/image";
const Scrollspy = dynamic(() => import('@/components/scrollpy/Scrollphy'), {
  ssr: false,

})

export const metadata = {
    title: ' Product Landing Dark || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const ProductLandingDark = () => {
  return (
    <div className="main-page-wrapper font-gordita dark-style lg-container p0">
    
      {/* End Page SEO Content */}

      <HeaderLandingDark />
      {/* End HeaderLanding */}

      {/*=============================================
			Theme Hero Banner
		  ==============================================  */}
      <Scrollspy>
      <div className="hero-banner-six" id="home">
        <div className="illustration-content">
          <Image width="700" height="700"
            src="/images/shape/144.svg"
            alt="shape"
            className="main-img ms-auto"
          />
          <Image width={716} height={569} style={{height:'fit-content'}}    
            src="/images/assets/screen_05.png"
            alt="screen"
            className="screen-one"
          />
          <div className="screen-two">
            <Image width={303} height={548} style={{height:'fit-content'}}    
              src="/images/assets/screen_06.png"
              alt="screen"
              className="ms-auto"
            />
          </div>
          <Image  width="25" height="25"
            src="/images/shape/145.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image width="120" height="104"
            src="/images/shape/146.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <Image width="15" height="15"
            src="/images/shape/147.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <Image width="13" height="13"
            src="/images/shape/148.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <Image width="83" height="93"
            src="/images/shape/149.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <Image width={154} height={154}
            src="/images/shape/150.png"
            alt="shape"
            className="shapes shape-six"
          />
        </div>
        {/* End .illustration-content */}

        <div className="container">
          <HeroBannerSix />
        </div>
        {/* End .container */}
      </div>
      {/* /.hero-banner-six */}

      {/*=============================================
		   Fancy Feature Twelve
	    ==============================================  */}
      <div className="fancy-feature-twelve pt-250 md-pt-50" id="about">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-10 col-md-8 m-auto">
                <div className="title-style-six text-center">
                  <h2>
                    Check why you <span>Should</span> Choose us
                  </h2>
                </div>
                {/* /.title-style-six */}
              </div>
            </div>
            {/* End .row */}
            <FancyFeatureTwelve />
          </div>
        </div>
        {/* /.bg-wrapper */}
        <Image width="99" height="86" src="/images/shape/151.svg" alt="image" className="shapes shape-one" />
      </div>
      {/*  /.fancy-feature-twelve */}

      {/*=============================================
			Fancy Feature Thirteen
		  ==============================================  */}
      <div className="fancy-feature-thirteen pt-250 md-pt-110 " id="features">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-11 col-md-10 m-auto">
              <div className="title-style-six text-center">
                <h2>
                  Bring all Team <span>Managment</span> & task togather
                </h2>
                <p className="text-xs">
                  Lorem ipsum dolor on adipisci elit io sed do eiusmod tempor
                  dsu elit
                </p>
              </div>
              {/* /.title-style-six */}
            </div>
          </div>

          <div className="sldier-wrapper  mt-30 md-mt-50">
            <DocSlickAsNavTwo />
          </div>
          {/* /.sldier-wrapper  */}
        </div>
      </div>
      {/* /.fancy-feature-thirteen */}

      {/*=====================================================
				Fancy Feature Fourteen
			===================================================== */}
      <FancyFeature/>
      {/* /.fancy-feature-fourteen */}

      {/*=====================================================
				Fancy Portfolio One
			===================================================== */}
      <div className="fancy-portfolio-one pt-180 md-pt-100" id="product">
        <div className="container">
          <div className="title-style-six">
            <h2>
              Our <span>Portfolio</span>
            </h2>
          </div>
          {/*  /.title-style-six */}
        </div>

        <div className="portfolioSliderOne arrow-top-right pt-120 md-pt-70">
          <Portfolio />
        </div>
      </div>
      {/* /.fancy-portfolio-one */}

      {/*=====================================================
			Client Feedback Slider Five
			===================================================== */}
      <div
        className=" client-feedback-slider-five mt-200 md-mt-80"
        id="feedback"
      >
        <div className="client-feedback-slider-fiv">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-10 col-md-9 m-auto">
                <Image  width="79" height="78"
                  src="/images/icon/84.svg"
                  alt="icon"
                  className="icon m-auto"
                />
                <div className="title-style-six text-center mt-25">
                  <h2>
                    Check what’s <span>Customer </span>say about us.
                  </h2>
                </div>
                {/*  /.title-style-six */}
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-xl-7 col-lg-10 m-auto">
                <div className="custom-icon-slick-arrow clientSliderFive mt-80 md-mt-50">
                  <Testimonial />
                </div>
                {/* /.clientSliderThree */}
                <Image width="26" height="26"
                  src="/images/shape/156.svg"
                  alt="shape"
                  className="shapes shape-one"
                />
                <Image width="16" height="16"
                  src="/images/shape/157.svg"
                  alt="shape"
                  className="shapes shape-two"
                />
                <Image width="14" height="14"
                  src="/images/shape/158.svg"
                  alt="shape"
                  className="shapes shape-three"
                />
              </div>
            </div>
          </div>
          {/* /.container */}
          <div className="circle-area">
            <Image width={1631} height={1311} src="/images/shape/155.svg" alt="shape" className="main-img" />
          </div>
        </div>
      </div>
      {/* /.client-feedback-slider-three */}

      {/* 	=====================================================
				Pricing Section Five
			===================================================== */}
      <div
        className="pricing-section-five  pt-250 md-mt-150 sm-mt-80 md-pt-80"
        id="pricing"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-last">
              <div className="title-style-six ps-5 md-p0">
                <h6 style={{ fontSize: "15" }}>Our Pricing</h6>
                <h2>
                  Choose your <span>Product.</span>
                </h2>
                <p className="text-xs">
                  Lorem ipsum dolor on adipisci elit sed do eiusmod liu.
                </p>
              </div>
              {/* /.title-style-six */}
            </div>
            {/* End .col */}

            <div className="col-lg-7">
              <div className="pricing-table-area-five md-mt-60">
                <Image width={159} height={159}
                  src="/images/icon/88.png"
                  alt="icon"
                  className="shapes shape-one"
                />
                <Image width={214} height={214}
                  src="/images/shape/160.png"
                  alt="shape"
                  className="shapes shape-two"
                />
                <PricingFive />
              </div>
              {/* /.pricing-table-area-five */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.pricing-section-five */}

      {/*=====================================================
					Fancy Short Banner Seven
				===================================================== */}
      <FancyShortBanner/>
      {/* /.fancy-short-banner-seven */}

      {/*=====================================================
					Footer Style Six
				===================================================== */}
        </Scrollspy>
      <footer className="theme-footer-six">
        <div className="inner-container">
          <div className="container">
            <FooterSix />
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
          </div>
          <Image width={405} height={348}
            src="/images/shape/167.png"
            alt="shape"
            className="shapes shape-one"
          />
        </div>
        {/*  /.inner-container */}
      </footer>
      {/* /.theme-footer-six */}
    </div>
  );
};

export default ProductLandingDark;
