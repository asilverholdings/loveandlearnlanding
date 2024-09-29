import React from "react";

const PricingContent = [
  {
    packName: "Single",
    packDetails: "Analyze performance and do more with your data",
    price: "23.00",
    durationNumber: "Per monthy",
    facility: "Biller Yearly",
    features: [
      "Unlimited Email",
      "5gb Hosting",
      "2 website 3 sub domain",
      "Email & Live chat",
      "Backling",
      "Discount Programe",
    ],
    animationDelay: "",
    activeClass: "",
  },
  {
    packName: "Team",
    packDetails: "Analyze performance and do more with your data",
    price: "47.00",
    durationNumber: "Per monthy",
    facility: "Biller Yearly",
    features: [
      "Unlimited Email",
      "5gb Hosting",
      "2 website 3 sub domain",
      "Email & Live chat",
      "Backling",
      "Discount Programe",
    ],
    animationDelay: "100",
    activeClass: "active most-popular",
  },
  {
    packName: "Business",
    packDetails: "Analyze performance and do more with your data",
    price: "89.00",
    durationNumber: "Per monthy",
    facility: "Biller Yearly",
    features: [
      "Unlimited Email",
      "5gb Hosting",
      "2 website 3 sub domain",
      "Email & Live chat",
      "Backling",
      "Discount Programe",
    ],
    animationDelay: "200",
    activeClass: "",
  },
];

const Pricing = () => {
  return (
    <div className="row justify-content-center">
      {PricingContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDelay}
          key={i}
        >
          <div className={`pr-table-wrapper mt-40 ${val.activeClass}`}>
            <div className="pack-name">{val.packName}</div>
            <div className="pack-details">{val.packDetails}</div>
            <div className="top-banner d-md-flex align-items-center">
              <div className="price">
                <sup>$</sup>
                {val.price}
              </div>
              <div>
                <span>{val.durationNumber}</span>
                <em>{val.facility}</em>
              </div>
            </div>
            {/* /.top-banner */}
            <a href="#" className="trial-button tran3s">
              Start 30 days free trial
            </a>
            <ul className="pr-feature">
              {val.features.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>

            <div className="trial-text">No card required, cancel any time</div>
          </div>
          {/* /.pr-table-wrapper */}
        </div>
      ))}
    </div>
  );
};

export default Pricing;
