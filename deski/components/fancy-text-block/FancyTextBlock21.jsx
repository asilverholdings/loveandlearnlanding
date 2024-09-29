'use client'

import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FancyTextBlock21 = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="row align-items-center">
        <div
          className="col-lg-6 col-md-7 m-auto"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="img-meta">
            <Image width={703} height={676} style={{height:'fit-content'}}     src="/images/media/img_72.png" alt="media" className="m-auto" />
            <Image width="291" height="296"
              src="/images/shape/138.svg"
              alt="shape"
              className="shapes shape-one"
            />
          </div>
        </div>
        {/* End .col */}

        <div
          className="col-xl-5 col-lg-6 ms-auto"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="text-wrapper md-pt-50">
            <a className="fancybox" onClick={() => setOpen(true)}>
              <Image  width="66" height="66" src="/images/icon/71.svg" alt="icon" className="icon" />
            </a>

            <div className="client-info">
              Over <span>150,000+ client</span>
            </div>
            <p>
              We created over <span>27,000+</span> stunning and quality products
              over last 5 years with satisfaction.
            </p>
            <div className="name">Carl Henderson</div>
          </div>
          {/* /.text-wrapper */}
        </div>
        {/* End .col */}
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="FDaF8_5dzzk"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default FancyTextBlock21;
