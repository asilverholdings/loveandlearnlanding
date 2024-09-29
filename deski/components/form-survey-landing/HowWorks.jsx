import React from "react";
import icon1 from "../../public/images/icon/190.svg";
import icon2 from "../../public/images/icon/191.svg";
import icon3 from "../../public/images/icon/192.svg";
import icon4 from "../../public/images/icon/193.svg";
import Image from "next/image";


const HowWorks = () => {
  const surveyContent = [
    {
      _id: 1,
      icon: icon1,
      title: "Choose",
      descriptions: `Simplify the process to create proposals.`,
      bgColor: "#F0F0FF",
      delayAnimation: "0",
    },
    {
      _id: 2,
      icon: icon2,
      title: "Create",
      descriptions: `Create interactive, error-free quotes.`,
      bgColor: "#FCF2DA",
      delayAnimation: "100",
    },
    {
      _id: 3,
      icon: icon3,
      title: "Check",
      descriptions: `Create interactive, error-free quotes.`,
      bgColor: "#EBFBED",
      delayAnimation: "200",
    },
    {
      _id: 4,
      icon: icon4,
      title: "Final",
      descriptions: `Create interactive, error-free quotes.`,
      bgColor: "#FFEEEE",
      delayAnimation: "300",
    },
  ];
  return (
    <>
      {surveyContent.map((survey) => (
        <div
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-delay={survey.delayAnimation}
          key={survey._id}
        >
          <div className="block-style-thirtyFive text-center mt-30">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: survey.bgColor }}
            >
              <Image src={survey.icon} alt="survey icon" />
            </div>
            <h4>{survey.title}</h4>
            <p>{survey.descriptions}</p>
          </div>
          {/* <!-- /.block-style-thirtyFive --> */}
        </div>
      ))}
    </>
  );
};

export default HowWorks;
