'use client'


import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
const VideoGalleryContent = [
  {
    img: "img_84",
    text1: "Promoty",
    text2: "your Event",
    animationDelay: "",
    videoId:'qnwTVQlxs4g'
  },
  {
    img: "img_85",
    text1: "Social Media",
    text2: "Promotion",
    animationDelay: "50",
    videoId:'qnwTVQlxs4g'
  },
  {
    img: "img_86",
    text1: "Youtube Creator",
    text2: "Intro",
    animationDelay: "100",
    videoId:'qnwTVQlxs4g'
  },
  {
    img: "img_87",
    text1: "Dancing",
    text2: "eople adv",
    animationDelay: "150",
    videoId:'qnwTVQlxs4g'
  },
  {
    img: "img_88",
    text1: "Cartoon for",
    text2: "children",
    animationDelay: "50",
    videoId:'qnwTVQlxs4g'
  },
  {
    img: "img_89",
    text1: "Music",
    text2: "Learning",
    animationDelay: "100",
    videoId:'qnwTVQlxs4g'
  },
  {
    img: "img_90",
    text1: "Greeting",
    text2: "intro",
    animationDelay: "150",
    videoId:'qnwTVQlxs4g'
  },
  {
    img: "img_91",
    text1: "Work",
    text2: "From Home",
    animationDelay: "200",
    videoId:'qnwTVQlxs4g'
  },
];

const VideoGallery = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState('qnwTVQlxs4g')
  return (
    <div className="row justify-content-center">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      {VideoGalleryContent.map((val, i) => (
        <div
          className="col-xl-3 col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDelay}
          key={i}
        >
          <div className="block-style-twentyOne" onClick={()=>setVideoId(val.videoId)}  >
            <Image width={330} height={230} style={{width:'100%',height:'fit-content'}}     src={`/images/media/${val.img}.png`} alt="image" className="w-100" />
            <div className="d-flex align-items-center justify-content-center flex-column video-button">
              <span>
                {val.text1} <br /> {val.text2}
              </span>
              <span
                className="icon d-flex align-items-center justify-content-center"
                onClick={() => setOpen(true)}
              >
                <Image  width="13" height="17" src="/images/icon/118.svg" alt="image" />
              </span>
            </div>
          </div>
          {/* /.block-style-twentyOne */}
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
