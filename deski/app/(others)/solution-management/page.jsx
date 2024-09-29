import React from "react";
import Link from "next/link";
import Header from "../../../components/header/Header";
import FaqClassic from "../../../components/faq/FaqClassicTwo";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import BlogStyle4 from "../../../components/blog/BlogStyle4";
import FeatureThree from "../../../components/features/FeatureThree";
import FeatureFive from "../../../components/features/FeatureFive";
import CallToActionFour from "../../../components/call-to-action/CallToActionFour";
export const metadata = {
    title: 'Solution Management || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const SolutionMangement = () => {
  return (
    <div className="main-page-wrapper">
    
      {/* End Page SEO Content */}
      <Header />
      {/* End Header */}

      {/* 	=============================================
            Fancy Hero One
        ==============================================  */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 m-auto">
              <h2 className="font-rubik">
                Get effective solution for your business
              </h2>
            </div>
            <div className="col-xl-9 m-auto">
              <p className="font-rubik">
                With deski, get all kind of business solution to start your
                journey
              </p>
              <Link
                className="theme-btn-one btn-lg mt-50 md-mt-30"
                href="contact-pm"
              >
                Contact US
              </Link>
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
      {/* /.fancy-hero-one */}

      {/* 	=============================================
				Fancy Text block Four
			==============================================  */}
      <div className="fancy-text-block-four pt-130 pb-120 md-pt-100 md-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="title-style-one mb-40 md-mb-20">
                <h2>For all kinds of Teams</h2>
                <p className="font-rubik">
                  Duis aute irure dolor in reprehenderit in voluptate velit io
                  cillum dolore eu fugiat nulla pariatur non labrum.
                </p>
              </div>
              {/* /.title-style-one */}
            </div>
          </div>

          <div className="wrapper">
            <div className="row justify-content-center">
              <FeatureThree />
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-text-block-four */}

      {/* =============================================
				Fancy Text block Five
			==============================================  */}
      <div className="fancy-text-block-five pt-130 pb-160 md-pt-100 md-pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 ms-auto">
              <div className="title-style-one mb-50 md-mb-30">
                <h2>For all kinds of Startup</h2>
                <p className="font-rubik">
                  Excepteur sint occaecat cupidat non proident, sunt in culpa
                  qui officia deserunt mollit anim est laborum.
                </p>
              </div>
              {/*  /.title-style-one */}
            </div>
          </div>

          <div className="wrapper">
            <div className="row justify-content-center">
              <FeatureFive />
            </div>
          </div>
        </div>
      </div>
      {/* /.block-style-five */}

      {/* 	=====================================================
				Feature Blog Two
			===================================================== */}
      <div className="feature-blog-two pt-150 pb-170 md-pt-100 md-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 m-auto">
              <div className="title-style-one text-center mb-50 md-mb-20">
                <h6 className="font-rubik" style={{ color: "#787CFF" }}>
                  Some success stories
                </h6>
                <h2>
                  Some well known companies get real benifits to work with
                  deski.
                </h2>
              </div>
              {/* /.title-style-one */}
            </div>
          </div>

          <div className="row justify-content-center">
            <BlogStyle4 />
          </div>
        </div>
      </div>
      {/* 	Feature Blog Two */}

      {/* 	=====================================================
				Faq Classic
			===================================================== */}
      <div className="faq-classic pt-150 pb-150 md-pt-120 md-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-one">
                <h6 className="font-rubik">Find your answers</h6>
                <h2>Have any thought? Look here.</h2>
              </div>
              {/* /.title-style-one */}
              <Link href="/faq" className="theme-btn-one mt-50 md-mt-30">
                {" "}
                Go to Faq
              </Link>
            </div>
            {/* End .col */}
            <div className="col-lg-6">
              <div className="md-mt-60">
                <FaqClassic />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* /.faq-classic */}

      {/* =====================================================
			  Call To Action  
			===================================================== */}
      <div className="fancy-short-banner-one">
        <div className="container">
          <CallToActionFour />
        </div>
        {/*  /.container */}
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/*  /.fancy-short-banner-one */}

      {/* =====================================================
				Footer One
			===================================================== */}
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
  );
};

export default SolutionMangement;
