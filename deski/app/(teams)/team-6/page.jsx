import React from "react";

import Header from "../../../components/header/Header";
import Link from "next/link";
import TeamSlider from "../../../components/team/TeamSlider";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import Image from "next/image";
export const metadata = {
    title: 'Team V6 || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const Team6 = () => {
  return (
    <div className="main-page-wrapper">
   
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/*  =============================================
				Fancy Hero One
			============================================== */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-11 m-auto">
              <h2 className="font-rubik">We’ve Most Talented Team Members</h2>
            </div>
            <div className="col-xl-9 col-lg-11 m-auto">
              <p className="font-rubik">
                With deski, get all kind of business solution to start your
                journey
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

      {/* =====================================================
            Team Section Five
        ===================================================== */}
      <div className="bg-2 pt-120 pb-70 md-pt-100 md-pb-50 teamSliderOne-wrapper">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between mb-50 sm-mb-10">
            <div className="title-style-four">
              <h2>
                <span>
                  Our Members
                  <Image width={375} height={44} src="/images/shape/line-shape-2.svg" alt="shape" />
                </span>
              </h2>
            </div>
          </div>
          {/* End .d-sm-flex */}
        </div>
        {/* End .container */}
        <div className="clearfix">
          <div className="teamSliderOne arrow-top-right">
            <TeamSlider />
          </div>
          {/* /.teamSliderOne */}
        </div>
      </div>
      {/* /.team-section-five */}

      {/* =====================================================
            Fancy Short Banner Eleven
        ===================================================== */}
      <div className="fancy-short-banner-eleven">
        <div className="container">
          <div className="border-bottom pt-130 pb-150 md-pt-80 md-pb-80">
            <div className="row">
              <div className="col-lg-8 col-md-9 m-auto">
                <h2
                  className="font-rubik"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Want to be a part of our talented team?
                </h2>
                <Link
                  className="theme-btn-one btn-lg mt-50 md-mt-30"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                  href="/contact-pm"
                >
                  SEND YOUR CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  /.fancy-short-banner-eleven  */}

      {/* 	=====================================================
            Footer Style One
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

export default Team6;
