import Image from "next/image";
import React from "react";

const AboutThree = () => {
  return (
    <div className="row">
      <div
        className="col-lg-6 order-lg-last"
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <div className="text-wrapper ps-3">
          <div className="title-style-three mb-35 md-mb-20">
            <h6>Certified by trustpilot</h6>
            <h2>
              <span>
                Certified and trusted{" "}
                <Image width="526" height="53" src="/images/shape/line-shape-7.svg" alt="shape" />
              </span>
              support portal.
            </h2>
          </div>
          {/*  /.title-style-two */}
          <p>
            Whether you're a theatre, stadium, intimate music venue, church,
            gala or concert hall, our seating chart tooi accurately represent
            your venue and seating layout.
          </p>
          <p className="mt-30">
            It's easy to incorporate socialy distanced spaces, add tables, edit
            the numbering or have.
          </p>
        </div>
      </div>
      <div className="col-lg-6 order-lg-first">
        <div className="img-gallery">
          <Image width={402} height={487} style={{width:'100%',height:'fit-content'}}    
            src="/images/media/img_38.png"
            alt="media"
            data-aos="fade-right"
            data-aos-duration="1200"
          />
          <Image width={292} height={309} style={{width:'100%',height:'fit-content'}}    
            src="/images/media/img_36.png"
            alt="media"
            className="overlay-img"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="100"
          />
          <Image width={100} height={129}
            src="/images/shape/49.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image width={144} height={144}
            src="/images/shape/54.svg"
            alt="shape"
            className="shapes shape-three"
          />
        </div>
        {/* /.img-gallery */}
      </div>
    </div>
  );
};

export default AboutThree;
