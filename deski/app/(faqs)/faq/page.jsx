import React from "react";
import HeaderTwo from "../../../components/header/HeaderTwo";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import { FaqContent } from "@/data/faqs";
import Link from "next/link";

const Faq = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderTwo />
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto">
              <h2 className="font-rubik">Help & Support</h2>
              <p className="sub-heading">
                Advice and answers from our expert and professional team.
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

              <div className="all-faqs">
                {FaqContent.map((faq) => (
                  <div key={faq.id} className="faq-item mb-4">
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* Contact Us */}
              <div className="text-center more-faq-ask mt-5">
                <h3>Don’t find your answer?</h3>
                <Link href="/contact-eo" className="theme-btn-one mt-30">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="theme-footer-one pt-130 md-pt-70">
        <div className="top-footer">
          <div className="container">
            <Footer />
          </div>
        </div>
        <div className="container">
          <div className="bottom-footer-content">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Faq;
