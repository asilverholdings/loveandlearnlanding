import React from "react";
import HeaderTwo from "../../../components/header/HeaderTwo";
import FaqClassicTwo from "@/components/faq/FaqClassicTwo";
import FancyBannerTwo from "@/components/fancy-features/FancyBannerTwo";
import FooterFour from "@/components/footer/FooterFour";

const Faq = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderTwo />
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto">
              <h2 className="font-rubik">FAQ's</h2>
              <p className="sub-heading">
                Learn more through our answers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faqs-inner-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="faqs-header pb-60 md-pb-50">
                <h3>Frequently Asked Questions</h3>
                <p className="collection-preview">
                  Here are the answers to some common questions you may have.
                </p>
              </div>
              <FaqClassicTwo/>
            </div>
          </div>
        </div>
      </div>
        <div className="mt-50">
          {/* Contact Us */}
          <FancyBannerTwo />
        </div>

      <footer className="theme-footer-eight mt-100 mb-80">
        <div className="top-footer">
            <div className="container">
              <FooterFour />
            </div>
            {/* /.container */}
          </div>
      </footer>
    </div>
  );
};

export default Faq;
