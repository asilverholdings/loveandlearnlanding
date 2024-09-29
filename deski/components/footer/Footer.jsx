import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="row justify-content-end">
      <div
        className="col-lg-3 col-md-12 footer-about-widget"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <Link     href="/" className="logo">
          <Image  width="110" height="49" src="/images/logo/deski_02.svg" alt="image" />
        </Link>
      </div>
      {/* /.about-widget */}
      <div
        className="col-lg-3 col-md-4 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
        <h5 className="footer-title">Services</h5>
        <ul>
          <li>
            <Link         href={`/blogs/1`}>Web Design</Link>
          </li>
          <li>
            <Link     href="/blogs/1">Development</Link>
          </li>
          <li>
            <Link     href="/blogs/1">Wordpress</Link>
          </li>
          <li>
            <Link     href="/blogs/1">Online Marketing</Link>
          </li>
          <li>
            <Link     href="/blogs/1">Content</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
      <div
        className="col-lg-3 col-md-4 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <h5 className="footer-title">About us</h5>
        <ul>
          <li>
            <Link     href="/about-cs">About us</Link>
          </li>
          <li>
            <Link     href="/faqs/2">Faq Details</Link>
          </li>
          <li>
            <Link     href="/team-6">Team</Link>
          </li>
          <li>
            <Link     href="/pricing-cs">Plan & Pricing</Link>
          </li>
          <li>
            <Link     href="/blog-v5">News</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
      <div
        className="col-lg-3 col-md-4 address-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="150"
      >
        <h5 className="footer-title">Address</h5>
        <ul>
          <li>
            <a href="#">companyinfo@mail.com</a>
          </li>
          <li>
            <a href="#" className="mobile-num">
              +761 412 3224
            </a>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
    </div>
    //.row
  );
};

export default Footer;
