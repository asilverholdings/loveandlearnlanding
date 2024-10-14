import React from "react";
import CopyRight from "../../../components/footer/CopyRight";
import HeaderTwo from "../../../components/header/HeaderTwo";
import Screening from "@/components/screening/Screening";
import FancyBannerTwo from "@/components/fancy-features/FancyBannerTwo";
import FooterFour from "@/components/footer/FooterFour";

export const metadata = {
  title: 'Service Version 2 || Deski-Saas & Software Nextjs Template',
  description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
};

const ServiceV2 = () => {
  return (
    <div className="main-page-wrapper">
      {/* Header */}
      <HeaderTwo />

      {/* Hero Section */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 m-auto">
              <h2 className="font-rubik">Screening & Matchmaking</h2>
            </div>
            <div className="col-xl-9 m-auto">
              <p className="font-rubik">
                We provide a comprehensive process to ensure the perfect match.
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

      <Screening />

      {/* Footer */}
      <div className="footer-bg-wrapper">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        
        <FancyBannerTwo />

        <footer className="theme-footer-eight pt-130 md-pt-70">
          <div className="top-footer">
            <div className="container">
              <FooterFour />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ServiceV2;
