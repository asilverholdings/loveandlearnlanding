import React from "react";
import Link from "next/link";
import { featuresContentTwo } from "@/data/service";
import Image from "next/image";


const FancyFeatureThirtyFour = () => {
  return (
    <div className="row">
      {featuresContentTwo.map((item, i) => (
        <div
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.dealyAnimation}
          key={i}
        >
          <div className="block-style-thirtyTwo d-flex">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: item.bgColor }}
            >
              <Image width={24} height={24} style={{objectFit:'contain'}}      src={`/images/icon/${item.icon}.svg`} alt="icon" />
            </div>
            <div className="text">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
              <Link     href={`/services/${item.id}`} className="tran3s">
                <Image  width="35" height="15" src="/images/icon/182.svg" alt="icon" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureThirtyFour;
