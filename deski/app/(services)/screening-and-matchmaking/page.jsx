import React from "react";
import Link from "next/link";
import FancyTextBlockTen from "../../../components/fancy-text-block/FancyTextBlockTen";
import CounterFive from "../../../components/counter/CounterFive";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import FancyFeatureThirtyFour from "../../../components/features/FancyFeatureThirtyFour";
import FancyVideoSix from "../../../components/video/FancyVideoSix";
import HeaderTwo from "../../../components/header/HeaderTwo";

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
              <h2 className="font-rubik">Our Services</h2>
            </div>
            <div className="col-xl-9 m-auto">
              <p className="font-rubik">
                We are a creative company that focuses on establishing long-term relationships with customers.
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

      {/* Services Section */}
      <div className="fancy-feature-thirtyOne pt-120 pb-160 md-pt-80 md-pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="title-style-four text-center pb-50 md-pb-20">
                <h2>Screening and Matchmaking</h2>
                <p className="sub-text pt-20">
                  We provide a comprehensive process to ensure the perfect match for your family’s childcare needs.
                </p>
              </div>
            </div>
          </div>

          {/* Screening and Matchmaking Tabs */}
          <div className="screening-and-matchmaking row justify-content-center">
            <div className="col-md-5">
              <div className="feature-box">
                <h3>Screening</h3>
                <ul className="screening-list">
                  <li>Educational Background</li>
                  <li>Work History</li>
                  <li>Childcare Experience</li>
                  <li>Work and Personal References</li>
                  <li>Criminal background checks in each state where the nanny has lived or worked over the past seven years</li>
                  <li>Social security verification</li>
                  <li>National Sex Offender Registry check</li>
                  <li>Nationwide driving record check, if your position requires driving</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6
            ">
              <div className="feature-box">
                <h3>Matchmaking</h3>
                <p>
                  We start by connecting with the family either by Zoom or at their home. Using a detailed and thorough questionnaire, we explore every aspect of the potential family-candidate relationship to ensure a perfect match.
                </p>
                <p>
                  Both the family and candidates take a specialized personality assessment to ensure a higher chance of finding the perfect fit for the family, enhancing compatibility and long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-bg-wrapper">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="fancy-short-banner-two">
          <div className="container">
            <div className="content-wrapper">
              <div className="bg-wrapper d-lg-flex align-items-center justify-content-between">
                <h2 className="font-gilroy-bold">
                  Still have questions? Contact us.
                </h2>
                <Link href="/contact-us"> Contact us</Link>
                <div className="bubble-one"></div>
                <div className="bubble-two"></div>
                <div className="bubble-three"></div>
                <div className="bubble-four"></div>
                <div className="bubble-five"></div>
              </div>
            </div>
          </div>
        </div>

        <footer className="theme-footer-one pt-130 md-pt-70">
          <div className="top-footer">
            <div className="container">
              <Footer />
            </div>
          </div>
          <div className="container">
            <div className="bottom-footer-content">
              <CopyRight />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ServiceV2;
