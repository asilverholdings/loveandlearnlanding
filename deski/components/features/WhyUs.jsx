import React from "react";
import Image from "next/image";

const FeatureContent = [
  {
    icon: "ils_15",
    meta: "Comprehensive Process",
    subTitle: `We make finding the perfect nanny easy and stress-free`,
  },
  {
    icon: "ils_16",
    meta: "Dependable Service",
    subTitle: `If your nanny is unavailable due to emergencies, we provide a backup nanny at no extra cost.`,
  },
  {
    icon: "ils_17",
    meta: "Continued Support",
    subTitle: `If you feel the nanny you’ve hired isn’t the right fit, we offer a 90 day replacement guarantee.`,
  },
  {
    icon: "ils_15",
    meta: "Curriculum",
    subTitle: `Our curriculum equips nannies with structured activities to foster your child's development.`,
  },
];

const WhyUs = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-3 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-fourteen">
            <div className="illustration">
              <Image width={240} height={230} style={{ objectFit: 'contain' }} src={`/images/assets/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="title">{val.meta}</div>
            <p className="font-rubik">{val.subTitle}</p>
          </div>
          {/* /.block-style-fourteen */}
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
