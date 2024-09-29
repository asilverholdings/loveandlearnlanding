

import React from "react";

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import CounterFive from "../../../components/counter/CounterFive";
import FancyTextBlockThree from "../../../components/fancy-text-block/FancyTextBlockThree";
import TeamThree from "../../../components/team/TeamThree";
import SocialTwo from "../../../components/social/SocialTwo";
import BlogStyle6 from "../../../components/blog/BlogStyle6";
import CallToActionFour from "../../../components/call-to-action/CallToActionFour";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
    title: 'About Project Management  || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const ProjectManagement = () => {
  return (
    <div className="main-page-wrapper">
    
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
				Fancy Hero One
			============================================== */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-11 m-auto">
              <h2 className="font-rubik">
                We're built for software management.
              </h2>
            </div>
            <div className="col-xl-9 col-lg-11 m-auto">
              <p className="font-rubik">
                Our mission is to ensure software development teams can do their
                best work. So we created Clubhouse to provide the most intuitive
                and enjoyable project management platform teams actually want to
                use from project planning to product creation.
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

      {/* =============================================
				Fancy Text block One
			==============================================  */}
      <div className="fancy-text-block-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 col-sm-8 m-auto">
              <Image width={441} height={550} style={{height:'fit-content'}} src="/images/media/img_05.png" alt="media" />
            </div>
            <div className="col-lg-6">
              <div className="quote-wrapper">
                <p>
                  More over <span>1500+ customers</span>
                </p>
                <blockquote className="font-rubik">
                  Just simply amazing. Feel lucky use their service.Highly
                  recommended andappriciate their service & highly trusted.
                </blockquote>
                <h6>
                  Jimmy Klein. <span>California USA</span>
                </h6>
              </div>
              {/*  /.quote-wrapper */}
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
      {/* /.fancy-text-block-one */}

      {/* =====================================================
				Counter Info Standard
			===================================================== */}
      <div className="counter-info-standard pt-70 pb-45">
        <div className="container">
          <div className="row justify-content-center">
            <CounterFive />
          </div>
        </div>
      </div>
      {/* /.counter-info-standard */}

      {/* 	=====================================================
				Fancy Text block Two
			===================================================== */}
      <div className="fancy-text-block-two pt-150 pb-170 md-pt-100 md-pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="title-style-one md-mb-40">
                <h6 className="font-rubik" style={{ color: "#787CFF" }}>
                  Our product philosophy
                </h6>
                <h2>
                  We're looking for the brightest minds to us develop the future
                  of work due.
                </h2>
              </div>
              {/* /.title-style-one */}
            </div>
            <div
              className="col-lg-6 col-md-8 m-auto"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <Image width={491} height={471}
                src="/images/media/img_06.png"
                alt="media"
                className="fancy_img_media"
              />
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-text-block-two */}

      {/* =====================================================
				Fancy Text block Three
			===================================================== */}
      <div className="fancy-text-block-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <FancyTextBlockThree />
            </div>
          </div>

          <div className="row">
            <div
              className="col-xl-10 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <p className="font-rubik slogan">
                We break down barriers so teams can focus on what matters
                working together to create products their customers love.
              </p>
            </div>
          </div>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
      </div>
      {/* /.fancy-text-block-three */}

      {/* =====================================================
				Team Section Three
			===================================================== */}
      <div className="team-section-one pt-150 md-pt-100">
        <div className="container">
          <div className="title-style-one text-center">
            <h2>Our Leadership</h2>
          </div>
          {/* /.title-style-one */}
          <div className="mt-80 mb-100 md-mt-60 md-mb-60">
            <TeamThree />
          </div>
          {/* End TeamThree */}
        </div>
      </div>
      {/* /.team-section-one  */}

      {/* 	=====================================================
				Useable Tools
			===================================================== */}
      <div className="useable-tools-section bg-color mt-50 md-mt-10">
        <div className="container">
          <div className="text-center">
            <h6 className="font-rubik">Integrates with your tools</h6>
            <h2>
              Deski ties into your existing tools, services, & workflow. Get
              notifications or create a Story with others tools.
            </h2>
          </div>
          {/* End .text-center */}
          <SocialTwo />
        </div>
      </div>
      {/* /.useable-tools-section  */}

      {/* =====================================================
				Feature Blog One
			===================================================== */}
      <div className="feature-blog-one pt-170 pb-120 md-pt-100 md-pb-60">
        <div className="container">
          <div className="header d-md-flex align-items-center justify-content-between mb-90 md-mb-40">
            <div className="title-style-one">
              <h6 className="font-rubik">Our News</h6>
              <h2>Have any thought? Look here.</h2>
            </div>
            {/*  /.title-style-one */}
            <Link href="/blog-v1" className="theme-btn-one sm-mt-30">
              Go to Blog
            </Link>
          </div>
          {/* End .header */}
          <div className="row justify-content-center">
            <BlogStyle6 />
          </div>
        </div>
      </div>
      {/* /.feature-blog-one */}

      {/* 
     =============================================
			Call To Action
		============================================== */}
      <div className="fancy-short-banner-one">
        <div className="container">
          <CallToActionFour />
        </div>
        {/* /.container */}
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/* /.fancy-short-banner-one */}

      {/* =============================================
				Footer One
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
