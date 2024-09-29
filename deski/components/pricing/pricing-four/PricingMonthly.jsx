import React from "react";

const PricingContent = [
  {
    packName: "Single",
    packDetails: "For individuals and teams",
    bgColor: "#FFF7EB",
    price: "8",
    durationNumber: "Per editor, monthly",
    facility: "with unlimited email",
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
    packDetails: "For individuals and teams",
    bgColor: "#E2F2FD",
    price: "12",
    durationNumber: "For team, monthly",
    facility: "team with 8 users",
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
    packDetails: "For individuals and teams",
    bgColor: "#FFEBEB",
    price: "37",
    durationNumber: "All users, monthly",
    facility: "for unlimited users",
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

const PricingMonthly = () => {
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
          <div className={`pr-table-wrapper ${val.activeClass}`}>
            <div className="pack-name">{val.packName}</div>
            <div className="pack-details">{val.packDetails}</div>
            <div
              className="top-banner d-md-flex"
              style={{ background: val.bgColor }}
            >
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
            <ul className="pr-feature">
              {val.features.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
            <a href="#" className="trial-button">
              Start 30 days free trial
            </a>
            <div className="trial-text">No card required, cancel any time</div>
          </div>
          {/* /.pr-table-wrapper */}
        </div>
      ))}
    </div>
  );
};

export default PricingMonthly;
