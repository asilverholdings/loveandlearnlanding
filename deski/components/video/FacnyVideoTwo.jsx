'use client'

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
const FacnyVideoTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="mcvqOUtcAJg"
        onClose={() => setOpen(false)}
      />

      <div className="row align-items-center">
        <div
          className="col-lg-6 order-lg-last"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="text-wrapper ps-5">
            <h6>SUPPORTED</h6>
            <h3 className="title">Import & Export all format.</h3>
            <p>
              Go paperless. Back up important documents to all your devices, and
              keep the information not the clutter.
            </p>
            <div
              className="d-flex align-items-center video-button  order-sm-last"
              onClick={() => setOpen(true)}
            >
              <i className="fa fa-caret-right" aria-hidden="true"></i>
              <span>WATCH VIDEO</span>
            </div>
          </div>
          {/* /.text-wrapper */}
        </div>
        <div
          className="col-lg-6 col-md-8 m-auto order-lg-first"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <Image width={500} height={500} style={{height:'fit-content'}}     src="/images/media/img_82.png" alt="media" className="m-auto" />
        </div>
      </div>
    </>
  );
};

export default FacnyVideoTwo;
