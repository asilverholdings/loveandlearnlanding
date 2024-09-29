
import React from "react";
import Link from "next/link";

import HeaderLandingDocSignature from "../../../components/header/landing/HeaderLandingDocSignature";
import HeroBannerEleven from "../../../components/hero-banner/HeroBannerEleven";
import FancyFeatureTewentySeven from "../../../components/features/FancyFeatureTewentySeven";
import FancyFeatureTewentySix from "../../../components/features/FancyFeatureTewentySix";
import BrandSix from "../../../components/brand/BrandSix";
import FancyFeatureTewentyEight from "../../../components/features/FancyFeatureTewentyEight";
import FancyVideoFour from "../../../components/video/FancyVideoFour";
import FaqClassicThree from "../../../components/faq/FaqClassicThree";
import CallToActionSix from "../../../components/call-to-action/CallToActionSix";
import PricingEight from "../../../components/pricing/PricingEight";
import FancyFeatureTewentyNine from "../../../components/features/FancyFeatureTewentyNine";
import FooterSeven from "../../../components/footer/FooterSeven";
import CopyRightThree from "../../../components/footer/CopyRightThree";
import Image from "next/image";
import dynamic from "next/dynamic";
const Scrollspy = dynamic(() => import('@/components/scrollpy/Scrollphy'), {
  ssr: false,

})
export const metadata = {
  title: 'Doc Signature Landing || Deski-Saas & Software Nextjs Template',
  description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
}
const DocSignatureLanding = () => {
  return (
    <div className="main-page-wrapper font-gordita" id="lll" >
     
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* End Header Landing Doc Signature */}
      <Scrollspy>

      <div id="home">
        <HeroBannerEleven />
      </div>
      {/* End Hero Banner Eleven */}

      {/* =============================================
		Fancy Feature Twenty Six
		==============================================  */}
      <div className="fancy-feature-twentySix lg-container pt-160 md-pt-100">
        <div className="container">
          <FancyFeatureTewentySix />
        </div>
      </div>
      {/* End .Fancy Feature Twenty Six */}

      {/* =============================================
            Fancy Feature Twenty Seven
        ============================================== */}
      <div
        className="fancy-feature-twentySeven lg-container pt-120  md-pt-60"
        id="product"
      >
        <div className="container">
          <div className="title-style-twelve text-center mb-70 md-mb-20">
            <div className="row">
              <div className="col-xl-10 col-lg-11 m-auto">
                <div className="upper-title">Working Process</div>
                <h2>
                  <span>
                    Works the way you already do{" "}
                    <Image  width="355" height="37"
                      src="/images/shape/line-shape-13.svg"
                      alt="line-shape"
                    />
                  </span>
                </h2>
                <p className="mt-40 md-mt-30">
                  Together with useful notifications, collaboration insights,
                  and improvement tips – it’s time for your documents to start
                  working for you.
                </p>
              </div>
            </div>
          </div>
          <FancyFeatureTewentySeven />
        </div>
      </div>
      {/* /.fancy-feature-twentySeven */}

      {/* =============================================
            Video Box Two
        ==============================================  */}
      <div className="video-box-two lg-container mt-200 md-mt-100">
        <div className="container">
          <FancyVideoFour />
        </div>
      </div>
      {/* /.video-box-two */}

      {/* =====================================================
            Fancy Text block Twenty Three
        ===================================================== */}
      <div
        className="fancy-text-block-twentyThree lg-container pt-200 mt-30 md-pt-90"
        id="feature"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-last" data-aos="fade-left">
              <div className="text-wrapper ps-xl-5">
                <div className="cl-text">
                  Over <span>150,000+</span> client
                </div>
                <div className="title-style-twelve">
                  <h2>Signture that work Smoothly.</h2>
                  <p className="mt-35 mb-60 md-mb-40">
                    Commonly used in the graphic, prit quis due & publishing
                    indust for previewing lightly visual mockups.
                  </p>
                </div>
                <a href="#" className="theme-btn-eight">
                  Start Free Trial
                </a>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6" data-aos="fade-right">
              <div className="img-container position-relative md-mt-60">
                <Image width={585} height={437} style={{height:'fit-content'}}    
                  src="/images/assets/screen_30.png"
                  alt="screen"
                  className="main-screen"
                />
                <Image width={334} height={260} style={{height:'fit-content'}}    
                  src="/images/assets/screen_31.png"
                  alt="screen"
                  className="screen-one"
                />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>

        <div className="mt-90 md-mt-50">
          <div className="container">
            <FancyFeatureTewentyEight />
          </div>
        </div>
      </div>
      {/* /.fancy-text-block-twentyThree --> */}

      {/* =====================================================
            Useable Tools Four
        ===================================================== */}
      <div className="useable-tools-section-four lg-container mt-200 md-mt-100">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-wrapper">
                  <div className="title-style-nine">
                    <h2>Integrate Any Tools Seamlessly.</h2>
                  </div>
                  <p>
                    Commonly used in the graphic, print quis & publishing
                    industris for previewing nor visual layout and mockups.
                  </p>
                  <a href="#" className="theme-btn-ten">
                    See all integrations{" "}
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </a>
                </div>
                {/* /.text-wrapper */}
              </div>
              <div className="col-xl-5 col-lg-6 ms-auto">
                <div className="logo-container h-100">
                  <div className="inner-wrapper">
                    <BrandSix />
                  </div>
                  {/* /.inner-wrapper */}
                </div>
                {/* /.logo-container */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.useable-tools-section-four */}

      {/* =============================================
            Fancy Feature Twenty Eight
        ==============================================  */}
      <div
        className="fancy-feature-twentyEight lg-container pt-150 mt-50 md-pt-70"
        id="story"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto" data-aos="fade-up">
              <div className="title-style-twelve text-center pb-80 md-pb-30">
                <div className="upper-title">Customer Stories</div>
                <h2>
                  <span>
                    1,000,000+{" "}
                    <Image  width="355" height="37" src="/images/shape/line-shape-13.svg" alt="shape" />
                  </span>{" "}
                  organizations are already becoming more agreeable.
                </h2>
              </div>
            </div>
          </div>
          <FancyFeatureTewentyNine />
          <div className="text-center mt-80 md-mt-50">
            <a href="#" className="theme-btn-ten">
              Read all customer stories{" "}
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      {/* /.fancy-feature-twentyEight */}

      {/* =====================================================
            Pricing Section Eight
        ===================================================== */}
      <div
        className="pricing-section-eight lg-container mt-150 md-mt-100"
        id="pricing"
      >
        <div className="container">
          <div className="border-top pt-150 md-pt-100">
            <div className="title-style-twelve text-center pb-120 md-pb-60">
              <h2>
                <span>
                  Get your plan
                  <Image  width="355" height="37" src="/images/shape/line-shape-13.svg" alt="line-shape" />
                </span>
              </h2>
              <p className="mt-40 md-mt-20">
                Get access to the largest library of legal forms and easily
                integrate deski into your apps
              </p>
            </div>
          </div>
          {/* End title */}

          <PricingEight />
        </div>
      </div>
      {/* /.Pricing Section Eight */}

      {/* =====================================================
            Faq Section Five
        ===================================================== */}
      <div
        className="faq-section-five lg-container pt-200 mt-25 md-pt-80"
        id="faq"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="title-style-twelve">
                <div className="upper-title">FAQ</div>
                <h2>Any Questions find here.</h2>
                <p className="pt-25 pb-40 md-pb-30">
                  Find your answers here. if you don’t find it here, please
                  contact us.
                </p>
                <Link className="theme-btn-eight" href="/contact-doc">
                  {" "}
                  Contact us
                </Link>
              </div>
            </div>
            <div className="col-lg-6 ms-auto">
              <FaqClassicThree />
            </div>
          </div>
        </div>
      </div>
      {/* /.fqa-section-five */}

      {/* =====================================================
            Fancy Short Banner Thirteen
        ===================================================== */}
      <div className="fancy-short-banner-thirteen mt-200 md-mt-130">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 m-auto">
                <CallToActionSix />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-short-banner-thirteen */}

      {/* =====================================================
            Footer Style Seven
        ===================================================== */}
        </Scrollspy>
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">
          <div className="container inner-btn-black">
            <FooterSeven />
          </div>

          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default DocSignatureLanding;
