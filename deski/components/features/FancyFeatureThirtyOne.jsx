import React from "react";
import Image from "next/image";
const featuresContent = [
  {
    icon: "163",
    title: "Easy Customize",
    desc: `Keep a track on real-time performance while analyzing the success of your mail campaigns.`,
    delayAnimation: "",
  },
  {
    icon: "164",
    title: "100+ Template",
    desc: `Keep a track on real-time performance while analyzing the success of your mail campaigns.`,
    delayAnimation: "100",
  },
  {
    icon: "165",
    title: "Clean & Unique",
    desc: `Keep a track on real-time performance while analyzing the success of your mail campaigns.`,
    delayAnimation: "200",
  },
];

const FancyFeatureThirtyOne = () => {
  return (
    <div className="row justify-content-between">
      {featuresContent.map((item, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimation}
          key={i}
        >
          <div className="block-style-thirtyOne mt-40">
            <div className="icon d-flex align-items-end">
              <Image width={32} height={32} style={{objectFit:'contain'}}      src={`/images/icon/${item.icon}.svg`} alt="icon" />
            </div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
          {/* <!-- /.block-style-thirtyOne --> */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureThirtyOne;
