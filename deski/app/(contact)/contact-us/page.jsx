import React from "react";

import HeaderTwo from "../../../components/header/HeaderTwo";
import ContactAddress from "../../../components/contact/address/ContactAddress";
import ContactForm from "../../../components/contact/form/ContactForm";
import CopyRightTwo from "../../../components/footer/CopyRightTwo";
import Image from "next/image";
import FooterFour from "@/components/footer/FooterFour";
export const metadata = {
    title: 'Contact Customer Support || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const ContactCustomerSupport = () => {
  return (
    <div className="main-page-wrapper p0">
   
      {/* End Page SEO Content */}

      <HeaderTwo />
      {/* End Header */}

      {/* =============================================
				Fancy Hero Four
			==============================================  */}

      <div className="fancy-hero-four space-fix">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="shapes shape-five"></div>
        <div className="shapes shape-six"></div>
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
          <h3 className="text-center m-5">Or send a message here!</h3>
            <ContactForm />
          </div>
        </div>
      </div>
      {/* /.contact-style-two */}

      {/* 	=====================================================
				Footer Style Two
			===================================================== */}
      <footer className="theme-footer-eight mt-100 mb-80">
        <div className="container">
          <FooterFour />
        </div>
      </footer>
    </div>
  );
};

export default ContactCustomerSupport;
