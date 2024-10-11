"use client";
import Image from "next/image";
import React, { useState } from "react";

const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/",
  },
  {
    icon: "fa-instagram",
    link: "https://instagram.com/",
  },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/",
  },
];

const ContactAddress = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tessa@loveandlearn.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the "copied" state after 2 seconds
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-4 col-sm-6 d-lg-flex">
        <div className="address-info">
          <div className="icon d-flex align-items-end">
            <Image width="75" height="68" src="/images/icon/45.svg" alt="icon" />
          </div>
          <div className="title">Contact</div>
          <p className="font-rubik">
            <a href="mailto:tessa@loveandlearn.com">tessa@loveandlearn.com</a>
          </p>
          {/* Center the copy button */}
          <div className="d-flex justify-content-center mt-2">
            <button
              onClick={handleCopyEmail}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              title="Copy to clipboard"
            >
              <i className="fa fa-copy"></i>
            </button>
            {copied && <span style={{ marginLeft: "10px" }}>Copied!</span>}
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6 d-lg-flex">
        <div className="address-info">
          <div className="icon d-flex align-items-end">
            <Image width="66" height="75" src="/images/icon/46.svg" alt="icon" />
          </div>
          <div className="title">Social Media</div>
          <p className="font-rubik">Find on social media</p>
          <ul className="d-flex justify-content-center">
            {socialContent.map((val, i) => (
              <li key={i}>
                <a href={val.link} target="_blank" rel="noreferrer">
                  <i className={`fa ${val.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
