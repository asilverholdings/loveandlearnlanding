



import React from "react";

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import Nav from "@/components/team/Nav";

export const metadata = {
    title: 'Terms & Conditions || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const TermsConditions = () => {
  return (
    <div className="doc-container main-page-wrapper">
     
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =====================================================
				Terms and Condition
			===================================================== */}

    <Nav/>
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

export default TermsConditions;
