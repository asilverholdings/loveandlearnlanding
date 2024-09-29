import Image from "next/image";
import React from "react";

const FeatureContent = [
  {
    icon: "132",
    title: "Core PHP",
    subTitle: `Elit esse cillum dolore eu fugiat nulla pariatur`,
    bgColor: "#FFEBDB",
    delayAnimation: "",
  },
  {
    icon: "133",
    title: "Easy Customizable",
    subTitle: `quis nostrud exerct ullamo ea nisi ut aliqu dolor`,
    bgColor: "#E0F8F8",
    delayAnimation: "200",
  },
  {
    icon: "134",
    title: "Fast Support",
    subTitle: `Duis aute irure dolor reprehen derit in voluptat velit.`,
    bgColor: "#F7EDFF",
    delayAnimation: "400",
  },
];

const FancyFeatureTewentyThree = () => {
  return (
    <>
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div className="block-style-twentyTwo">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: val.bgColor }}
            >
              <Image width={24} height={24} style={{objectFit:'contain'}}      src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            <p>{val.subTitle}</p>
            <a className="arrow-icon" href="#">
              <Image  width="35" height="15"
                className="arrow-icon"
                src="/images/icon/135.svg"
                alt="icon"
              />
            </a>
          </div>
          {/* /.block-style-twentyTwo */}
        </div>
      ))}
    </>
  );
};

export default FancyFeatureTewentyThree;
