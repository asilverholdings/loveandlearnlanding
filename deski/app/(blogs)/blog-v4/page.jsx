import React from "react";

import Header from "../../../components/header/Header";
import BlogStyle3 from "../../../components/blog/BlogStyle3";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: 'Blog V4 || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }


const BlogV4 = () => {
  return (
    <div className="main-page-wrapper p0">

      {/* End Page SEO Content */}
      <Header />
      {/* End Header */}

      {/* =============================================
				Fancy Hero Two
			==============================================  */}
      <div className="fancy-hero-five">
        <Image width="286" height="426"
          src="/images/shape/95.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width="200" height="408"
          src="/images/shape/96.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="bg-wrapper">
          <div className="container">
            <div className="col-lg-7 m-auto text-center">
              <h6 className="page-title">Our News</h6>
              <h1 className="heading">
                <span>
                  Our inside stories
                  <Image width={577} height={58} src="/images/shape/line-shape-11.svg" alt="image" />
                </span>
                lorem que
              </h1>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* =====================================================
            Feature Blog One
        ===================================================== */}
      <div className="blog-page-white-bg blog-v4">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
          <div className="wrapper">
            <BlogStyle3 />
            <div className="page-pagination-one pt-15">
              <ul className="d-flex align-items-center">
                <li>
                  <a href="#">
                    <i className="fa fa-angle-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="active">
                    1
                  </a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li> &nbsp; ... &nbsp;</li>
                <li>
                  <a href="#">13</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* /.page-pagination-one */}
          </div>
          {/* End .wrapper */}
        </div>
      </div>
      {/* /.feature-blog-one */}

      <div className="fancy-short-banner-two pt-130 md-pt-70">
        <div className="container">
          <div className="content-wrapper">
            <div
              className="
                  bg-wrapper
                  d-lg-flex
                  align-items-center
                  justify-content-between
                "
            >
              <h2 className="font-gilroy-bold">
                Don’t find the answer? contact us for any query.
              </h2>
              <Link href="/contact-cs">Contact us</Link>
              <div className="bubble-one"></div>
              <div className="bubble-two"></div>
              <div className="bubble-three"></div>
              <div className="bubble-four"></div>
              <div className="bubble-five"></div>
            </div>
            {/* /.bg-wrapper */}
          </div>
          {/*  /.content-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-short-banner-two */}

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

export default BlogV4;
