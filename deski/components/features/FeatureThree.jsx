import React from "react";
import Image from "next/image";
const FeatureContent = [
  {
    icon: "09",
    meta: "Project management",
    subTitle: `tempor incididunt ut labor culpa dolore magna aliqua. Ut enim qui minim veniam,`,
    dataDelay: "0",
  },
  {
    icon: "10",
    meta: "Customer Support",
    subTitle: `Excepteur sint occaecat cupidatat non proident, sunt in culpa non officia.`,
    dataDelay: "100",
  },
  {
    icon: "11",
    meta: "Marketing",
    subTitle: `consectetur adipiscing elit, sed dou eiusmod tempor incididu ut lab et dolore.`,
    dataDelay: "300",
  },
];

const FeatureThree = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDelay}
        >
          <div className="block-style-three">
            <div className="icon">
              <Image width={78} height={78} style={{objectFit:'contain'}}    src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h4>{val.meta}</h4>
            <p className="font-rubik">{val.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureThree;
