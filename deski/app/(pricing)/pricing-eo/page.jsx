import React from "react";
import Link from "next/link";
import Header from "../../../components/header/HeaderFour";
import PricingThree from "../../../components/pricing/PricingThree";
import FaqFour from "../../../components/faq/FaqFour";
import CounterThree from "../../../components/counter/CounterThree";
import FooterFour from "../../../components/footer/FooterFour";
import CallToActionFive from "../../../components/call-to-action/CallToActionFive";
import Image from "next/image";


export const metadata = {
    title: 'Pricing Event Organizer || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }

const EventOrganizer = () => {
  return (
    <div className="main-page-wrapper p0">
   
      {/* End Page SEO Content */}

      <Header />
      {/* End HeaderFour */}

      {/* 
     =============================================
			Pricing Section Three
		============================================== */}
      <div className="pricing-section-three-inner-page mb-200 md-mb-120">
        <Image width={232} height={477}
          src="/images/shape/124.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width={217} height={396}
          src="/images/shape/125.svg"
          alt="shape"
          className="shapes shape-two"
        />

        <div className="container">
          <div className="title-style-five text-center mb-50 md-mb-40">
            <h6>Our Pricing</h6>
            <div className="row">
              <div className="col-lg-9 m-auto">
                <h2>Unbeatable prices, no contracts, simple & easy</h2>
              </div>
            </div>
          </div>

          <div className="pricing-table-area-three">
            <PricingThree />
          </div>
          {/* /.pricing-table-area-three */}
        </div>
        {/* ./container */}
        <div className="counter-with-icon-one pt-100 md-pt-60">
          <div className="container">
            <CounterThree />
          </div>
        </div>
        {/* /.counter-with-icon-one */}
      </div>
      {/* /.pricing-section-three */}

      {/* 
     =============================================
				Faq Section Four
		============================================== */}
      <div className="faq-section-four bg-white">
        <div className="container">
          <div className="title-style-five text-center mb-80 md-mb-60">
            <h6>FAQ</h6>
            <h2>
              <span>Question & Answer</span>
            </h2>
          </div>

          <div className="row">
            <div className="col-xl-9 col-lg-10 m-auto">
              <FaqFour />
            </div>
          </div>
          <div
            className="text-center mt-60 md-mt-50"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h3 className="font-rubik pb-30">Don’t find your answer?</h3>
            <Link href="/contact-eo" className="theme-btn-five">
              Contact us
            </Link>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* End Question and answer */}

      {/* 
     =============================================
			Call To Action
		============================================== */}
      <div className="fancy-short-banner-five with-bg pt-130 pb-150 md-pt-100 md-pb-120">
        <div className="container">
          <CallToActionFive />
        </div>
      </div>
      {/* End .fancy-short-banner-five */}

      {/* 
     =============================================
			Footer Four
		============================================== */}
      <footer className="theme-footer-four">
        <div className="top-footer">
          <div className="container">
            <FooterFour />
          </div>
          {/* /.container */}
        </div>

        <div className="container">
          <div className="bottom-footer-content">
            <p>
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
          {/* /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-four */}
    </div>
  );
};

export default EventOrganizer;
