
'use client'


import React from "react";
import Link from "next/link";
import FormFooterSignup from "../form/FormFooterSignup";
import Image from "next/image";
const FooterSeven = () => {
  return (
    <div className="row ">
      <div
        className="col-xl-3 col-lg-2 mb-40"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="logo">
          <a href="index.html">
            <Image width={138} height={47} style={{width:'100%',height:'fit-content'}}     src="/images/logo/deski_06.svg" alt="logo" />
          </a>
        </div>
      </div>
      {/* End .col */}

      <div
        className="col-lg-2 col-md-6 mb-40"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <h5 className="title">Links</h5>
        <ul className="footer-list">
          <li>
            <Link     href="/">Home</Link>
          </li>
          <li>
            <Link     href="/pricing-cs">Pricing</Link>
          </li>
          <li>
            <Link     href="/about-eo">About us</Link>
          </li>
          <li>
            <Link     href="/features-customer-support">Careers</Link>
          </li>
          <li>
            <Link     href="/solution-management">Features</Link>
          </li>
          <li>
            <Link     href="/blog-v3">Blog</Link>
          </li>
        </ul>
      </div>

      <div
        className="col-lg-3 col-md-6 mb-40"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="150"
      >
        <h5 className="title">Legal</h5>
        <ul className="footer-list">
          <li>
            <Link     href="/terms-conditions">Terms of use</Link>
          </li>
          <li>
            <Link     href="/terms-conditions">Terms & conditions</Link>
          </li>
          <li>
            <Link     href="/terms-conditions">Privacy policy</Link>
          </li>
          <li>
            <Link     href="/terms-conditions">Cookie policy</Link>
          </li>
        </ul>
      </div>
      <div
        className="col-xl-4 col-lg-5 mb-40"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div className="newsletter">
          <h5 className="title">Newslettert</h5>
          <p>
            Join over <span>68,000</span> people getting our emails
          </p>

          <FormFooterSignup />

          <div className="info">
            We only send interesting and relevant emails.
          </div>
        </div>
        {/* /.newsletter */}
      </div>
    </div>
  );
};

export default FooterSeven;
