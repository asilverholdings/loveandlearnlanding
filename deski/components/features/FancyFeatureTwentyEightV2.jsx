import React from "react";
import Image from "next/image";
const featureContent = [
  {
    icon: "186",
    title: "Daily Updates",
    subTitle: "Elit esse cillum dolore eu fugiat nulla pariatur lom elit",
    dealyAnimation: "0",
  },
  {
    icon: "187",
    title: "Easy Cutomization",
    subTitle: "Nulla vitae elit libero, haretra augue. Donec id elit non m.",
    dealyAnimation: "100",
  },
  {
    icon: "188",
    title: "Fast Support",
    subTitle:
      " Nulla vitae elit libero, a phare augue. Donec id elit non mi porta.",
    dealyAnimation: "200",
  },
];

const FancyFeatureTwentyEightV2 = () => {
  return (
    <div className="row justify-content-between">
      {featureContent.map((val, i) => (
        <div
          className="col-md-4 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={val.dealyAnimation}
          key={i}
        >
          <div className="block-style-twentyEight text-center mt-40">
            <div className="icon d-flex justify-content-center align-items-end">
              <Image width={25} height={25} style={{objectFit:'contain'}}      src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h4 className="font-gordita">{val.title}</h4>
            <p>{val.subTitle}</p>
          </div>{" "}
          {/* <!-- /.block-style-twentyEight --> */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureTwentyEightV2;
