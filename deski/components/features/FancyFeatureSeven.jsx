import React from "react";
import Image from "next/image";
const FeatureContent = [
  {
    icon: "35",
    meta: "Customer Value",
    subTitle: ` A place to think and track ideas for you and your team`,
    dataDelay: "0",
  },
  {
    icon: "36",
    meta: "Trusted & Reliable",
    subTitle: ` A home for your team, best practices and thoughts.`,
    dataDelay: "100",
  },
  {
    icon: "37",
    meta: "Fast Response",
    subTitle: `Beautiful docs for your APIs, Products, FAQs, & User Guides,`,
    dataDelay: "300",
  },
];

const FancyFeatureSeven = () => {
  return (
    <>
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDelay}
        >
          <div className="block-style-seven">
            <div className="icon">
              <Image width={77} height={82} style={{objectFit:'contain'}}      src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="feature-info">
              <span>{val.meta}</span>
            </div>
            <p className="font-rubik">{val.subTitle}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FancyFeatureSeven;
