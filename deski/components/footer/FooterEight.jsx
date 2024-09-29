import React from "react";
import Link from "next/link";
import Image from "next/image";
const FooterEight = () => {
  return (
    <div className="row justify-content-end">
      <div className="col-xl-4 col-lg-3 col-12 footer-about-widget">
        <div className="logo">
          <a href="index">
            <Image width={138} height={47}      src="/images/logo/deski_06.svg" alt="image" />
          </a>
        </div>
        <ul className="font-rubik mt-10">
          <li>
            <a href="mailto:deskiinc@gmail.com">deskiinc@gmail.com</a>
          </li>
          <li>
            <a href="tel:+761 412 3224" className="phone">
              +761 412 3224
            </a>
          </li>
        </ul>
      </div>
      {/*  /.about-widget */}
      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title">Links</h5>
        <ul>
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
          <li>
            <Link     href="/">Demo the product</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title">Legal</h5>
        <ul>
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
      {/* /.footer-list */}
      <div className="col-xl-2 col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title">Products</h5>
        <ul>
          <li>
            <Link     href="/product-customer-support">Take the tour</Link>
          </li>
          <li>
            <Link     href="/login">Live chat</Link>
          </li>
          <li>
            <Link     href="/solution-management">Self-service</Link>
          </li>
          <li>
            <Link     href="/doc-box">Docs</Link>
          </li>
          <li>
            <Link     href="/doc-box-with-banner">Info Box</Link>
          </li>
          <li>
            <Link     href="/blogs/1">deski Reviews</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
    </div>
    //   /.row
  );
};

export default FooterEight;
