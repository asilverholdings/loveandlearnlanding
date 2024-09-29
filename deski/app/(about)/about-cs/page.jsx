import React from "react";
import Link from "next/link";

import HeaderTwo from "../../../components/header/HeaderTwo";
import CallToActionThree from "../../../components/call-to-action/CallToActionThree";
import FooterTwo from "../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../components/footer/CopyRightTwo";
import CounterThreeColored from "../../../components/counter/CounterThreeColored";
import FancyTextBlockTen from "../../../components/fancy-text-block/FancyTextBlockTen";
import FancyFeatureSeven from "../../../components/features/FancyFeatureSeven";
import TeamFour from "../../../components/team/TeamFour";
import Image from "next/image";
export const metadata = {
    title: 'About Customer Support || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const CustomerSupport = () => {
  return (
    <div className="main-page-wrapper">
     
      {/* End Page SEO Content */}

      {/* =============================================
		   Start Header
		   ============================================== */}
      <HeaderTwo />
      {/* End HeaderTwo Variation Three */}

      {/* 	=============================================
				Fancy Hero Two
			==============================================  */}
      <div className="fancy-hero-two">
        <div className="bg-wrapper">
          <div className="container">
            <div className="page-title">About us</div>
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-10 m-auto">
                <h1 className="heading">World best customer support portal</h1>
                <p className="sub-heading">
                  deski helps teams of all sizes get better at delivering
                  effortless customer service experiences.
                </p>
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* =============================================
				Fancy Text block Nine
			==============================================  */}
      <div className="fancy-text-block-nine mt-130 md-mt-80">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="title-style-two text-center mb-35 md-mb-10">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <p>Our Story</p>
                <h2>The world’s first Conversational Relationship Platform</h2>
              </div>
            </div>
          </div>
          {/* End title-style-two */}

          <div className="row">
            <div className="col-xl-10 m-auto">
              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                We created Help deski for businesses that share our passion for
                doing right by the customer. For many of us, great customer
                service isn’t a cost center — it’s an effective marketing tool,
                a competitive differentiator, and a cornerstone of the brand.
              </p>
              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                But in 2008, there were no customer service platforms available
                that embodied our customer-centric values. There were help desks
                that quite literally treated each person like a number and made
                it far too difficult to build a long-term relationship. We felt
                a strong pull to make something different, and we did.
              </p>
            </div>
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.fancy-text-block-nine */}

      {/* =====================================================
				Counter With Icon One
			===================================================== */}
      <div className="counter-with-icon-one border-style pt-120 pb-45 md-pt-70">
        <div className="container">
          <div className="border-style">
            <CounterThreeColored />
          </div>
        </div>
        {/* End .container */}
      </div>
      {/*  /.counter-with-icon-one */}

      {/* 	=============================================
				Fancy Text block Ten
			==============================================  */}
      <div className="fancy-text-block-ten mt-120 md-mt-60">
        <div className="container">
          <FancyTextBlockTen />
        </div>
      </div>
      {/* /.fancy-text-block-ten */}

      {/* =====================================================
				Fancy Feature Five
			===================================================== */}
      <div className="fancy-feature-five mt-200 md-mt-100">
        <div className="bg-wrapper">
          <div className="shapes shape-one"></div>
          <div className="shapes shape-two"></div>
          <div className="shapes shape-three"></div>
          <div className="shapes shape-four"></div>
          <Image
          width={168}
          height={166}
            src="/images/shape/47.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <div className="container">
            <div className="title-style-two text-center mb-60 md-mb-40">
              <div className="row">
                <div className="col-xl-8 col-lg-9 m-auto">
                  <p>Our Values</p>
                  <h2>We’r driven by our values</h2>
                  <div className="sub-text">
                    Deski stand with friendly interface with lots of features
                    that help our team and csutomer to collbarate easily.
                  </div>
                </div>
              </div>
            </div>
            {/* End .title-style-two */}
            <div className="row justify-content-center">
              <FancyFeatureSeven />
            </div>
            {/* End .row */}
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-five */}

      {/* =====================================================
				Team Section Two
			===================================================== */}
      <div className="team-section-two mt-200 md-mt-100">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="row align-items-center justify-content-between mb-80 md-mb-10">
            <div className="col-lg-8">
              <div className="title-style-two">
                <p>Our Team</p>
                <h2>Our talented team member waiting to server.</h2>
              </div>
            </div>
            {/* End .col */}
            <div className="col-lg-4 d-lg-flex justify-content-end">
              <Link href="/team-3" className="theme-btn-three md-mt-20">
                See All Members
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
          <div className="row">
            <TeamFour />
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.team-section-two */}

      {/* 	=====================================================
			Fancy Short Banner Three
			===================================================== */}
      <div className="fancy-short-banner-three mt-225 md-mt-150">
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

export default CustomerSupport;
