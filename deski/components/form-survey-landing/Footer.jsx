import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const socialContent = [
    {
      icon: "fa-facebook",
      link: "https://www.facebook.com/",
    },
    {
      icon: "fa-twitter",
      link: "https://twitter.com/",
    },
    {
      icon: "fa-linkedin",
      link: "https://www.linkedin.com/",
    },
  ];
  return (
    <div className="d-lg-flex align-items-center justify-content-between">
      <div className="logo text-center">
        <Link     href="/">
          <Image width={138} height={47} style={{width:'100%',height:'fit-content'}}     src="/images/logo/deski_06.svg" alt="logo" />
        </Link>
      </div>
      <ul className="style-none footer-nav d-flex flex-wrap justify-content-center md-pt-10 md-pb-20">
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
      <ul className="d-flex justify-content-center social-icon style-none">
        {socialContent.map((val, i) => (
          <li key={i}>
            <a href={val.link} target="_blank" rel="noreferrer">
              <i className={`fa ${val.icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
