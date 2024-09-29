

import React from "react";
import Link from "next/link";
import HeaderThree from "../../../../components/header/HeaderThree";
import FaqClassicThree from "../../../../components/faq/FaqClassicThree";
import Footer from "../../../../components/footer/Footer";
import CopyRight from "../../../../components/footer/CopyRight";
import { allService } from "@/data/service";
import Image from "next/image";

export const metadata = {
    title: 'Service Details || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const ServiceDetails = ({params}) => {
    const item =  allService.filter((elm)=>elm.id==params.id)[0]  || allService[0]
  return (
    <div className="main-page-wrapper p0">
    
      {/* End Page SEO Content */}

      <HeaderThree />
      {/* End Header */}

      {/* =============================================
            Fancy Hero One
        ==============================================  */}
      <div className="fancy-hero-five">
        <div className="bg-wrapper">
          <div className="container">
            <div className="text-center row">
              <div className="col-xl-9 m-auto">
                <h1 className="heading">

                    {item.title  ||item.meta || (item.titleTextOne + item.TitleTextTwo) || ' Web Design'}
                    
                   </h1>
                <p className="sub-heading space-xs font-gordita mt-15">
                {item.subTitle  ||item.descriptions || `

                  We are a creative company that focuses on establishing
                  long-term relationships with customers.`}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.fancy-hero-five --> */}

      {/* =============================================
            Service Details One
        ==============================================  */}
      <div className="service-details-one pt-150 md-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-last">
              <div className="details-wrapper ps-xl-5">
                <h2 className="font-gordita">
                  World best web design service provider.
                </h2>
                <p className="sub-heading font-gordita pt-30 pb-70 md-pb-40">
                  Commonly used in the graphic, prit quis due & publishing
                  indust for previewing lightly visual mockups.
                </p>
                <Image width={822} height={420} style={{width:'100%',height:'fit-content'}}    
                  src="/images/gallery/img_42.jpg"
                  alt="gallery"
                  className="img-meta w-100"
                />
                <p className="pt-40 pb-40">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas interdum, orci at dapibus, massa ante pharetra
                  tellus. Maecenas interdum, orci at euismod dapibus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                  interdum.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="font-gordita pt-40">Our Goal</h4>
                    <ul className="list-item-one">
                      <li>Various analysis options.</li>
                      <li>Page Load (time, number of requests).</li>
                      <li>Big data analysis.</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h4 className="font-gordita pt-40">The Challange</h4>
                    <p>
                      Deski Web offers a complete lineup of features from any
                      major Maecena quis interdum, orci at euis dapibus, mass
                      ante pharetra tellus massa ante pharetra tellus.
                    </p>
                  </div>
                </div>
                {/* End .row */}
                <h3 className="font-gordita pt-90 pb-60 md-pt-50">
                  Any Questions find here.
                </h3>
                <FaqClassicThree />
              </div>
              {/* <!-- /.details-wrapper --> */}
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 order-lg-first">
              <div className="sidebar md-mt-100">
                <div className="category-list">
                  <h4 className="font-gordita">Services</h4>
                  <ul>
                    <li>
                      <a href="#" className="active">
                        Web Design
                      </a>
                    </li>
                    <li>
                      <a href="#">Mockup</a>
                    </li>
                    <li>
                      <a href="#">Print Design</a>
                    </li>
                    <li>
                      <a href="#">Logo</a>
                    </li>
                    <li>
                      <a href="#">Mobile Application</a>
                    </li>
                    <li>
                      <a href="#">Branding</a>
                    </li>
                    <li>
                      <a href="#">Illusutration</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /.category-list --> */}
                <div className="sidenote">
                  <p>
                    Evernote Web offers a complete lineup major linup browser
                  </p>
                  <span>- Rashed ka.</span>
                </div>
                <div className="share-option">
                  <h4 className="font-gordita">Share it. </h4>
                  <ul className="d-flex social-icon">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /.sidebar --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.service-details-one --> */}

      {/* 
      =============================================
            Footer
        ============================================== */}
      <div className="footer-bg-wrapper">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="fancy-short-banner-two">
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
                <Link href="/contact-pm"> Contact us</Link>
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
    </div>
  );
};

export default ServiceDetails;
