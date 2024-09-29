import React from "react";

const PricingContent = [
  {
    packName: "Starter",
    price: "18",
    packageFor: "Small office / Home office",
    icon: "38",
    billCycle: "Billed per agent",
    preFeatures: [
      "60-day chat history",
      "Basic widget customization",
      "Ticketing system",
      "Data security",
    ],
  },
  {
    packName: "Team",
    price: "49",
    packageFor: "Small office / Home office",
    icon: "40",
    billCycle: "Billed per agent",
    preFeatures: [
      "60-day chat history",
      "Basic widget customization",
      "Ticketing system",
      "Data security",
    ],
  },
  {
    packName: "Business",
    price: "99",
    packageFor: "Small office / Home office",
    icon: "41",
    billCycle: "Billed per agent",
    preFeatures: [
      "60-day chat history",
      "Basic widget customization",
      "Ticketing system",
      "Data security",
    ],
  },
];
import Image from "next/image";
const PricingYearly = () => {
  return (
    <div className="row justify-content-center">
      {PricingContent.map((val, i) => (
        <div className="col-lg-4 col-md-6" key={i}>
          <div className="pr-table-wrapper">
            <div className="pack-name">{val.packName}</div>
            <div className="price font-rubik">
              ${val.price}.<sup>99</sup>
            </div>
            <div className="pack-rec font-rubik">{val.packageFor}</div>
            <Image width={97} height={105} style={{objectFit:'contain'}}     
              src={`/images/icon/${val.icon}.svg`}
              alt="icon"
              className="icon"
            />
            <div className="bill-cycle">Billed per agent</div>
            <ul className="pr-feature">
              {val.preFeatures.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
            <a href="#" className="theme-btn-four">
              Choose Plan
            </a>
            <div className="trial-text font-rubik">
              Get your 30 day free trial
            </div>
          </div>
          {/*  /.pr-table-wrapper */}
        </div>
      ))}
    </div>
  );
};

export default PricingYearly;
