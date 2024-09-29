


import React from "react";

import Pricing from "../../../components/form-survey-landing/Pricing";
import Features from "../../../components/form-survey-landing/Features";
import FeaturesAbout from "../../../components/form-survey-landing/FeaturesAbout";
import HowWorks from "../../../components/form-survey-landing/HowWorks";
import Portfolio from "../../../components/form-survey-landing/Portfolio";
import Social from "../../../components/form-survey-landing/Social";
import Testimonial from "../../../components/form-survey-landing/Testimonial";
import HeaderLandingFormSurvey from "../../../components/form-survey-landing/HeaderLandingFormSurvey";
import HeroBannerThirteen from "../../../components/form-survey-landing/HeroBannerThirteen";
import Blog from "../../../components/form-survey-landing/Blog";
import CallToAction from "../../../components/form-survey-landing/CallToAction";
import Footer from "../../../components/form-survey-landing/Footer";
import dynamic from "next/dynamic";
const Scrollspy = dynamic(() => import('@/components/scrollpy/Scrollphy'), {
  ssr: false,

})
export const metadata = {
    title: 'Form Survey Landing || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const FormSurveyLanding = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
     
      {/* End Page SEO Content */}
     
      <HeaderLandingFormSurvey />
      {/* End Header */}
 <Scrollspy>
      <HeroBannerThirteen  />
      {/* End Hero banner */}

      {/* <!-- 
        =============================================
            Fancy Feature Thirty Four
        ============================================== 
        --> */}
      <div className="fancy-feature-thirtyFour mt-150 md-mt-100">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12  m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-eleven text-center mb-70 md-mb-10">
                <div className="upper-title">HOW IT WORKS</div>
                <h2>
                  Create forms, surveys, & quizzes that people enjoy answering.
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <HowWorks />
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-feature-thirtyFour --> */}

      {/* <!-- 
        =============================================
            Block Style Thirty Six
        ============================================== 
        --> */}
      <div
        className="block-style-thirtySix lg-container pt-225 md-pt-120"
        id="feature"
      >
        <div className="container">
          <Features />
        </div>
      </div>
      {/* <!-- /.block-style-thirtySix --> */}

      {/* <!-- 
        =============================================
            Fancy Feature Thirty Five
        ============================================== 
        --> */}
      <div
        className="fancy-feature-thirtyFive position-relative lg-container pt-225 md-pt-120"
        id="product"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="block-style-thirtySix">
                <div className="title-style-fourteen">
                  <div className="upper-title">TEMPLATE LIBRARY</div>
                  <h2>Ton of Built in Library.</h2>
                </div>
                <div className="tag-line">
                  Template library help you to create your won style.
                </div>
              </div>
              {/* <!-- /.block-style-thirtySix --> */}
            </div>
          </div>
        </div>
        <div className="slider-wrapper">
          <div className="portfolio_slider_two survey-slider">
            <Portfolio />
          </div>
          {/* <!-- /.portfolio_slider_two --> */}
        </div>
        {/* <!-- /.slider-wrapper --> */}
      </div>
      {/* <!-- /.fancy-feature-thirtyFive --> */}

      {/* <!-- 
        =============================================
            Block Style Thirty Six
        ============================================== 
        --> */}
      <div className="block-style-thirtySix lg-container pt-225 md-pt-120">
        <div className="container">
          <FeaturesAbout />
        </div>
      </div>
      {/* <!-- /.block-style-thirtySix --> */}

      {/* <!--
        =====================================================
            Integrated Apps
        =====================================================
        --> */}
      <div className="integrated-apps pt-180 md-pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 m-auto">
              <div
                className="title-style-fourteen text-center mb-70 md-mb-50"
                data-aos="fade-up"
              >
                <div className="upper-title">INTEGRATION</div>
                <h2>Integrate with 120+ apps & boost your workfrlow.</h2>
              </div>
            </div>
            <div className="col-xl-8 m-auto">
              <Social />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.integrated-apps --> */}

      {/* <!--
        =====================================================
            Client Feedback Slider Eight
        =====================================================
        --> */}
      <div
        className=" lg-container pt-180 md-pt-110"
        data-aos="fade-up"
        id="feedback"
      >
        <div className="client-feedback-slider-eight slider-customized">
          <div className="container">
            <div className="main-content position-relative">
              <div className="clientSliderSeven">
                <Testimonial />
              </div>
            </div>
            {/* <!-- /.main-content --> */}
          </div>
        </div>
      </div>
      {/* <!-- /.client-feedback-slider-eight --> */}

      {/* <!--
        =====================================================
            Pricing Section Nine
        =====================================================
        --> */}
      <div
        className="pricing-section-nine lg-container pt-150 md-pt-110"
        id="pricing"
      >
        <div className="container">
          <div
            className="title-style-eleven text-center mb-40 md-mb-20"
            data-aos="fade-up"
          >
            <div className="upper-title">PRICING</div>
            <h2>Pick your plan or create</h2>
          </div>

          <div className="row justify-content-center">
            <Pricing />
          </div>
        </div>
      </div>
      {/* <!-- /.pricing-section-nine --> */}

      {/* <!--
        =====================================================
            Feature Blog Five
        =====================================================
        --> */}
      <div className="feature-blog-five lg-container mt-160 md-pt-120">
        <div className="container">
          <div
            className="title-style-eleven text-center mb-40 md-mb-20"
            data-aos="fade-up"
          >
            <h2>Inside Story</h2>
            <p className="mt-25 md-mt-10">
              Automatically send people to the next stage of the journey{" "}
            </p>
          </div>

          <div className="row">
            <Blog />
          </div>
        </div>
      </div>
      {/* <!-- /.feature-blog-five --> */}

      <div className="fancy-short-banner-fifteen mt-150 md-mt-80">
        <CallToAction />
      </div>
      {/* // <!-- /.fancy-short-banner-fifteen --> */}

      {/* <!--
        =====================================================
            Footer Style Nine
        =====================================================
        --> */}
      <div className="theme-footer-nine lg-container">
        <div className="container">
          <Footer />
        </div>
      </div>
      </Scrollspy>
    </div>
  );
};

export default FormSurveyLanding;
