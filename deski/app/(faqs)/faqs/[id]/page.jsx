import React from "react";

import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import CopyRight from "../../../../components/footer/CopyRight";
import FaqForm from "@/components/form/FaqForm";
import Image from "next/image";
import { FaqContent } from "@/data/faqs";
export const metadata = {
    title: 'Faq Details || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const FaqDetails =  ({ params }) => {

    const faq =  FaqContent.filter((elm)=>elm.id==params.id)[0]  || FaqContent[0]

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
              <div className="all-faqs">
                <div className="faqs-all-qus m-0">
                  <div className="article-preview mb-0">
                    <div className="d-flex">
                      <Image width={51} height={51}
                        src={`/images/media/${faq.avatar || 'img_43'}.png`}
                        alt="media"
                        className="avatar-img"
                      />
                      <div>
                        <h3 className="font-rubik">
                          {faq.title}
                        </h3>
                        <div className="avatar-info">
                          Written by <span>{faq.writterName}</span> <br />
                          {faq.date}
                        </div>
                      </div>
                    </div>
                    {/* End .d-flex */}

                    <div className="article-details">
                      <p>
                        To activate 2FA you will need an authenticator app
                        installed on your smartphone. This could be Google
                        Authenticator or Authy, both available for iOs and
                        Android.
                      </p>
                      <ul className="list-meta">
                        <li>
                          Go to ‘Account settings’ from your Ticket Tailor
                          dashboard.
                        </li>
                        <li>
                          Under the heading ‘Two-factor authentication’ click
                          the button labelled ‘Activate 2FA’.
                        </li>
                        <li>
                          From your authenticator app on your phone, add a new
                          login and it will ask you to scan the QR code shown
                          here. Scan the QR code.
                        </li>
                        <li>
                          The app will generate a code. Enter that code in the
                          box below and click 'Activate 2FA'.
                        </li>
                      </ul>
                      <p>
                        <b>Please note:</b> If you lose access to your 2FA app
                        you will need to contact customer support to go through
                        a security questionnaire and have your account unlocked.
                      </p>

                      <div className="reaction-wrapper">
                        <h4>Did this answer your question?</h4>
                        <div
                          className="d-flex align-items-center justify-content-center"
                          data-aos="zoom-in"
                          data-aos-duration="1200"
                          data-aos-delay="50"
                        >
                          <button>
                            <Image  width="40" height="40" src="/images/icon/happy.svg" alt="icon" />
                          </button>
                          <button>
                            <Image  width="40" height="40"  src="/images/icon/sad.svg" alt="icon" />
                          </button>
                          <button>
                            <Image  width="40" height="40"  src="/images/icon/surprised.svg" alt="icon" />
                          </button>
                        </div>
                      </div>
                      {/* /.reaction-wrapper */}
                    </div>
                    {/*  /.article-details */}
                  </div>
                  {/* /.article-preview  */}
                </div>
                {/* /.faqs-all-qus */}
              </div>
              {/* /.all-faqs */}
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

export default FaqDetails;
