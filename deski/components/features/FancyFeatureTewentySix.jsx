import React from "react";
import Image from "next/image";
const featuresContent = [
  {
    colorBasedClass: "color-variatin-one",
    title: "Deski eSignature",
    subTitle: `Join 1,000,000 customers & hundreds of millions of signers`,
    routerPath: "#",
    shapeOne: "222",
    shapeTwo: "223",
  },
  {
    colorBasedClass: "color-variatin-two",
    title: "Agreement Cloud",
    subTitle: `Connect and automate your entire agreement process.`,
    routerPath: "#",
    shapeOne: "224",
    shapeTwo: "225",
  },
];

const FancyFeatureTewentySix = () => {
  return (
    <div className="row">
      {featuresContent.map((val, i) => (
        <div className="col-md-6" data-aos="fade-right" key={i}>
          <div
            className={`block-style-twentySix text-center mb-40 ${val.colorBasedClass}`}
          >
            <h6>{val.title}</h6>
            <h4>{val.subTitle}</h4>
            <a href={val.routerPath} className="try-btn">
              Try it Free
            </a>
            <Image width={40} height={331}     
              src={`/images/shape/${val.shapeOne}.jpg`}
              alt="shape"
              className="shapes shape-one"
            />
            <Image width={26} height={330}     
              src={`/images/shape/${val.shapeTwo}.jpg`}
              alt="shape"
              className="shapes shape-two"
            />
          </div>
          {/* .block-style-twentySix */}
        </div>
        // End .col
      ))}
    </div>
  );
};

export default FancyFeatureTewentySix;
