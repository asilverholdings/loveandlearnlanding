import React from "react";
// import { videoTagString, VideoTag } from "react-video-tag";

// videoTagString({
//   src: "https://ibthemespro.com/resource/deski/intro_3.mp4",
// });

const Video = () => {
  return (
    <>
    <video src={'https://ibthemespro.com/resource/deski/intro_3.mp4'}  autoPlay />
      {/* <VideoTag
        autoPlay={`${true}`}
        muted={`${true}`}
        playsInline={`${true}`}
        loop={`${true}`}
        src={`${"https://ibthemespro.com/resource/deski/intro_3.mp4"}`}
      /> */}
    </>
  );
};

export default Video;
