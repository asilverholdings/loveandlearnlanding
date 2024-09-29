import React from "react";
import Image from "next/image";
const FeaturesContent = [
  {
    img: "94",
    title: "Web Clipper",
    desc: ` Deski Web offers a complete lineup of features from any
      major browser.`,
  },
  {
    img: "95",
    title: "All Platform",
    desc: ` Lorem ipsum began as scrambl nonsensical Latin derived from
      Cicero's quis`,
  },
  {
    img: "96",
    title: "Character Finding",
    desc: ` Creation timelines for the standard lorem ipsum passage
      vary, with qius some citing.`,
  },
  {
    img: "97",
    title: "App Integrations",
    desc: ` Lorem ipsum began as scrambl nonsensical Latin derived from
      Cicero's quis`,
  },
  {
    img: "98",
    title: "Web Application",
    desc: ` Lorem ipsum was purposefully designed to have no meaning,
      but appear like text`,
  },
  {
    img: "99",
    title: "Notes & Docs",
    desc: `  Letraset's dry-transfer sheets later entered the digital
      world via Aldus PageMaker.`,
  },
];
const FancyFeatureSeventeen = () => {
  return (
    <>
      {FeaturesContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="block-meta">
            <div className="icon d-flex align-items-end">
              <Image  width={28} height={28} src={`/images/icon/${val.img}.svg`} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            <p>{val.desc}</p>
          </div>
        </div>
        // .block-meta
      ))}
    </>
  );
};

export default FancyFeatureSeventeen;
