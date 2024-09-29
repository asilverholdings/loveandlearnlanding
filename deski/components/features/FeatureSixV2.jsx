import React from "react";
import Link from "next/link";
import { FeatureContentThree } from "@/data/service";
import Image from "next/image";


const FeatureSixV2 = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContentThree.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDelay}
        >
          <Link     href={`/services/${val.id}`} className="block-style-five">
            <div className="icon">
              <Image width={75} height={75} style={{objectFit:'contain'}}     src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h6 className="title">
              <span>{val.meta}</span>
            </h6>
            <p>{val.subTitle}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeatureSixV2;
