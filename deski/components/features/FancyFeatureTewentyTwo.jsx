import React from "react";
import Image from "next/image";
const FeatureContent = [
  {
    icon: "121",
    title: "Appoinments",
    subTitle: `Online video meetings image Online Video Meetings SimplyBook`,
    bgColor: "#FF4A8B",
  },
  {
    icon: "122",
    title: "Class Booking",
    subTitle: `Add video meeting links to your appointments with the Zoom Ror Teleport integrations.`,
    bgColor: "#6D49FF",
  },
  {
    icon: "123",
    title: "Fast Support",
    subTitle: `Customize your virtual office with personalized page URLs, logos, colors and more.`,
    bgColor: "#FFB951",
  },
];

const FancyFeatureTewentyTwo = () => {
  return (
    <>
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="block-style-twentyTwo">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: val.bgColor }}
            >
              <Image width={27} height={27} style={{objectFit:'contain'}}      src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            <p>{val.subTitle}</p>
          </div>
          {/* /.block-style-twentyTwo */}
        </div>
      ))}
    </>
  );
};

export default FancyFeatureTewentyTwo;
