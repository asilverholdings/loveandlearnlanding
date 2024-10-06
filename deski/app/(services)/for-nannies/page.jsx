import React from "react";
import Link from "next/link";
import HeaderThree from "../../../components/header/HeaderThree";
import FooterEight from "../../../components/footer/FooterEight";
import CopyRightFour from "../../../components/footer/CopyRightFour";
import FancyFeatureThirtyFive from "../../../components/features/FancyFeatureThirtyFive";
import CounterSix from "../../../components/counter/CounterSix";
import Image from "next/image";
export const metadata = {
    title: 'Service Version 3 || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const ServiceV3 = () => {
  return (
    <div className="main-page-wrapper">

      {/* End Page SEO Content */}

      <HeaderThree />
      {/* End Header */}

      {/* =============================================
            Fancy Hero One
        ==============================================  */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 m-auto">
              <h2 className="font-rubik">Our Services</h2>
            </div>
            <div className="col-xl-9 m-auto">
              <p className="font-rubik">
                We are a creative company that focuses on establishing long-term
                relationships with customers.
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
      {/* <!-- /.fancy-hero-one --> */}

      {/* =============================================
            Fancy Feature Thirty Two
        ==============================================  */}
      <div className="fancy-feature-thirtyTwo pt-110 pb-160 md-pt-90 md-pb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-eleven">
                <h2>Explore our service.</h2>
              </div>
            </div>
            {/* End .col */}
            <FancyFeatureThirtyFive />
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-feature-thirtyTwo --> */}

      {/* =============================================
            Fancy Text block Seven
        ==============================================  */}
      <div className="fancy-text-block-seven mt-130 md-mt-80">
        <div className="bg-wrapper no-bg">
          <Image Image width={9} height={9}
            src="/images/shape/29.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image width={11} height={11}
            src="/images/shape/30.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <Image  width={8} height={8}
            src="/images/shape/31.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <Image width={17} height={17}
            src="/images/shape/32.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <Image width={8} height={8}
            src="/images/shape/33.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <div className="container">
            <div className="row">
              <div
                className="col-lg-5 col-md-6 col-sm-10 m-auto"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="img-holder">
                  <Image width={441} height={550} style={{height:'fit-content'}}     src="/images/media/img_108.png" alt="media" />
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-7 ms-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="quote-wrapper pt-60">
                  <Image width={53} height={55} src="/images/icon/185.png" alt="icon" className="icon" />
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
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.fancy-text-block-seven --> */}

      {/* =============================================
        Counter Style Three
        ==============================================  */}
      <div className="counter-style-three lg-container mt-50">
        <div className="container">
          <CounterSix />
        </div>
      </div>
      {/* <!-- /.counter-style-three --> */}

      {/* =====================================================
            Fancy Short Banner Ten
        ===================================================== */}
      <div className="fancy-short-banner-ten mt-130 md-mt-20">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 col-lg-8 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="text-center pb-60">
                <h2 className="font-gordita">
                  Convinced to work on a new project?
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div
            className="text-center pb-40 md-pb-10"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="150"
          >
            <Link href="/contact-doc" className="theme-btn-eleven">
              {" "}
              Contact us
            </Link>
          </div>
        </div>
        {/* /.container */}
        <Image width="321" height="471" src="/images/shape/210.svg" alt="image" className="shapes shape-one" />
        <Image  width="311" height="445" src="/images/shape/211.svg" alt="image" className="shapes shape-two" />
      </div>
      {/* /.fancy-short-banner-ten */}

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

export default ServiceV3;
