import React from "react";
import Image from "next/image";
const FeatureContent = [
  {
    icon: "20",
    meta: "Smart popups",
    subTitle: `Create customized popups and show the message at the lorem`,
    dataDelay: "0",
  },
  {
    icon: "21",
    meta: "Embeded Forms",
    subTitle: `Collect website leads with embedded forms and integrate easily.`,
    dataDelay: "100",
  },
  {
    icon: "22",
    meta: "Autoresponder",
    subTitle: `Send welcome email to your new subscribers with a code.`,
    dataDelay: "0",
  },
  {
    icon: "21",
    meta: "Embeded Forms",
    subTitle: `Collect website leads with embedded forms and integrate easily.`,
    dataDelay: "100",
  },
  {
    icon: "22",
    meta: "Autoresponder",
    subTitle: `Send welcome email to your new subscribers with a code.`,
    dataDelay: "0",
  },
  {
    icon: "20",
    meta: "Smart popups",
    subTitle: `Create customized popups and show the message at the lorem`,
    dataDelay: "100",
  },
];

const FeatureSix = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-md-6 "
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDelay}
        >
          <div className="block-style-five">
            <div className="icon">
              <Image width={75} height={75} style={{objectFit:'contain'}}     src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h6 className="title">
              <span>{val.meta}</span>
            </h6>
            <p>{val.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSix;
