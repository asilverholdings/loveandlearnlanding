import React from "react";
import Image from "next/image";
const featuresContent = [
  {
    icon: "149",
    title: "Sign Doc Anywhere",
    desc: `Deski Web offers a complete lineup of features from any major
        browser.`,
    delayAnimation: "",
  },
  {
    icon: "150",
    title: "Simple to use",
    desc: `Lorem ipsum began as scrambl nonsensical Latin derived from Cicero's
        quis`,
    delayAnimation: "100",
  },
  {
    icon: "151",
    title: "Save time & Effort",
    desc: `Creation timelines for the standard lorem ipsum passage vary, with
        qius some citing.`,
    delayAnimation: "200",
  },
];

const FancyFeatureTewentyEight = () => {
  return (
    <div className="row justify-content-between">
      {featuresContent.map((val, i) => (
        <div
          className="col-xl-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div className="block-style-twentyEight text-center mt-40">
            <div className="icon d-flex justify-content-center align-items-end">
              <Image width={36} height={36} style={{objectFit:'contain'}}      src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            <p>{val.desc}</p>
          </div>
          {/* /.block-style-twentyEight */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureTewentyEight;
