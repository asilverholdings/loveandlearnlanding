import React from "react";

const PricingContent = [
  {
    pcakName: "Basic",
    bgColor: "#ffecec",
    price: "Free",
    packDetails: "TAKE GREAT NOTES",
    features: [
      "Sync up to 2 devices",
      "Find notes fast with search",
      "Access web tags",
      "Clip web pages",
      "25MB maximum note",
      "60MB monthly upload limit",
    ],
    animationDelay: "",
    activeItem: "",
  },
  {
    pcakName: "Reguler",
    bgColor: "#E3F8EF",
    price: "8.99",
    packDetails: "BE MORE PRODUCTIVE",
    features: [
      "Sync up to 2 devices",
      "Find notes fast with search",
      "Access web tags",
      "Clip web pages",
      "Apply rich formatting",
      "Clip web pages",
      "25MB maximum note size",
      "Access notes offline",
      "10GBmonthly upload limit",
      "Annotate PDFs",
    ],
    animationDelay: "100",
    activeItem: "active",
  },
  {
    pcakName: " Business",
    bgColor: "#fbf3e5",
    price: "17.99",
    packDetails: "Get more with team",
    features: [
      "Sync up to 2 devices",
      "Find notes fast with search",
      "Access web tags",
      "Apply rich formatting",
      "Clip web pages",
      "25MB maximum note",
      "Access notes offline",
      "18GB monthly upload limit",
    ],
    animationDelay: "200",
    activeItem: "",
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
          <div className={`pr-table-wrapper ${val.activeItem}`}>
            <div className="pack-name" style={{ background: val.bgColor }}>
              {val.pcakName}
            </div>
            <div className="price">{val.price}</div>
            <div className="pack-details">{val.packDetails}</div>
            <ul className="pr-feature">
              {val.features.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
            <a href="#" className="trial-button">
              Try it Free
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
