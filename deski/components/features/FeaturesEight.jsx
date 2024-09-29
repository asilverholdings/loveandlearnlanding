import React from "react";
import Image from "next/image";
const FeatureContent = [
  {
    icon: "60",
    meta: "Smart popups",
    subTitle: `Create customized popups and show the message at the lorem`,
  },
  {
    icon: "61",
    meta: "Embeded Forms",
    subTitle: `Collect website leads with embedded forms and integrate easily.`,
  },
  {
    icon: "62",
    meta: "Autoresponder",
    subTitle: `Send welcome email to your new subscribers with a code.`,
  },
];

const FeaturesEight = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-thirteen">
            <div className="icon">
              <Image width={78} height={78} style={{objectFit:'contain'}}     src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="title font-rubik">{val.meta}</div>
            <p>{val.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesEight;
