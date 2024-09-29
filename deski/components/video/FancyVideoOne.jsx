'use client'


import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
const FancyVideoOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="qnwTVQlxs4g"
        onClose={() => setOpen(false)}
      />
      <Image width={1171} height={640} style={{height:'fit-content'}}     src="/images/media/img_65.png" alt="media" className="main-img" />
      <div
        className="fancybox video-button d-flex align-items-center"
        onClick={() => setOpen(true)}
      >
        <Image  width="67" height="67" src="/images/icon/66.svg" alt="icon" />
      </div>
    </>
  );
};

export default FancyVideoOne;
