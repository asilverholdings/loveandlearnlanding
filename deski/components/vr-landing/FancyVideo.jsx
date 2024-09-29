'use client'

import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FancyVideo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="ZFTgGi06vbM"
        onClose={() => setOpen(false)}
      />

      <div className="col-lg-6 ms-auto">
        <div className="content">
          <div className="title">
            Stylish Afford<span>able.</span> Quality.
          </div>
          <div className="fancybox video-icon tran3s mt-70 d-flex align-items-center cursor-default">
            <span className="icon cursor-pointer" onClick={() => setOpen(true)}>
              <i className="fa fa-play"></i>
            </span>
            <div className="ps-5 text-start">
              <span className="d-block ps-text">Watch Intro video </span>
              <strong className="d-block">
                It is a long established fact that will get it.{" "}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FancyVideo;
