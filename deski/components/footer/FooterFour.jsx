import React from "react";
import Link from "next/link";
import Image from "next/image";

const linksFooterContent = [
  {
    itemName: "Home",
    routePath: "/",
  },
  {
    itemName: "Our Story",
    routePath: "/#our-story",
  },
  {
    itemName: "Why Us",
    routePath: "/why-us",
  },
];

const servicesFooterContent = [
  {
    itemName: "For Families",
    routePath: "/for-families",
  },
  {
    itemName: "For Nannies",
    routePath: "/for-nannies",
  },
  {
    itemName: "Screening & Matchmaking",
    routePath: "/screening-and-matchmaking",
  },
];

const moreFooterContent = [
  {
    itemName: "FAQ",
    routePath: "/faq",
  },
  {
    itemName: "Contact Us",
    routePath: "/contact-us",
  },
];

const FooterFour = () => {
  return (
    <div className="row justify-content-end mb-100">
      <div className="col-xl-4 col-lg-3 col-12 footer-about-widget">
        <div className="logo">
          <Link href="/">
            <Image width={250} 
              height={47} src="/images/logo/love-and-learn-text.svg" alt="brand" style={{ marginLeft: '-10px', display: "block", boxShadow: "none" }} />
          </Link>
        </div>
        <ul className="font-rubik mt-10">
          <li>
            <a href="mailto:tessa@loveandlearn.com">tessa@loveandlearn.com</a>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}

      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">Links</h5>
        <ul>
          {linksFooterContent.map((list, i) => (
            <li key={i}>
              <Link href={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* /.footer-list */}
      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">Services</h5>
        <ul>
          {servicesFooterContent.map((list, i) => (
            <li key={i}>
              <Link href={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}

      <div className="col-xl-2 col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">More</h5>
        <ul className="pe-5">
          {moreFooterContent.map((list, i) => (
            <li key={i}>
              <Link href={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}
    </div>
  );
};

export default FooterFour;
