import React from "react";
import Link from "next/link";
import Image from "next/image";
const PricingContent = [
  {
    plan: "SILVER PLAN",
    price: "97",
    info: "Great for Individial Person",
    featureList: [
      {
        hintsText: "Send documents for eSigning",
        iconYesNo: "154",
      },
      {
        hintsText: "Multiple User",
        iconYesNo: "154",
      },
      {
        hintsText: "Refund",
        iconYesNo: "154",
      },
      {
        hintsText: "Bulk invite to sign",
        iconYesNo: "155",
      },
      {
        hintsText: "Live Chat",
        iconYesNo: "155",
      },
      {
        hintsText: "Send invite via Link",
        iconYesNo: "155",
      },
    ],
  },
  {
    plan: "GOLD PLAN",
    price: "199",
    info: "Great for Startup",
    featureList: [
      {
        hintsText: "Send documents for eSigning",
        iconYesNo: "154",
      },
      {
        hintsText: "Multiple User",
        iconYesNo: "154",
      },
      {
        hintsText: "Refund",
        iconYesNo: "155",
      },
      {
        hintsText: "Bulk invite to sign",
        iconYesNo: "155",
      },
      {
        hintsText: "Live Chat",
        iconYesNo: "155",
      },
      {
        hintsText: "Send invite via Link",
        iconYesNo: "155",
      },
    ],
  },
  {
    plan: "BUSINESS PLAN",
    price: "239",
    info: "Great for Large Business",
    featureList: [
      {
        hintsText: "Send documents for eSigning",
        iconYesNo: "155",
      },
      {
        hintsText: "Multiple User",
        iconYesNo: "155",
      },
      {
        hintsText: "Refund",
        iconYesNo: "155",
      },
      {
        hintsText: "Bulk invite to sign",
        iconYesNo: "155",
      },
      {
        hintsText: "Live Chat",
        iconYesNo: "155",
      },
      {
        hintsText: "Send invite via Link",
        iconYesNo: "155",
      },
    ],
  },
];

const PricingEight = () => {
  return (
    <div className="row no-gutters position-relative">
      <div className="col-lg-3 pr-list-wrapper d-none d-lg-block">
        <ul>
          <li>Send documents for eSigning</li>
          <li>Multiple User</li>
          <li>Refund</li>
          <li>Bulk invite to sign</li>
          <li>Live Chat</li>
          <li>Send invite via Link</li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-lg-9 pr-table-wrapper ms-auto">
        <div className="row no-gutters">
          {PricingContent.map((val, i) => (
            <div className="col-md-4 pr-column" key={i}>
              <div className="pr-header">
                <div className="plan">{val.plan}</div>
                <div className="price">$ {val.price}</div>
                <div className="info">{val.info}</div>
              </div>{" "}
              {/* /.pr-header */}
              <div className="pr-body">
                <ul>
                  {val.featureList.map((feature, i) => (
                    <li key={i}>
                      <span className="pr-text d-lg-none">
                        {feature.hintsText}
                      </span>
                      <Image width={16} height={16} style={{objectFit:'contain'}}   
                        src={`/images/icon/${feature.iconYesNo}.svg`}
                        alt="icon"
                        className="m-auto"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              {/* End pr-body */}
              <div className="pr-footer">
                <Link     href="/signup" className="trial-button">
                  Sign up
                </Link>
                <div className="trial-text">Get your 30 day free trial</div>
              </div>
              {/* End pr-footer */}
            </div>
            // /.pr-column
          ))}
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default PricingEight;
