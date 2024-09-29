import React from "react";
import Link from "next/link";
import { featuresContent } from "@/data/service";
import Image from "next/image";

const FancyFeatureThirtyFive = () => {
  return (
    <>
      {featuresContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dealyAnimation}
          key={i}
        >
          <Link     href={`/services/${val.id}`} className="block-style-twentyTwo">
            <div
              style={{ background: val.bgColor }}
              className="icon d-flex align-items-center justify-content-center"
            >
              <Image width={24} height={24} style={{objectFit:'contain'}}    src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            <p>{val.subTitle}</p>
          </Link>
          {/* <!-- /.block-style-twentyTwo --> */}
        </div>
      ))}
    </>
  );
};

export default FancyFeatureThirtyFive;
