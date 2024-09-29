import React from "react";
import Image from "next/image";
const featuresContent = [
  {
    icon: "144",
    title: "Contracts",
    desc: "Simplify the process to create proposals.",
    delayAnimation: "",
  },
  {
    icon: "145",
    title: "Proposal",
    desc: "Create interactive, error-free quotes.",
    delayAnimation: "100",
  },
  {
    icon: "146",
    title: "eSignature",
    desc: "Create interactive, error-free quotes.",
    delayAnimation: "200",
  },
  {
    icon: "147",
    title: "Collect Doc",
    desc: "Create interactive, error-free quotes.",
    delayAnimation: "300",
  },
];

const FancyFeatureTewentySeven = () => {
  return (
    <div className="row">
      {featuresContent.map((val, i) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div className="block-style-twentySeven">
            <div className="icon d-flex align-items-end justify-content-center">
              <Image width={48} height={53} style={{objectFit:'contain'}}    src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h4 className="font-gordita">{val.title}</h4>
            <p>{val.desc}</p>
          </div>
          {/* /.block-style-twentySeven */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureTewentySeven;
