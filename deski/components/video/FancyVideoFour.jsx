'use client'


import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
const FancyVideoFour = () => {
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
      <div className="video-meta position-relative" data-aos="fade-up">
        <Image width={1320} height={660} style={{height:'fit-content'}}     src="/images/media/img_107.png" alt="group of people" />
        <div
          className="fancybox video-icon d-flex align-items-center justify-content-center"
          onClick={() => setOpen(true)}
        >
          <Image  width="57" height="57" src="/images/icon/148.svg" alt="icon" />
        </div>
      </div>
    </>
  );
};

export default FancyVideoFour;
