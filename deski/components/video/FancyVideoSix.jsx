'use client'


import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
const FancyVideoSix = () => {
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
      <Image width={1170} height={600} style={{width:'100%',height:'fit-content'}}     src="/images/media/img_111.png" alt="media" className="main-img" />
      <div
        className="ancybox video-button d-flex align-items-center justify-content-center"
        onClick={() => setOpen(true)}
      >
        <Image  width="27" height="33"  src="/images/icon/170.svg" alt="icon" />
      </div>
    </>
  );
};

export default FancyVideoSix;
