import React from "react";
import Image from "next/image";
const featuresContent = [
  {
    icon: "171",
    title: "Daily Updates",
    desc: `Elit esse cillum dolore eu fugiat nulla pariatur lorem elit`,
    delayAnimation: "",
  },
  {
    icon: "172",
    title: "Easu Cutomization",
    desc: ` Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
      porta.`,
    delayAnimation: "100",
  },
  {
    icon: "173",
    title: "Fast Support",
    desc: `Elit esse cillum dolore eu fugiat nulla pariatur lorem elit`,
    delayAnimation: "200",
  },
];

const FancyFeatureThirtyThree = () => {
  return (
    <div className="row">
      {featuresContent.map((val, i) => (
        <div
          className="col-lg-4"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div className="block-style-thirtyThree pe-lg-5 mt-40">
            <div className="icon">
              <Image width={40} height={40} style={{objectFit:'contain'}}     src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h3 className="title">
              <span>{val.title}</span>
            </h3>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureThirtyThree;
