import React from "react";
import Link from "next/link";
import HeaderTwo from "../../../components/header/HeaderTwo";
import Social from "../../../components/social/Social";
import FooterTwo from "../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../components/footer/CopyRightTwo";
import AboutFour from "../../../components/about/AboutFour";
import CallToActionThree from "../../../components/call-to-action/CallToActionThree";
import Image from "next/image";
export const metadata = {
    title: 'Product Customer Support || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const ProductCustomerSupport = () => {
  return (
    <div className="main-page-wrapper p0">
 
      {/* End Page SEO Content */}

      <HeaderTwo />
      {/* End Header */}

      {/* 	=============================================
				Fancy Hero Three
			============================================== */}
      <div className="fancy-hero-three bg-transparent">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="shapes shape-five"></div>
        <div className="shapes shape-six"></div>
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-10 col-md-10 m-auto">
                <h1 className="heading">Check our product in details</h1>
                <p className="sub-heading">
                  deski helps teams of all sizes get better at delivering
                  effortless customer
                </p>
                <Link
                  href="/pricing-cs"
                  className="theme-btn-two trial-button mt-50 md-mt-30"
                >
                  {" "}
                  Start Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper  */}
      </div>
      {/* /.fancy-hero-three */}

      {/* 	=============================================
				Fancy Feature Seven
			==============================================  */}
      <div className="fancy-feature-seven">
        <div className="container">
          <div className="title-style-two text-center mb-150 md-mb-70">
            <p>Our Product</p>
            <h2>
              First-timer? Or old-hand? provide support with
              <span>
                deski is{" "}
                <Image width="304" height="37" src="/images/shape/line-shape-8.svg" alt="line shape" />
              </span>{" "}
              simple.
            </h2>
          </div>
          {/* /.title-style-two */}

          <div className="block-wrapper">
            <div className="block-style-nine">
              <div className="row align-items-center">
                <div
                  className="col-lg-7 col-md-9 m-auto"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="illustration-holder">
                    <Image width="659" height="667" src="/images/assets/ils_04.svg" alt="illustrator" />
                  </div>
                  {/* /.illustration-holder */}
                </div>
                <div
                  className="col-lg-5"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  <div className="text-wrapper">
                    <h6>Create Event</h6>
                    <h3 className="title font-gilroy-bold">
                      Provide your support now simple and easy.
                    </h3>
                    <p className="font-rubik">
                      Set-up a simple, professional box-office page on your site
                      (or standalone) in minutes. Then design and customise it
                      as much (or as little) as you like with our user-friendly
                      dashboard
                    </p>
                  </div>
                  {/* /.text-wrapper */}
                </div>
              </div>
            </div>
            {/* /.block-style-nine */}
            <div className="block-style-nine">
              <div className="row align-items-center">
                <div
                  className="col-lg-7 col-md-9 m-auto order-lg-last"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  <div className="illustration-holder">
                    <Image width="721" height="683" src="/images/assets/ils_05.svg" alt="illustrator" />
                  </div>{" "}
                  {/* /.illustration-holder */}
                </div>
                <div
                  className="col-lg-5 order-lg-first"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="text-wrapper">
                    <h6>SELL TICKET</h6>
                    <h3 className="title font-gilroy-bold">
                      Sell tickets anywhere anytime online.
                    </h3>
                    <p className="font-rubik">
                      Run your box office as it’s own website, embed it into
                      your website with a simple piece of HTML or widget, or put
                      it on your Facebook page*. All with a reliable,
                      mobile-friendly design.
                    </p>
                  </div>{" "}
                  {/* /.text-wrapper */}
                </div>
              </div>
            </div>{" "}
            {/* /.block-style-nine */}
            <div className="block-style-nine">
              <div className="row align-items-center">
                <div
                  className="col-lg-7 col-md-9 m-auto"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="illustration-holder">
                    <Image width="781" height="758" src="/images/assets/ils_06.svg" alt="illustrator" />
                  </div>{" "}
                  {/* /.illustration-holder */}
                </div>
                <div
                  className="col-lg-5"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  <div className="text-wrapper">
                    <h6>management</h6>
                    <h3 className="title font-gilroy-bold">
                      Manage client easily by a simple click.
                    </h3>
                    <p className="font-rubik">
                      Set-up a simple, professional box-office page on your site
                      (or standalone) in minutes. Then design & customise it as
                      much (or as little) as you like with our user-friendly
                      dashboard.
                    </p>
                  </div>{" "}
                  {/* /.text-wrapper */}
                </div>
              </div>
            </div>{" "}
            {/* /.block-style-nine */}
            <div className="block-style-nine">
              <div className="row align-items-center">
                <div
                  className="col-lg-7 col-md-9 m-auto order-lg-last"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  <div className="illustration-holder">
                    <Image width="717" height="694" src="/images/assets/ils_07.svg" alt="illustrator" />
                  </div>
                  {/* /.illustration-holder */}
                </div>
                <div
                  className="col-lg-5 order-lg-first"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="text-wrapper">
                    <h6>Dashboard</h6>
                    <h3 className="title font-gilroy-bold">
                      All the data & info for your need.
                    </h3>
                    <p className="font-rubik">
                      You decide what data you want from your guests – and it’s
                      your data. We don’t see or touch it. Understand how and
                      who you’re selling to, with ticket sale notifications, and
                      easy-to-understand sales summaries and customer order.
                    </p>
                  </div>{" "}
                  {/* /.text-wrapper */}
                </div>
              </div>
            </div>
            {/* /.block-style-nine */}
          </div>
        </div>
      </div>
      {/* /.fancy-feature-seven */}

      {/* =====================================================
				Fancy Text Block Thirteen
			===================================================== */}
      <div className="fancy-text-block-thirteen pt-140 md-pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 order-lg-last"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="text-wrapper">
                <div className="title-style-two">
                  <h2>Security you can trust easily.</h2>
                </div>
                {/* /.title-style-two */}
                <p>
                  Our dashboard is served over SSL which means you can be sure
                  that all data transferred is secure. Payment processing uses
                  the very latest PCI DSS card-security standards
                </p>
              </div>
            </div>
            {/* End .col */}
            <div
              className="col-lg-6 col-md-8 m-auto order-lg-first"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <Image width={587} height={494} style={{height:'fit-content'}}     src="/images/assets/feature-img-11.png" alt="feature" />
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* /.fancy-text-block-thirteen */}

      {/*=====================================================
				Useable Tools
			===================================================== */}
      <div className="useable-tools-section-two bg-shape mb-250 mt-150 md-mt-100 md-mb-100">
        <div className="bg-wrapper">
          <div className="shapes shape-one"></div>
          <div className="shapes shape-two"></div>
          <div className="shapes shape-three"></div>
          <div className="shapes shape-four"></div>
          <div className="container">
            <div className="title-style-two text-center mb-70 md-mb-10">
              <div className="row">
                <div className="col-lg-10 col-md-11 m-auto">
                  <p>Integrates with your tools</p>
                  <h2>
                    Connect deski with the software you
                    <span>
                      use every
                      <Image width={375} height={44} src="/images/shape/line-shape-2.svg" alt="shape" />
                    </span>
                    day.
                  </h2>
                </div>
              </div>
            </div>
            {/*  /.title-style-two */}

            <div className="icon-wrapper">
              <Social />
            </div>
            {/* /.icon-wrapper */}
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.useable-tools-section-two */}

      {/* 	=====================================================
				Fancy Text Block Fourteen
			===================================================== */}
      <div className="fancy-text-block-fourteen pt-30">
        <div className="container">
          <AboutFour />
        </div>
      </div>
      {/* /.fancy-text-block-fourteen */}

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

export default ProductCustomerSupport;
