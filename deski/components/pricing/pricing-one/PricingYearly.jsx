import React from "react";

const PricingContent = [
  {
    packName: "FREE",
    price: "0",
    billCycle: "3 Free Agents",
    preFeatures: [
      "Email Ticketing",
      "Customer Management",
      "Help Center",
      "Private Knowledge Base",
      "Predefined SLAs",
      "Macros",
    ],
  },
  {
    packName: "Standard",
    price: "29",
    billCycle: "Per agent billed",
    preFeatures: [
      "Social & Community",
      "Channels",
      "Product-based Ticket",
      "Management",
      "Help Center Themes",
      "Gallery",
      "Public Knowledge Base",
      "SLAs & Escalations",
      "Workflow, Assignment",
    ],
  },
  {
    packName: "Start up",
    price: "138",
    billCycle: "Per agent billed",
    preFeatures: [
      "Multi-Department Ticketing",
      "Team Management",
      "Telephony",
      "Automatic Time Tracking",
      "Blueprint - Basic Process",
      "Management",
      "Round Robin Ticket",
      "Assignment",
      "Agent Collision",
      "Tasks, Events & Call",
      "Activities",
      "Mobile SDKs",
    ],
  },
  {
    packName: "BUSINESS",
    price: "156",
    billCycle: "Per agent billed",
    preFeatures: [
      "Live Chat",
      "Zia - Artificial Intelligence",
      "Help Center",
      "Customization",
      "Multi-brand Help Center",
      "Advanced Process",
      "Management",
      "Custom Functions",
      "Multi-level IVR",
      "Global Reports &",
      "Dashboards",
      "Scheduled Reports",
      "Contract Management",
      "Validation Rules",
    ],
  },
];

const PricingYearly = () => {
  return (
    <div className="row no-gutters">
      {PricingContent.map((val, i) => (
        <div className="col-lg-3 col-sm-6 pr-bg d-flex" key={i}>
          <div className="pr-table-wrapper">
            <div className="pack-name">{val.packName}</div>
            <div className="price">
              <sup>$</sup>
              {val.price}
            </div>
            <div className="bill-cycle">{val.billCycle}</div>
            <a href="#" className="theme-btn-three">
              Sign Up
            </a>
            <ul className="pr-feature">
              {val.preFeatures.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
          </div>
          {/* /.pr-table-wrapper  */}
        </div>
      ))}
    </div>
  );
};

export default PricingYearly;
