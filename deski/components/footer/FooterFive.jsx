

'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
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

const FooterFive = () => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-4">
        <div className="logo">
          <Link     href="/">
            <Image width={138} height={47} style={{width:'100%',height:'fit-content'}}     src="/images/logo/deski_06.svg" alt="brand" />
          </Link>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="title">Find us on Social Media</div>
        <ul className="d-flex justify-content-center social-icon">
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="title">We’r always happy to help.</div>
        <div className="text-center">
          <a href="mailto:ib-themes21@gmail.com" className="email">
            ask@jdeski.com
          </a>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterFive;
