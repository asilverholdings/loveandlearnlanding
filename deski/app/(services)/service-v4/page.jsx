import React from "react";
import Link from "next/link";
import HeaderFive from "../../../components/header/HeaderFive";

import FooterEight from "../../../components/footer/FooterEight";
import CopyRightFour from "../../../components/footer/CopyRightFour";
import CounterOne from "../../../components/counter/CounterOne";
import FancyFeatureTwentyEightV2 from "../../../components/features/FancyFeatureTwentyEightV2";
import Service from "../../../components/service/Service";
import Image from "next/image";
export const metadata = {
    title: 'Service Version 4 || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const ServiceV4 = () => {
  return (
    <div className="main-page-wrapper p0">
   
      {/* End Page SEO Content */}

      <HeaderFive />
      {/* End Header */}

      {/*  =====================================================
           	Fancy Hero Seven
        ===================================================== */}
      <div
        className="fancy-hero-seven"
        style={{
          backgroundImage: `url(/images/media/img_109.png)`,
        }}
        
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 m-auto">
              <h2 className="font-gordita">Our Services</h2>
              <p className="font-gordita">
                We are a creative company that focuses on establishing long-term
                relationships with customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-hero-seven --> */}

      {/* 	=============================================
				Fancy Text block Seven
			==============================================  */}
      <div className="fancy-text-block-seven seven mt-130 md-mt-80">
        <div className="bg-wrapper no-bg">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-5 col-md-6 col-sm-10 m-auto"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <CounterOne />
              </div>
              {/* End .col */}

              <div
                className="col-xl-6 col-lg-7 ms-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="quote-wrapper pt-60">
                  <Image width={53} height={55}  src="/images/icon/185.png" alt="icon" className="icon" />
                  <blockquote className="font-rubik">
                    Deski combines excellent live chat, ticketing and automation
                    that allow us to provide quality.
                  </blockquote>
                  <h6 className="mt-20">
                    Mike Lucas. <span>CEO & Founder deksi</span>
                  </h6>
                </div>
                {/* <!-- /.quote-wrapper --> */}
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}

            <div className="mt-90 pb-80 bottom-border">
              <div className="row">
                <div className="col-xl-11 m-auto">
                  <FancyFeatureTwentyEightV2 />
                </div>
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.fancy-text-block-seven --> */}

      {/* 	=============================================
				Fancy Feature Thirty Three
			==============================================  */}
      <div className="fancy-feature-thirtyThree mt-60 md-mt-20">
        <div className="container">
          <div className="title-style-eleven text-center pb-50 md-pb-30">
            <h2>Explore Service.</h2>
            <p className="pt-20">
              Get to know all deski features, that are part of the complex
              multi-channel
            </p>
          </div>
          <Service />
          <div className="bottom-border">
            <div className="text-center mt-130 md-mt-80 pb-150 md-pb-80">
              <div className="row">
                <div className="col-xl-8 col-lg-10 m-auto">
                  <h2 className="contact-title font-gordita">
                    Convinced to work on a new project?
                  </h2>
                  <Link className="theme-btn-one mt-40" href="/contact-cs">
                    {" "}
                    Contact Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-feature-thirtyThree --> */}

      {/*  =====================================================
            Footer Style Eight
        ===================================================== */}
      <footer className="theme-footer-eight mt-100">
        <div className="top-footer">
          <div className="container">
            <FooterEight />
          </div>
          {/* /.container */}
        </div>

        <div className="container">
          <div className="bottom-footer mt-50 md-mt-30">
            <CopyRightFour />
          </div>
        </div>
      </footer>
      {/* /.theme-footer-eight  */}
    </div>
  );
};

export default ServiceV4;
