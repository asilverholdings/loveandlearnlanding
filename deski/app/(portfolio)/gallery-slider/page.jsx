

import React from "react";

import Header from "../../../components/header/Header";
import PortfolioFive from "../../../components/portfolio/PortfolioFive";
import FooterSeven from "../../../components/footer/FooterSeven";
import CopyRightThree from "../../../components/footer/CopyRightThree";


export const metadata = {
    title: 'Portfolio Slider || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }


const PortfolioV4 = () => {
  return (
    <div className="main-page-wrapper">

      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
         Fancy Hero Six
        ==============================================  */}
      <div className="fancy-hero-six">
        <div className="container">
          <h1 className="heading">Gallery Slider</h1>
          <p className="sub-heading">
            An original way to show your works in a good appearance
          </p>
        </div>
      </div>
      {/* /.fancy-hero-six */}

      {/*  =============================================
            Fancy Portfolio Two
        ==============================================  */}
      <div className="fancy-portfolio-five lg-container top-border bottom-border pb-130 pt-110">
        <div className="slider-wrapper">
          <div className="portfolio_slider_one">
            <PortfolioFive />
          </div>
        </div>
        {/* End .slider-wrapper */}
      </div>
      {/* /.fancy-portfolio-two */}

      {/* =====================================================
            Footer Style Seven
        ===================================================== */}
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

export default PortfolioV4;
