import React from "react";
import Image from "next/image";
const PricingContent = [
  {
    icon: "140",
    packName: "Starter Plan",
    features: ["Unlimited Email", "5gb Hosting & Domain", "Email & Live chat."],
    price: "9.99",
    trialText: "up to 3 user + 1.99 per user",
    activeClass: "",
    delayAnimation: "",
  },
  {
    icon: "141",
    packName: "Silver Plan",
    features: [
      "Unlimited Email",
      "5gb Hosting",
      "2 website 3 sub domain",
      "Email & Live chat.",
      "Backling",
    ],
    price: "19.99",
    trialText: "up to 5 user + 1.99 per user",
    activeClass: "active",
    delayAnimation: "200",
  },
  {
    icon: "142",
    packName: "Gold Plan",
    features: ["Unlimited Email", "5gb Hosting & Domain", "Email & Live chat."],
    price: "19.99",
    trialText: "up to 5 user + 1.99 per user",
    activeClass: "",
    delayAnimation: "400",
  },
];

const PricingSeven = () => {
  return (
    <>
      {PricingContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-dealy={val.delayAnimation}
          key={i}
        >
          <div className={`pr-table-wrapper md-mb-40 ${val.activeClass}`}>
            <Image width={26} height={26} style={{objectFit:'contain'}}     
              src={`/images/icon/${val.icon}.svg`}
              alt="icon"
              className="icon"
            />
            <div className="pack-name">{val.packName}</div>
            <ul className="pr-feature">
              {val.features.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>

            <div className="price">
              ${val.price}
              <span>Weekly</span>
            </div>
            <div className="trial-text">{val.trialText}</div>
            <a href="#" className="trial-button">
              Sign up
            </a>
          </div>
          {/* /.pr-table-wrapper */}
        </div>
      ))}
    </>
  );
};

export default PricingSeven;
