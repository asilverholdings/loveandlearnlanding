'use client'
import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FacnyVideoThree = () => {
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

      <div className="row align-items-center">
        <div
          className="col-lg-6"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="text-wrapper pe-5">
            <h6>SHARE CoNTENT</h6>
            <h3 className="title">Share content all platform.</h3>
            <p>
              Upload, edit, and share files with a team in a single place.
              Secure, backed up, and cross-device - now, work can happen from
              anywhere.
            </p>
            <div
              className="d-flex align-items-center video-button  order-sm-last "
              onClick={() => setOpen(true)}
            >
              <i className="fa fa-caret-right" aria-hidden="true"></i>
              <span>WATCH VIDEO</span>
            </div>
          </div>
          {/* /.text-wrapper */}
        </div>
        <div
          className="col-lg-6 col-md-8 m-auto"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Image width={492} height={505} style={{height:'fit-content'}}     src="/images/media/img_83.png" alt="media" className="m-auto" />
        </div>
      </div>
    </>
  );
};

export default FacnyVideoThree;
