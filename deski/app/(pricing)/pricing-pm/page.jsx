import React from "react";
import Link from "next/link";
import Header from "../../../components/header/Header";
import CallToActionFour from "../../../components/call-to-action/CallToActionFour";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import FaqClassic from "../../../components/faq/FaqClassicTwo";
import CounterFour from "../../../components/counter/CounterFour";
import Pricing from "../../../components/pricing/pricing-two/Pricing";
import Image from "next/image";

export const metadata = {
    title: 'Pricing Project Management || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const ProjectManagement = () => {
  return (
    <div className="main-page-wrapper">
  
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
				Pricing Section One
			============================================== */}
      <div className="pricing-section-one mb-150 md-mb-80">
        <div className="fancy-hero-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-11 m-auto">
                <h2 className="font-rubik">Choose package match your budget</h2>
              </div>
              <div className="col-12 m-auto">
                <p className="font-rubik">
                  5 minute installation · Try Team plan features for 14 days ·
                  No credit card required
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
        {/* /.fancy-hero-one */}
        <div className="pricing-table-area">
          <Image width={280} height={281}
            src="/images/shape/62.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image width="205" height="281"
            src="/images/shape/63.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <div className="container">
            <div className="tab-content">
              <Pricing />
            </div>
          </div>
          {/* End .container */}
        </div>
      </div>
      {/* /.pricing-section-one */}

      {/* =====================================================
				Counter Info Standard
			===================================================== */}
      <div className="counter-info pb-150 md-pb-80">
        <div className="container">
          <CounterFour />
        </div>
      </div>
      {/* /.counter-info */}

      {/* 	=============================================
				Fancy Text Block Fifteen
			============================================== */}
      <div className="fancy-text-block-fifteen">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="bg-wrapper">
            <div className="row">
              <div
                className="col-lg-6 order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper md-pb-40">
                  <Image  width="52" height="52" src="/images/icon/42.svg" alt="iocn" className="icon" />
                  <div className="more-text">
                    More Over <span>1500+ customers</span>
                  </div>
                  <p className="font-rubik">
                    Just simply amazing. Feel lucky use their service. Highly
                    recommended andappriciate their service & highly trusted.
                  </p>
                  <h6>
                    Jimmy Klein. <span>California USA</span>
                  </h6>
                </div>
                {/*  /.text-wrapper */}
              </div>
              {/* End .col */}

              <div
                className="col-lg-6 order-lg-first"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <Image width={380} height={607} style={{height:'fit-content'}}    
                  src="/images/media/img_40.png"
                  alt="media"
                  className="main-img"
                />
              </div>
              {/* End .col */}
            </div>
          </div>
          {/* /.bg-wrapper */}

          <div className="contact-banner mt-100 md-mt-60">
            <div className="row justify-content-between align-items-center">
              <div
                className="col-xl-7 col-lg-8"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <p className="font-rubik">
                  Want a custome pricing for your business? Send us mail
                </p>
              </div>
              <div
                className="col-xl-4 col-lg-3"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <Link href="/contact-pm" className="theme-btn-four ms-auto">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          {/* /.contact-banner */}
        </div>
      </div>
      {/*  /.fancy-text-block-fifteen */}

      {/* 
      =============================================
				Faq Classic
		  ============================================== */}
      <div className="faq-classic pt-150 pb-130 md-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-one">
                <h6 className="font-rubik">Find your answers</h6>
                <h2>Have any thought? Look here.</h2>
              </div>
              {/* /.title-style-one */}
              <Link href="/faq" className="theme-btn-one mt-50 md-mt-30">
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
      <div className="fancy-short-banner-one space-fix">
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

      {/* 
      =============================================
				Footer
		  ============================================== */}
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

export default ProjectManagement;
