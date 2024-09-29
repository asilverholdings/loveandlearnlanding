import React from "react";
import Image from "next/image";
const featuresContent = [
  {
    bgColor: "#F7EDFF",
    icon: "166",
    title: "Chat & Messaging",
    descriptions:
      "Chat section is as significant as other sections on your website and it works best for your customers.",
    link: "#",
    dealyAnimation: "",
  },
  {
    bgColor: "#D8FFF1",
    icon: "167",
    title: "eCommerce",
    descriptions:
      "Build an online store that rank higher & sell more and integrates easily ooCommerce, to enhance the quality",
    link: "#",
    dealyAnimation: "100",
  },
  {
    bgColor: "#E6FBFF",
    icon: "168",
    title: "Payment Gatway",
    descriptions:
      "It saves the client cards on file securely for an effortless checkout experience using our advanced, secure payments system.",
    link: "#",
    dealyAnimation: "",
  },
  {
    bgColor: "#FFEBDB",
    icon: "169",
    title: "Appointments",
    descriptions:
      "Our Scheduling Platform is Simple yet Powerful that you need to grow and manage your business in single user interface.",
    link: "#",
    dealyAnimation: "100",
  },
];

const FancyFeatureThirtyTwo = () => {
  return (
    <div className="row">
      {featuresContent.map((item, i) => (
        <div
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.dealyAnimation}
          key={i}
        >
          <div className="block-style-thirtyTwo d-flex">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: item.bgColor }}
            >
              <Image width={24} height={24} style={{objectFit:'contain'}}      src={`/images/icon/${item.icon}.svg`} alt="icon" />
            </div>
            <div className="text">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
              <a href={item.link} className="theme-btn-ten">
                Learn more
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureThirtyTwo;
