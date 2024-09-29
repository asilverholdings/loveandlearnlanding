import React from "react";
import Image from "next/image";
const FeatureContent = [
  {
    icon: "78",
    title: "Easy Customizable",
    subTitle: `Duis aute irure dolor reprehen derit in voluptat velit.`,
    hoverText: `Bring all team slit managment task quis togather.`,
  },
  {
    icon: "79",
    title: "Modern & Slick",
    subTitle: `Duis aute irure dolor reprehen derit in voluptat velit.`,
    hoverText: `  Bring all team slit managment task quis togather.`,
  },
  {
    icon: "80",
    title: "Trusted & Secure",
    subTitle: `Duis aute irure dolor reprehen derit in voluptat velit.`,
    hoverText: `  Bring all team slit managment task quis togather.`,
  },
];

const FancyFeatureTwelve = () => {
  return (
    <div className="row justify-content-center pt-50 md-pt-20">
      {FeatureContent.map((val, i) => (
        <div className="col-lg-4 col-md-6" key={i}>
          <div className="block-style-seventeen mt-40">
            <div className="icon d-flex align-items-center justify-content-center">
              <Image width={30} height={30} style={{objectFit:'contain'}}      src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="static-text">
              <h3>{val.title}</h3>
              <p>{val.subTitle}</p>
            </div>
            <div className="hover-text">{val.hoverText}</div>
          </div>
          {/* /.block-style-seventeen */}
        </div>
      ))}
    </div>
    //   End .row
  );
};

export default FancyFeatureTwelve;
