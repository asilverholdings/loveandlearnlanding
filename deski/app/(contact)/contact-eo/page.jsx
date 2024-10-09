import React from "react";

import HeaderTwo from "../../../components/header/HeaderFour";
import ContactAddress from "../../../components/contact/address/ContactAddress";
import ContactForm from "../../../components/contact/form/ContactForm";
import FooterFour from "../../../components/footer/FooterFour";
import Image from "next/image";
export const metadata = {
    title: 'Contact Event Organizer || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const ContactEventOrganizer = () => {
  return (
    <div className="main-page-wrapper p0">
 
      {/* End Page SEO Content */}

      <HeaderTwo />
      {/* End Header */}

      {/* =============================================
				Fancy Hero Four
			==============================================  */}

      <div className="fancy-hero-four bg-event space-fix">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-11 col-md-10 m-auto">
                <h6>Contact us</h6>
                <h2>Feel free to contact us or just say hi!</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-four */}

      {/*  =============================================
				Contact Style Two
			==============================================  */}
      <div className="contact-style-two">
        <div className="container">
          <div className="contact-info-wrapper">
            <ContactAddress />
            <Image width={187} height={187}
              src="/images/shape/64.svg"
              alt="shape"
              className="shapes shape-one"
            />
            <Image width={196} height={196}
              src="/images/shape/65.svg"
              alt="shape"
              className="shapes shape-two"
            />
          </div>
          {/* /.contact-info-wrapper */}

          <div className="form-style-classic mt-200 md-mt-80">
            <ContactForm />
          </div>
        </div>
        {/* /.contact-style-two */}

        {/* 	=====================================================
				Footer Style Four
			===================================================== */}
        <footer className="theme-footer-four mt-200 md-mt-150">
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
    </div>
  );
};

export default ContactEventOrganizer;
