import React from "react";

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import Link from "next/link";
import FaqForm from "@/components/form/FaqForm";
import Image from "next/image";
import { FaqContent } from "@/data/faqs";
export const metadata = {
    title: 'Faq || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 


const Faq = () => {
 

  return (
    <div className="main-page-wrapper">

      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
            Fancy Hero One
        ==============================================  */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto">
              <h2 className="font-rubik">Help & Support</h2>
              <p className="sub-heading">
                Advice and answers from our expert and proffesional deski Team
              </p>
            </div>
          </div>
          <FaqForm/>
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
            FAQS
        ==============================================  */}
      <div className="faqs-inner-page">
        <Image width={216} height={281}
          src="/images/shape/66.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="faqs-header pb-60 md-pb-50">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex">
                      <Image  width="65" height="54"
                        src="/images/icon/48.svg"
                        alt="icon"
                        className="icon"
                      />
                      <div className="md-mb-30">
                        <h3>FAQs</h3>
                        <p className="collection-preview">
                          Selling tickets for a raffle, lottery or sweepstake is
                          prohibited on Eventsmatic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="avatar d-flex align-items-center">
                      <Image width={41} height={41} src="/images/media/img_41.png" alt="media" />
                      <Image width={41} height={41} src="/images/media/img_42.png" alt="media" />
                      <span className="avatar_image avatar_fallback font-rubik">
                        +1
                      </span>
                    </div>
                    <p className="collection-info">
                      <span>63 articles</span> in this collection <br /> Written
                      by Jonny White, Emily Coddington and <span>1</span> other
                    </p>
                  </div>
                </div>
              </div>
              {/* /.faqs-header */}

              <div className="all-faqs">
                <div className="faqs-all-qus">
                  {FaqContent.map((item, i) => (
                    <Link
                      className="article-preview d-flex"
                      href={`/faqs/${item.id}`}
                      key={i}
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <Image
                      width={51} height={51}
                        src={`/images/media/${item.avatar}.png`}
                        alt="media"
                        className="avatar-img"
                      />
                      <div>
                        <h3 className="font-rubik">{item.title}</h3>
                        <div className="avatar-info">
                          Written by <span>{item.writterName}</span> <br />
                          {item.date}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {/* /.faqs-all-qus  */}
              </div>
              {/*  /.all-faqs */}

              <div
                className="text-center more-faq-ask"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <h3 className="mb-35 font-rubik">Don’t find your answer?</h3>
                <Link href="/contact-eo" className="theme-btn-one">
                  Contact us
                </Link>
              </div>
              {/* End more-faq-ask */}
            </div>
          </div>
        </div>
      </div>
      {/* /.faqs-inner-page */}

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

export default Faq;
