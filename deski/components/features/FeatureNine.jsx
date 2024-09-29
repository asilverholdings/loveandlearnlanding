import React from "react";
import Image from "next/image";
const FeatureContent = [
  {
    icon: "ils_15",
    meta: "Join Our Platform",
    subTitle: `  It only takes 5 minutes. Set up is smooth and simple fully lorem
    qui.`,
  },
  {
    icon: "ils_16",
    meta: "Manage you event",
    subTitle: `Choose a price package to suit you or pay per ticket. Sell on your
    website,`,
  },
  {
    icon: "ils_17",
    meta: "Start selling ticket",
    subTitle: `Get payments, detailed data on tickets sales & message guests lorem`,
  },
];

const FeatureNine = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-fourteen">
            <div className="illustration">
              <Image width={240} height={230} style={{objectFit:'contain'}}     src={`/images/assets/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="title">{val.meta}</div>
            <p className="font-rubik">{val.subTitle}</p>
          </div>
          {/* /.block-style-fourteen */}
        </div>
      ))}
    </div>
    // /.row
  );
};

export default FeatureNine;
