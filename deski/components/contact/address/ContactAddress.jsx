"use client"
import React, { useState } from "react";
import Image from "next/image";
import SocialMediaIcons from "@/components/SocialMediaIcons";

const ContactAddress = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tessa@loveandlearnnanny.com").then(() => {
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
            <a href="mailto:tessa@loveandlearnnanny.com">tessa@loveandlearnnanny.com</a>
          </p>
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
              <i className="fa fa-copy" style={{ fontSize: "38px" }}></i>
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
          <p className="font-rubik">Find us on social media</p>
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
