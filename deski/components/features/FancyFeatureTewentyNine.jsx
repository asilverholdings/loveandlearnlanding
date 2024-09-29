'use client'


import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Image from "next/image";

const FancyFeatureTewentNine = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />

      <div className="row">
        <div className="col-lg-6 mt-40" data-aos="fade-up">
          <div
            className="block-style-twentyNine"
            style={{ background: "#623A75" }}
          >
            <div className="logo">
              <Image width={127} height={66}  src="/images/logo/logo-53.png" alt="brand" />
            </div>
            <div
              className="fancybox video-icon tran3s"
              onClick={() => setOpen(true)}
            >
              <Image  width="17" height="20"  src="/images/icon/152.svg" alt="icon" />
            </div>
            <h3>
              <Link     href={`/blogs/1`}>
                Seattle Opera Simplifies Performance Planning with deski
                eSignature.
              </Link>
            </h3>
            <Link
              className="read-more-btn d-flex justify-content-between align-items-center w-100"
              href={`/blogs/1`}
            >
              <span>Continue Reading</span>
              <Image  width="34" height="15"  src="/images/icon/153.svg" alt="icon" />
            </Link>
          </div>
          {/* /.block-style-twentyNine */}
        </div>
        {/* End .col */}

        <div className="col-lg-6 mt-40" data-aos="fade-up" data-aos-delay="100">
          <div
            className="block-style-twentyNine"
            style={{ background: "#314B7D" }}
          >
            <div className="logo">
              <Image width={156} height={36}  src="/images/logo/logo-54.png" alt="brand" />
            </div>
            <div
              className="fancybox video-icon tran3s"
              onClick={() => setOpen(true)}
            >
              <Image  width="17" height="20"  src="/images/icon/152.svg" alt="icon" />
            </div>
            <h3>
              <Link       href={`/blogs/1`}>
                How DocuSign CLM Helps Celonis Scale Its Global Business
              </Link>
            </h3>
            <Link
              className="read-more-btn d-flex justify-content-between align-items-center w-100"
              href={`/blogs/1`}
            >
              <span>Continue Reading</span>
              <Image  width="34" height="15"  src="/images/icon/153.svg" alt="icon" />
            </Link>
          </div>
          {/* /.block-style-twentyNine */}
        </div>
        {/* End .col */}

        <div className="col-lg-6 mt-40" data-aos="fade-up">
          <div
            className="block-style-twentyNine"
            style={{ background: "#2B4E56" }}
          >
            <div className="logo">
              <Image width={130} height={26}  src="/images/logo/logo-55.png" alt="brand" />
            </div>
            <div
              className="fancybox video-icon tran3s"
              onClick={() => setOpen(true)}
            >
              <Image  width="17" height="20"  src="/images/icon/152.svg" alt="icon" />
            </div>
            <h3>
              <Link         href={`/blogs/1`}>
                Sunrun makes solar contracts convenient with deski and
                Salesforce
              </Link>
            </h3>
            <Link
              className="read-more-btn d-flex justify-content-between align-items-center w-100"
              href={`/blogs/1`}
            >
              <span>Continue Reading</span>
              <Image  width="34" height="15"  src="/images/icon/153.svg" alt="icon" />
            </Link>
          </div>
          {/* /.block-style-twentyNine */}
        </div>
        {/* End .col */}

        <div className="col-lg-6 mt-40" data-aos="fade-up" data-aos-delay="100">
          <div
            className="block-style-twentyNine"
            style={{ background: "#7A4040" }}
          >
            <div className="logo">
              <Image width={134} height={33}  src="/images/logo/logo-56.png" alt="brand" />
            </div>
            <div
              className="fancybox video-icon tran3s"
              onClick={() => setOpen(true)}
            >
              <Image  width="17" height="20"  src="/images/icon/152.svg" alt="icon" />
            </div>
            <h3>
              <Link         href={`/blogs/1`}>
                McCloskey Motors builds a touchless car sale process with
                Design.
              </Link>
            </h3>
            <Link
              className="read-more-btn d-flex justify-content-between align-items-center w-100"
              href={`/blogs/1`}
            >
              <span>Continue Reading</span>
              <Image  width="34" height="15"  src="/images/icon/153.svg" alt="icon" />
            </Link>
          </div>
          {/* /.block-style-twentyNine */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default FancyFeatureTewentNine;
